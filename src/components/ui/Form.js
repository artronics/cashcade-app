import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Button from './Button'

const useStyle = makeStyles((theme) => ({
  form: {},
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

  const controlsElement = controls
    ? (
      <div className={classes.controls}>
        <Divider className={classes.divider}/>
        <Grid container direction="row-reverse">
          {controls.map((control) => (
            <Grid item className={classes.control} key={control.key}>
              <Button color={control.color}>{control.text}</Button>
            </Grid>
          ))}
        </Grid>
      </div>
    )
    : null

  return (
    <Paper className={classes.paper}>
      <form className={classes.form}>
        {children}
      </form>
      {controlsElement}
    </Paper>
  )
}
