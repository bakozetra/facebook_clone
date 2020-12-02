import React, { useContext, useState } from 'react'
import { Context } from '../Context';

function AddPostComponent() {
  const {facebook , setFacebook} = useContext(Context);
  const [addnewPost , setAddNewPost] = useState([])
  function AddPost(event) {
    event.preventDefault();
    const { image , text } = event.target
    console.log(event.target.value);
    console.log(text.value)
    const newPost = {
      "username": "",
      "picture": "",
      "date": new Date(Date.now()).toDateString(),
      "text": text.value,
      "image": image.value,
      "likes": [
        {
          "likeId": 2606822105162,
          "UserId": 1
        },
        {
          "likeId": 1006822320405,
          "UserId": 2
        }
      ],
      "comment": [
        {
          "commentId": 1806822922176,
          "nameUser": "",
          "dateComment": "",
          "content": ""
        }
      ],
      "id": 1606754806009
    }
    setFacebook([...facebook,newPost])
  console.log(newPost);
  } 
  console.log(addnewPost)
  return (
    <form onSubmit={(e) => AddPost(e)}>
      <div>
      <textarea 
      name="text"
      type = "text"
      value={addnewPost.text}
      />
      <input 
      name="image"
      type="url"
      value={addnewPost.image}
      />
      </div>
      <button>Add button</button>
    </form>
  )
}
export default AddPostComponent
