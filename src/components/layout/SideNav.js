import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'

import { makeStyles } from '@material-ui/styles'
import React from 'react'

const drawerWidth = 240

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}))

export default function SideNav() {
  const classes = useStyle()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}/>
      <List>
        <ListItem button key="Customers">
          <ListItemIcon><Icon className="fa fa-users"/></ListItemIcon>
          <ListItemText primary="Customers"/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
