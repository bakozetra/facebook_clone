import React, { useContext, useState } from 'react'
import { Context } from '../Context';

function FeedComponent({ list }) {
  const [addComment, setAddComent] = useState("");
  const { facebook , setFacebook } = useContext(Context);

  function handleClik(event, id) {
    event.preventDefault()
    setAddComent(event.target.value);

  }
  function likeButton (idLike) {
    const likePost = facebook.map(postLike => {
      console.log(postLike.likes);
        postLike.likes.map(likeComment => {
          console.log(likeComment.likeId);
          if(likeComment.likeId === idLike) {
            // return {
            //   ...likeComment,
            //   likes : likeComment.UserId + 1
            // }
            console.log("hello");
          }
        })
       
       return postLike
    })
    console.log(likePost);
    setAddComent([...facebook])
   }
 
   console.log(likeButton);
  function handleSubmit(event, id) { 
    event.preventDefault(); 
    const newComment = {
      "nameuser" : "his is good" , 
      "dateComment": "",
      "content" : addComment, 
    }
    

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
        <a href="/"><img src={list.picture}></img>
        </a>{list.username}
      </div>
      <h5>{list.text}</h5>
      <img src={list.image}></img>
      <div>
      <button onClick={(e) => likeButton(e)}>like</button>
      </div>
      {list.comment.map((com, index) => {
        return (
          <>
            <img src="https://picsum.photos/100"></img>
            <p>{com.nameuser}</p>
            <h5 key={index}>{com.content}</h5>
          </>)
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
           required/>
          <button>Add comment</button>
        </label>
      </form>
    </div>
  )
}

export default FeedComponent
