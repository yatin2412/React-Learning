import React from 'react'
import Closure, {createBankAccount} from "./components/closure/closure";

const JsxRenderer = () => {
    const closure = Closure()
    closure();
    closure();
    closure();
    const yatin = createBankAccount(1000)
    yatin.deposit(1000)
    yatin.withdraw(500)
    console.log(yatin.getBalance());
    console.log(yatin.balance);
  return (
    <div>JsxRenderer</div>
  )
}

export default JsxRenderer