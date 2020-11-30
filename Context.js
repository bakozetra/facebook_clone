import React, { useEffect, useReducer, useState } from 'react'
import Facebook  from "./facebook.json"

const Context = React.createContext();

function ContextProvider(props) {
  const [facebook , setFacebook] = useState([]);
  function getFacebook () {
    setFacebook(Facebook);
  }
console.log(facebook);
useEffect(() => { 
  getFacebook()
} , [])
return (
  <Context.Provider value ={{facebook , setFacebook}}>
    {props.children}
  </Context.Provider>
)
}

export {ContextProvider , Context }

