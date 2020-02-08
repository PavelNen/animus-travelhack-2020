import React from 'react'
import { orange } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import RootScreen from 'Screens/Root/RootScreen'
import createStore from 'Stores'
import './App.css'

const { store } = createStore()

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
})

const App = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <RootScreen/>
      </Router>
    </ThemeProvider>
  </Provider>

export default App
