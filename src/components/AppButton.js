import React from 'react'
import Button from "react-bootstrap/Button";

export default function AppButton(props) {
  return (
    <Button className='mx-2' variant={props.variant} onClick={props.function}>
        {props.name}
      </Button>
  )
}
