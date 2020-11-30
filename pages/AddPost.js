import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import AddPostComponent from '../component/AddPostComponent';
import { Context } from '../Context'


function AddPost() {
  const { facebook } = useContext(Context)
  console.log(facebook);
  return (
    <div>
        <h1>add</h1>
        {
         facebook.map(list => {
           return (<p key={list.id}><AddPostComponent list={list}/></p>
           )
         })
        }
    </div>
  )
}

export default AddPost
