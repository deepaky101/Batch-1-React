import React, { useContext } from "react";
import ComponentA from "./Components/ComponentA";
import noteContext from "./context/noteContext";

export default function App() {
  let data = useContext(noteContext)
  // console.log(data);
  
  return (
    <center>
      <h1> App - {data.count} </h1>
      <ComponentA/>
    </center>
  );
}
