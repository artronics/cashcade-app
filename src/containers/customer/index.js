import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Form from '../../components/ui/Form'
import Input from '../../components/ui/Input'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(0),
  },
}))

// const box = (h, c) => (<div style={{ height: `${h}px`, backgroundColor: c }}/>)
const box = (h, c) => (<div style={{ height: `${h}px`, backgroundColor: c, margin: '8px' }}>FOO</div>)
export default function Customer() {
  const classes = useStyle()

  return (
    <Form>
      <div className={classes.root}>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              {box(400, 'blue')}
            </Grid>
            <Grid item xs={6}>
              <Input
                label="First Name"
                fullWidth
              />
              <Input
                label="Last Name"
              />
            </Grid>
          </Grid>
          <Grid item container sx={12}>
            <Grid item xs={6}>
              {box(10, 'tomato')}
            </Grid>
            <Grid item xs={6}>
              {box(10, 'lightblue')}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Form>
  )
}
