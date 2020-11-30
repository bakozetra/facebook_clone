import React, { useEffect, useState } from 'react'
import Facebook  from "./facebook.json"

const Context = React.createContext();

function ContextProvider() {
  const [facebook , setFacebook] = useState();

  function getFacebook () {
    setFacebook(Facebook);
  }
useEffect(() => {
  getFacebook()
} , [])
}

