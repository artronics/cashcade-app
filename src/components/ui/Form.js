import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'

const useStyle = makeStyles((theme) => ({
  form: {
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}))

export default function Form(props) {
  const classes = useStyle()
  const { children } = props

  return (
    <Paper className={classes.paper}>
      <form className={classes.form}>
        {children}
      </form>
    </Paper>
  )
}
