//~ ==============> React Libraries <==============
import React from "react";

//~ ==============> Bootstrap Components <==============
import Button from "react-bootstrap/Button";

export default function AppButton(props) {
  return (
    <Button
      className="mx-2 my-2"
      variant={props.variant}
      onClick={props.function}
    >
      {props.name}
    </Button>
  );
}