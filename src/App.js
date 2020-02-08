import React, { useEffect } from 'react'
import { orange } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import RootScreen from 'Screens/Root/RootScreen'
import createStore from 'Stores'
import './App.css'
import ponaminaluActions from './Stores/Ponaminalu/Actions'

const { store } = createStore()

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
  },
  status: {
    danger: orange[500],
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <Provider store={store}>
        <Router>
          <RootScreen/>
        </Router>
      </Provider>
    </ThemeProvider>

  )
}

export default App
