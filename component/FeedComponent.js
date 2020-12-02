import React, { useContext, useState } from 'react'
import { Context } from '../Context';

function FeedComponent({ list }) {
  const [addComment, setAddComent] = useState("");
  const { facebook, setFacebook } = useContext(Context);
  let users = [
    {
      userId: "",
      userName: "Holly",
      profilePictureUrl: "https://picsum.photos/100",
    },
    {
      userId: "",
      userName: "Romance",
      profilePictureUrl: "https://picsum.photos/100",
    },
  ]

  console.log(users);

  function handleClik(event, id) {
    event.preventDefault()
    setAddComent(event.target.value);
  }
  function handleSubmit(event, id) {
    event.preventDefault();
    const newComment = {
      "nameUser": "",
      "dateComment": "",
      "content": addComment,
    }
    console.log(newComment);
    const newFacebook = facebook.map(post => {
      if (post.id === id) {
        return {
          ...post,
          comment: post.comment.push(newComment),
        }
      }
      return post
    });
    setFacebook([...facebook]);
  }

  return (
    <div className='container'>
      <div>
        <div>
          <a href="/"><img src={list.picture}></img>
          </a>{list.username}
          <p>{list.date}</p>
        </div>
      </div>
      <h5>{list.text}</h5>
      <img src={list.image}></img>
      <div>
        <button>like</button>
      </div>
      {list.comment.map((com, index) => {
        return (
          <div className='comment'>
            <div>
              <img src="https://picsum.photos/100"></img>
              <p>{com.nameUser}</p>
            </div>
            <h5 key={index}>{com.content}</h5>
          </div>)
      })}
      <form onSubmit={(e) => handleSubmit(e, list.id)} >
        <label>
          <input
            placeholder="add comment"
            value={addComment}
            name="content"
            onChange={(e) => {
              setAddComent(e.target.value)
            }}
            required />
          <button>Add comment</button>
        </label>
      </form>
    </div>
  )
}


export default FeedComponent
