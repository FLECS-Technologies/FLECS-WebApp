/*
 * Copyright (c) 2022 FLECS Technologies GmbH
 *
 * Created on Tue Sep 30 2022
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

import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { ReactComponent as EMLogo } from './Emerson-Electric-Company-Logo.svg'
import { darkModeContext } from '../components/ThemeHandler'

const Logo = () => {
  const DarkModeContext = React.useContext(darkModeContext)
  const { darkMode } = DarkModeContext

  return (
    <React.Fragment>
      <IconButton aria-label='Emerson-Logo' disabled={true}>
        <EMLogo
          width='94'
          height='54'
          style={{
            color: darkMode ? '#FFFFFF' : '#004B8D'
          }}
        />
      </IconButton>
      <Typography variant='caption' component='div' sx={{ flexGrow: 1 }} />
    </React.Fragment>
  )
}

export default Logo
