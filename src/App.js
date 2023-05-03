//~ ==============> React Libraries <==============
import { useState } from "react";
import "./App.css";

//~ ==============> Bootstrap Components <==============

//~ ==============> Components <==============
import AppNavbar from "./components/AppNavbar";
import FormText from "./components/Form";
import AppButton from "./components/AppButton";
import Btn from "./components/Btn";

function App() {
  //~ ==============> (Hooks) States <==============
  let [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  //~ ==============> Functions <==============
  //! --------------> Upper Case <--------------
  let handleUpperCase = () => {
    setNewText(text.toUpperCase());
    setCount(count + 1);
  };

  //! --------------> Lower Case <--------------
  let handleLowerCase = () => {
    setNewText(text.toLowerCase());
    setCount(count + 1);
  };

  //! --------------> Segment <--------------
  let handleSegment_A = () => {
    let num = text.search("~");
    let a = text.slice(0, num).toUpperCase();
    let b = text.slice(num + 2);
    let c = `${a}${b}`;
    setNewText(c);
  };
  let handleSegment_a = () => {
    let num = text.search("~");
    let a = text.slice(0, num).toLowerCase();
    let b = text.slice(num + 2);
    let c = `${a}${b}`;
    setNewText(c);
  };

  //! --------------> Reset <--------------

  function Reset() {
    setNewText("");
    setText("");
  }

  return (
    <>
      {/* //! --------------> Navbar <-------------- */}
      <AppNavbar title="TextEditor" about="About US" />

      {/* //! --------------> Form-1 <-------------- */}
      <FormText
        heading="Enter text here to analyze"
        text={text}
        count={count}
        setText={setText}
        num={num}
        setNum={setNum}
        placeH="Enter text here..."
      />

      {/* //! --------------> Buttons <-------------- */}
      <div className="container d-flex justify-content-between">
        <div>
          <AppButton
            name="Upper Case"
            function={handleUpperCase}
            variant="primary"
          />
          <AppButton
            name="Lower Case"
            function={handleLowerCase}
            variant="primary"
          />
          <AppButton
            name="Segment (A) ~"
            function={handleSegment_A}
            variant="primary"
          />
          <AppButton
            name="Segment (a) ~"
            function={handleSegment_a}
            variant="primary"
          />
        </div>
        <AppButton name="Reset" function={Reset} variant="outline-danger" />
      </div>

      {/* //! --------------> Form-2 <-------------- */}
      <FormText
        heading1="Analyzed Text"
        placeH="Analyzed Text"
        text={newText}
        a={
          num +
          " Words, " +
          (text.length - (text.split(" ").length - 1)) +
          " Letters"
        }
      />

      <Btn name="UpperCase" variant="primary" function={handleUpperCase} />
    </>
  );
}

export default App;
