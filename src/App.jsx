import React, { useState, useContext } from "react";
import { ThemeContext } from "./components/contextApi/useContextApi";
import TestComp from "./components/contextApi/testComp";
import Form from "./components/form/form";
import JsxRenderer from "./JsxRenderer";
import UnOptimizedList from "./components/optimizations/list/UnOptimizedList";
import OptimizedList from "./components/optimizations/list/OptimizedList";
import ModalUse from "./components/modal/ModalUse";
import SelfModalUse from "./components/modal/self-modal/SelfModalUse";
import Pagination from "./components/pagination/pagination";
import SelfPagination from "./components/pagination/selfPagination/selfPagination";
import TaskManager from "./components/taskManager/TaskManager.tsx"
import Accordion from "./components/accordian/Accordian.tsx"
import MultipleAccordian from "./components/accordian/MultipleAccordian.tsx"
import TabsComponent from "./components/tabs/Tabs.tsx"
import Useprogress from "./components/ProgressBar/Useprogress.tsx"

const App = React.memo(function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const { theme, themeChange } = useContext(ThemeContext);
  
  

  console.log("App render");

  return (
    <>
      {/* <Form /> */}
      {/* <JsxRenderer /> */}
      {/* <UnOptimizedList /> */}
      {/* <OptimizedList /> */}
      {/* <ModalUse /> */}
      {/* <SelfModalUse /> */}
      {/* <Pagination /> */}
      {/* <SelfPagination /> */}
      {/* <TaskManager /> */}
      {/* <Accordion /> */}
      {/* <MultipleAccordian /> */}
      {/* <TabsComponent /> */}
      <Useprogress />
    </>
  );
});

export default App;