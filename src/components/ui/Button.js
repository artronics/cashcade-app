import MatButton from '@material-ui/core/Button'
import React from 'react'


export default function Button(props) {
  const { children, color } = props
  return (
    <MatButton variant="contained" color={color}>{children}</MatButton>
  )
}
