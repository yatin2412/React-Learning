import React, { useState, useContext } from "react";
import { ThemeContext } from "./components/contextApi/useContextApi";
import TestComp from "./components/contextApi/testComp";
import Form from "./components/form/form";
import JsxRenderer from "./JsxRenderer";


const App = React.memo(function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const { theme, themeChange } = useContext(ThemeContext);
  
  

  console.log("App render");

  return (
    <>
      <Form />
      <JsxRenderer />
    </>
  );
});

export default App;