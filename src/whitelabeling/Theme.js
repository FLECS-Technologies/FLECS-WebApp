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
    fontFamily: 'Noto Sans'
    // fontFamilySecondary: "'Roboto Condensed', sans-serif"
  },

  components: {},

  container: {
    display: 'flex'
  }
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',

    primary: {
      // emerson green
      main: '#00AA7E'
    },

    // emerson blue
    secondary: {
      main: '#004B8D'
    },

    success: {
      main: '#00AA7E'
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
  },
  components: {
    ...baseTheme.components,
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#00AA7E',
            '& .MuiListItemIcon-root': {
              color: '#00AA7E'
            }
          },
          '&$selected:hover': {
            color: '00AA7E',
            '& .MuiListItemIcon-root': {
              color: '#00AA7E'
            }
          },
          '&:hover': {
            color: '#00AA7E',
            '& .MuiListItemIcon-root': {
              color: '#00AA7E'
            }
          }
        },
        selected: {}
      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#212121'
        }
      }
    }
  }
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'light',

    primary: {
      // emerson green
      main: '#00AA7E'
    },
    // emerson blue
    secondary: {
      main: '#004B8D'
    },

    success: {
      main: '#00AA7E'
    },

    background: {
      default: '#FAFAFA',
      paper: '#fff'
    }
  },
  components: {
    ...baseTheme.components,
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#004B8D',
            '& .MuiListItemIcon-root': {
              color: '#004B8D'
            }
          },
          '&$selected:hover': {
            color: '004B8D',
            '& .MuiListItemIcon-root': {
              color: '#004B8D'
            }
          },
          '&:hover': {
            color: '#004B8D',
            '& .MuiListItemIcon-root': {
              color: '#004B8D'
            }
          }
        },
        selected: {}
      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#C4CED1'
        }
      }
    }
  }
})

export { darkTheme, lightTheme }
