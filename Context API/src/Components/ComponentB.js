import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import noteContext from "../context/noteContext";

export default function ComponentB() {
  let b = useContext(noteContext);
  return (
    <div>
      <h2>ComponentB</h2>
      {b.arr.map((e,i) => (
        <div key={i}>{e}</div>
      ))}
      <ComponentC />
    </div>
  );
}
