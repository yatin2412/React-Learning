import React, { useState, useContext } from "react";
import { ThemeContext } from "./components/contextApi/useContextApi";
import TestComp from "./components/contextApi/testComp";
import Form from "./components/form/form";

const App = React.memo(function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const { theme, themeChange } = useContext(ThemeContext);

  console.log("App render");

  return (
    // <>
    //   <div className="card">
    //     {/* Local inline handlers here are fine; they don't get passed to children */}
    //     <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
    //     <button onClick={() => setValue((v) => v + 1)}>value is {value}</button>

    //     <p>Current Theme is {theme}</p>
    //     <button onClick={themeChange}>Change Theme</button>
    //   </div>

    //   {/* Pass only stable props to memoized children:
    //       - numbers/strings are compared by value
    //       - setters are stable references
    //       - NO inline function props here */}
    //   <TestComp label="Comp1" count={count} setCount={setCount} />
    //   <TestComp label="Comp2" count={value} setCount={setValue} />

    // </>
    <>
      <Form />
    </>
  );
});

export default App;