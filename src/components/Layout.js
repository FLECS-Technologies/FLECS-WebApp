import React, { useContext, useEffect } from 'react'

/*
 * Copyright (c) 2021 FLECS Technologies GmbH
 *
 * Created on Tue Nov 30 2021
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
import PropTypes from 'prop-types'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './Theme'
import { darkModeContext } from './ThemeHandler'

const Layout = ({ children }) => {
  const DarkModeContext = useContext(darkModeContext)
  const { darkMode, setDarkMode } = DarkModeContext

  useEffect(() => {
    const theme = localStorage.getItem('preferred-theme')
    if (theme) {
      const themePreference = localStorage.getItem('preferred-theme')
      if (themePreference === 'dark') {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    } else {
      localStorage.setItem('preferred-theme', 'light')
      setDarkMode(true)
    }
    // eslint-disable-next-line
  }, []);

  return (

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
