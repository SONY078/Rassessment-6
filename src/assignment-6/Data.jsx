import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const Name2 = createContext();
const Data = (props)=>
{
    const [student , setStudent ] = useState([
    {
       "Name":"Riki",
       "Age":20,
       "Course":"MERN",
       "Batch":"January",
       "id":1
    },
    {
      "Name":"Taehyun",
      "Age":21,
      "Course":"MERN",
      "Batch":"March",
      "id":2
    },
    {
      "Name":"Felix",
      "Age":21,
      "Course":"MERN",
      "Batch":"December",
      "id":3
    },
    {
      "Name":"Chan",
      "Age":25,
      "Course":"MERN",
      "Batch":"February",
      "id":4
    },
    {
      "Name":"Jin",
      "Age":27,
      "Course":"MERN",
      "Batch":"March",
      "id":5
    },

  ])
  return (
    <div>
        <Name2.Provider value = {[student,setStudent]}>
            {props.children}
        </Name2.Provider>
    </div>
  )
}

export default Data;