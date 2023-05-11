import React from "react";
import noteContext from "./noteContext";

export default function NoteState(props) {
  const [count, setCount] = React.useState(0);
  let arr = [1, 2, 3]
  return (  
    <noteContext.Provider value={{ count, setCount, arr }}>
      {props.children}
    </noteContext.Provider>
  );
}
