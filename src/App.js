import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import './App.css'
import Layout from './components/layout/Layout'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout/>
      </ThemeProvider>
    </div>
  )
}

export default App
