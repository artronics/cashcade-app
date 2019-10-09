import ThemeProvider from '@material-ui/styles/ThemeProvider/ThemeProvider'
import { mount } from 'enzyme'
import React from 'react'
import theme from '../../../theme/theme'
import Button from '../Button'
import Form from '../Form'

describe('<Form/>', () => {
  it('should render', () => {
    mount(<ThemeProvider theme={theme}><Form/></ThemeProvider>)
  })
  it('should render controls', () => {
    const controls = [
      { key: 1, text: 'foo', color: 'primary' },
      { key: 2, text: 'bar' },
    ]
    const form = mount(<ThemeProvider theme={theme}><Form controls={controls}/></ThemeProvider>)

    expect(form.find(Button).length).toBe(2)
  })
})
