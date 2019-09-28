import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Form from '../../components/ui/Form'
import Input from '../../components/ui/Input'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // paddingLeft: theme.spacing(2),
    padding: theme.spacing(1),
  },
  form: {
    // marginBottom: theme.spacing(4),
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

const f = () => (
  <Grid container item spacing={1}>
    <Grid item xs={6}>
      <Grid item>
        <TextField
          label="First Name"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label="Last Name"
          fullWidth
        />
      </Grid>
    </Grid>
    <Grid item xs={6}>
      <Grid item xs={12}>
        <TextField
          label="Last Name kir"
          fullWidth
        />
      </Grid>
    </Grid>
  </Grid>
)
