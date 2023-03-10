/*
 * Copyright (c) 2022 FLECS Technologies GmbH
 *
 * Created on Thu Oct 13 2022
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
import CircularProgress from '@mui/material/CircularProgress'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ReplayIcon from '@mui/icons-material/Replay'
import ReportIcon from '@mui/icons-material/Report'
import PropTypes from 'prop-types'
import React from 'react'
import { ReferenceDataContext } from '../data/ReferenceDataContext'
import { setLicensedApp } from '../api/marketplace/LicenseService'
import { UpdateAppService } from '../api/device/UpdateAppService'
import { JobsContext } from '../data/JobsContext'
import { mapJobStatus } from '../utils/mapJobStatus'
import { sleep } from '../utils/sleep'

export default function UpdateApp (props) {
  const { update, app, from, to, tickets, handleActiveStep } = (props)
  const executedRef = React.useRef(false)
  const { appList, setUpdateAppList } = React.useContext(ReferenceDataContext)
  const [updating, setUpdating] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [retry, setRetry] = React.useState(false)
  const [installationMessage, setInstallationMessage] = React.useState('')
  const { setFetchingJobs, currentInstallations } = React.useContext(JobsContext)
  const [running, setRunning] = React.useState(false)

  const updateApp = React.useCallback(async (app, from, to, tickets) => {
    const installedApp = appList?.filter(obj => { return (obj.appKey.name === app.appKey.name && obj.appKey.version === from) }) || []
    setUpdating(true)
    setSuccess(false)
    setError(false)
    setFetchingJobs(true)

    // call update endpoint
    UpdateAppService(app?.appKey.name, to, tickets[currentInstallations()]?.license_key, installedApp[0]?.instances, handleInstallationJob)
      .then(() => {
        // trigger a reload of all installed apps
        setLicensedApp(tickets[currentInstallations()]?.license_key, app?.title)
          .then()
          .catch()
          .finally(async () => {
            setUpdateAppList(true)
            await sleep(1000)
            setFetchingJobs(false)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  })

  React.useEffect(() => {
    if (executedRef.current) { return }
    if (tickets?.length > 0 && app && update && from && to && !updating && (!success || !error)) {
      setRetry(false)
      updateApp(app, from, to, tickets)
    }
    executedRef.current = true
  }, [retry])

  const handleRetryClick = (event) => {
    setRetry(true)
    executedRef.current = false
  }

  const handleInstallationJob = (status) => {
    const mappedStatus = mapJobStatus(status)
    if (mappedStatus === 1) {
      setInstallationMessage(`We're busy installing or uninstalling another app. Installation of ${app.title} will begin soon.`)
    } else if (mappedStatus === 2) {
      setRunning(true)
      setInstallationMessage(((from < to) ? 'Updating...' : 'Downgrading'))
    } else if (mappedStatus === 4) {
      setRunning(false)
      setInstallationMessage('Congratulations! ' + app?.title + ' was successfully ' + ((from < to) ? 'updated' : 'downgraded') + ' from version ' + from + ' to version ' + to + '!')
      setSuccess(true)
      setUpdating(false)
    } else if (mappedStatus === -1) {
      setRunning(false)
      setInstallationMessage('Oops... ' + (error.message || 'Error during the ' + ((from < to) ? 'update' : 'downgrade') + ' of ' + app?.title + '.'))
      setSuccess(false)
      setError(true)
      setUpdating(false)
    }
    handleActiveStep(mappedStatus)
  }

  return (
    <div>
      <Grid data-testid='update-app-step' container direction="column" spacing={1} style={{ minHeight: 350, marginTop: 16 }} justifyContent="center" alignItems="center">
        <Grid item >
          {(updating && !running) && <CircularProgress color='secondary' />} {/* pending job */}
          {running && <CircularProgress />}
          {(success && !updating) && <CheckCircleIcon data-testid='success-icon' fontSize='large' color='success'></CheckCircleIcon>}
          {error && <ReportIcon data-testid='error-icon' fontSize='large' color='error'></ReportIcon>}
        </Grid>
        <Grid item >
          <Typography data-testid='installationMessage'>{installationMessage}</Typography>
        </Grid>
        {(error) &&
        <Grid item >
          <Button onClick={() => handleRetryClick()} startIcon={<ReplayIcon />}>Retry</Button>
        </Grid>}
      </Grid>
    </div>
  )
}

UpdateApp.propTypes = {
  update: PropTypes.bool,
  app: PropTypes.object,
  from: PropTypes.string,
  to: PropTypes.string,
  tickets: PropTypes.array,
  handleActiveStep: PropTypes.func
}
