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

import { createTheme } from '@mui/material/styles'
import './Theme.css'

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Quicksand'"
    // fontFamilySecondary: "'Roboto Condensed', sans-serif"
  },

  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#e2000f',
            '& .MuiListItemIcon-root': {
              color: '#e2000f'
            }
          },
          '&$selected:hover': {
            color: 'e2000f',
            '& .MuiListItemIcon-root': {
              color: '#e2000f'
            }
          },
          '&:hover': {
            color: '#e2000f',
            '& .MuiListItemIcon-root': {
              color: '#e2000f'
            }
          }
        },
        selected: {}
      }
    }
  },

  container: {
    display: 'flex'
  }
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',

    primary: {
      // grey
      main: '#3f3f3f'
    },

    // red
    secondary: {
      main: '#e2000f'
    },

    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },

    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    },

    background: {
      default: '#212121',
      paper: '#313131'
    },

    divider: 'rgba(255, 255, 255, 0.12)'
  }
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'light',

    primary: {
      // light grey
      main: '#3f3f3f'
    },
    // red
    secondary: {
      main: '#e2000f'
    },

    background: {
      default: '#FAFAFA',
      paper: '#fff'
    }
  }
})

export { darkTheme, lightTheme }
