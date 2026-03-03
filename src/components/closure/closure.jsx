// Closure is  a function that has access to its outer variables
// in javascript even after the outer variable has stopped executing

import React from 'react'

const Closure = () => {
    let count = 0

    const innerClosure = () => {
        count++
        console.log("Count is", count); 
    }

  return (
    innerClosure
  )
}

export function createBankAccount (initialBalance){
    let balance = initialBalance
    return{
        deposit(amount){
            balance+=amount
            return balance
        },
        withdraw(amount){
            if (amount>balance){
                console.error("Insufficient Funds")
                return balance
            }else{
                balance -= amount
                return balance
            }
        },
        getBalance(){
            return balance
        }
    }
}

export default Closure