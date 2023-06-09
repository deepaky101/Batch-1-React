//~ ==============> React Libraries <==============
import { useEffect } from "react";

//~ ==============> Bootstrap Components <==============
import Form from "react-bootstrap/Form";

export default function FormText(props) {
  //~ ==============> Functions <==============
  //! --------------> On Change <--------------
  let handleChange = (e) => {
    // Where e is Synthetic Events
    props.setText(e.target.value);
    props.setNum(props.text.split(" ").length);
  };

  //~ ==============> useEffect Hook <==============
  useEffect(() => {
    document.title = "TextEditor " + props.count;
  });

  return (
    <Form className="container mt-3">
      <h1>{props.heading}</h1>
      <h2>{props.heading1}</h2>
      <p>{props.a}</p>
      <p className="mx-3">{props.alphabeticalCounts}</p>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={6}
          value={props.text}
          placeholder={props.placeH}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}
