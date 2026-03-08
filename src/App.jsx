import React, { useState, useContext } from "react";
import { ThemeContext } from "./components/contextApi/useContextApi";
import TestComp from "./components/contextApi/testComp";
import Form from "./components/form/form";
import JsxRenderer from "./JsxRenderer";
import UnOptimizedList from "./components/optimizations/list/UnOptimizedList";
import OptimizedList from "./components/optimizations/list/OptimizedList";
import ModalUse from "./components/modal/ModalUse";
import SelfModalUse from "./components/modal/self-modal/SelfModalUse";


const App = React.memo(function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const { theme, themeChange } = useContext(ThemeContext);
  
  

  console.log("App render");

  return (
    <>
      {/* <Form />
      <JsxRenderer />
      <UnOptimizedList /> */}
      {/* <OptimizedList /> */}
      {/* <ModalUse /> */}
      <SelfModalUse />
    </>
  );
});

export default App;