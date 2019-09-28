import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}))

export default function Input(props) {
  const classes = useStyle()

  return (
    <TextField
      className={classes.root}
      fullWidth
      {...props}
    />
  )
}
