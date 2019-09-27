import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import './App.css'
import Customer from './containers/customer'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/*<Layout/>*/}
        <Customer/>
      </ThemeProvider>
    </div>
  )
}

export default App
