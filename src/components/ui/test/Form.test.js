import ThemeProvider from '@material-ui/styles/ThemeProvider/ThemeProvider'
import { mount } from 'enzyme'
import React from 'react'
import theme from '../../../theme/theme'
import Form from '../Form'

describe('<Form/>', () => {
  it('should render', () => {
    mount(<ThemeProvider theme={theme}><Form/></ThemeProvider>)
  })
})
