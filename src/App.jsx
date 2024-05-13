import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { ButtonContainer } from "./components/ButtonContainer";

function App() {
  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount(count + 1);
  // };
  // const decrease = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      <h1>Redux Playground</h1>
      <hr />
      <Display />
      <ButtonContainer />

      {/* <Display count={count} />
      <ButtonContainer increase={increase} decrease={decrease} /> */}
    </>
  );
}

export default App;
