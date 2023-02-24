/*
 * Copyright (c) 2022 FLECS Technologies GmbH
 *
 * Created on Thu Feb 03 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Button, Grid, Typography } from '@mui/material'
import CircularStatic from './CircularProgress'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ReplayIcon from '@mui/icons-material/Replay'
import ReportIcon from '@mui/icons-material/Report'
import PropTypes from 'prop-types'
import React from 'react'
import AppAPI from '../api/device/AppAPI'
import { ReferenceDataContext } from '../data/ReferenceDataContext'
import { setLicensedApp } from '../api/marketplace/LicenseService'
import { JobsContext } from '../data/JobsContext'
import { mapJobStatus } from '../utils/mapJobStatus'

export default function InstallApp (props) {
  const { install, app, version, tickets, handleActiveStep } = (props)
  const { appList, setUpdateAppList } = React.useContext(ReferenceDataContext)
  const [installing, setInstalling] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [retry, setRetry] = React.useState(false)
  const [installationMessage, setInstallationMessage] = React.useState('')
  const [completion, setCompletion] = React.useState(0)
  const { setFetchingJobs, currentInstallations } = React.useContext(JobsContext)
  const [startProgress, setStartProgress] = React.useState(false)
  const executedRef = React.useRef(false)

  function loadReferenceData (props) {
    if (appList) {
      const tmpApp = appList.find(obj => {
        return (obj.appKey.name === props.appKey.name && obj.appKey.version === props.appKey.version)
      })

      return tmpApp
    }
  }

  const installApp = React.useCallback(async (app) => {
    setInstalling(true)
    setSuccess(false)
    setError(false)
    setFetchingJobs(true)

    const appAPI = new AppAPI(app)
    appAPI.setAppData(loadReferenceData(app))
    await appAPI.installFromMarketplace(version, tickets[currentInstallations()]?.license_key, handleInstallationJob)

    if (appAPI.lastAPICallSuccessfull) {
      // trigger a reload of all installed apps
      setLicensedApp(tickets[currentInstallations()]?.license_key, app.title)
        .then()
        .catch()
        .finally(() => {
          setUpdateAppList(true)
        })
    }
    setFetchingJobs(false)
  })

  React.useEffect(() => {
    if (executedRef.current) { return }
    if (tickets?.length > 0 && app && install && !installing && (!success || !error)) {
      setRetry(false)
      installApp(app)
    }
    executedRef.current = true
  }, [retry])

  React.useEffect(() => {
    const timer = setInterval(
      () =>
        (installationMessage.includes('Installing') || installationMessage.includes('Downgrading') || installationMessage.includes('Updating'))
          ? setCompletion(completion + 1)
          : null,
      200
    )
    return () => {
      clearInterval(timer)
    }
  })

  const onRetryButtonClick = (event) => {
    executedRef.current = false
    setRetry(true)
  }

  const handleInstallationJob = (status) => {
    const mappedStatus = mapJobStatus(status)
    if (mappedStatus === 1) {
      setInstallationMessage(`We're busy installing or uninstalling another app. Installation of ${app.title} will begin soon.`)
    } else if (mappedStatus === 2) {
      setStartProgress(true)
      setInstallationMessage('Installing ' + app.title + '.')
    } else if (mappedStatus === 4) {
      setStartProgress(false)
      setInstallationMessage(app.title + ' successfully installed.')
      setSuccess(true)
      setInstalling(false)
    } else if (mappedStatus === -1) {
      setStartProgress(false)
      setInstallationMessage('Error during the installation of ' + app.title + '.')
      setSuccess(false)
      setError(true)
      setInstalling(false)
    }
    handleActiveStep(mappedStatus)
  }

  return (
    <div>
      <Grid data-testid='install-app-step' container direction="column" spacing={1} style={{ minHeight: 350, marginTop: 16 }} justifyContent="center" alignItems="center">
        <Grid item >
          {startProgress && CircularStatic(completion)}
          {(success && !installing) && <CheckCircleIcon data-testid='success-icon' fontSize='large' color='success'></CheckCircleIcon>}
          {error && <ReportIcon data-testid='error-icon' fontSize='large' color='error'></ReportIcon>}
        </Grid>
        <Grid item >
          <Typography data-testid='installationMessage'>{installationMessage}</Typography>
        </Grid>
        {(error) &&
        <Grid item >
          <Button onClick={onRetryButtonClick} startIcon={<ReplayIcon />}>Retry</Button>
        </Grid>}
      </Grid>
    </div>
  )
}

InstallApp.propTypes = {
  install: PropTypes.bool,
  app: PropTypes.object,
  appKey: PropTypes.object,
  version: PropTypes.string,
  tickets: PropTypes.array,
  handleActiveStep: PropTypes.func
}
