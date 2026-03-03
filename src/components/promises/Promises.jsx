import React, { useState } from 'react'

const Promises = () => {
    const [users, setUsers] = useState({})
    const promise1 = new Promise((resolve, reject) => {
        const sucess = true
        if(sucess){
            resolve("Promise Resolved")
        }else{
            reject("Some error occured")
        }
    })

    const promise2 = new Promise((resolve, reject) => {
        fetch("/api/data")
        .then(data => data.json())
        .then(setUsers)
        .then(() => {
            resolve("Data fetched")
        }).catch(error => {
            reject("Error occured", error)
        })
    })
  return (
    <div>Promises</div>
  )
}


export default Promises