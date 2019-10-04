import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Button from './Button'

const useStyle = makeStyles((theme) => ({
  form: {
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  controls: {
    flexGrow: 1,
  },
  control: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}))

export default function Form(props) {
  const classes = useStyle()
  const { children, controls } = props

  return (
    <Paper className={classes.paper}>
      <form className={classes.form}>
        {children}
      </form>
      <Divider className={classes.divider}/>
      <div className={classes.controls}>
        <Grid container direction="row-reverse">
          <Grid item className={classes.control}><Button color="primary">Save</Button></Grid>
          <Grid item className={classes.control}><Button>Cancel</Button></Grid>
        </Grid>
      </div>
    </Paper>
  )
}
