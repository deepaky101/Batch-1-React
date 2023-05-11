import React, { useContext } from "react";
import noteContext from "../context/noteContext";

export default function ComponentC() {
  let a = useContext(noteContext);
  console.log(a);
  
  return (
    <div>
      <h3
        onClick={() => {
          a.setCount(a.count + 1);
        }}
      >
        ComponentC
      </h3>
    </div>
  );
}
