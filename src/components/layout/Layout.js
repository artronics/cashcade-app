import { CssBaseline } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Customer from '../../containers/customer'
import SideNav from './SideNav'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}))

function Layout() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon className="fa fa-bars" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SideNav/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Customer/>
      </main>
    </div>
  )
}

export default Layout
