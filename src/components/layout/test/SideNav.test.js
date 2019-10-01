import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { mount } from 'enzyme'
import React from 'react'
import theme from '../../../theme/theme'
import SideNav from '../SideNav'

describe('SideNav', () => {
  // let shallow
  // beforeAll(() => {
  //   shallow = createShallow()
  // })
  it('should render', () => {
    mount(<ThemeProvider theme={theme}><SideNav/></ThemeProvider>)
  })
})
