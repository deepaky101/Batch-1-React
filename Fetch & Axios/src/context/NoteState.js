import React, { useState } from "react";
import noteContext from "./noteContext";
import axios from "axios";

export default function NoteState(props) {
  const [api, setApi] = useState();

  let getData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3101353e0fce458aad50c936288d46cd"
    ).then((result) => {
      result.json().then((response) => {
        console.log(response.articles[1]);
        setApi(response.articles);
      });
    });

    // axios
    //   .get(
    //     "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3101353e0fce458aad50c936288d46cd"
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setApi(res.data.articles);
    //   });
    
  };

  return (
    <noteContext.Provider value={{ getData, api }}>
      {props.children}
    </noteContext.Provider>
  );
}
