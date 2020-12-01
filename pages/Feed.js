import React, { useContext } from 'react'
import FeedComponent from '../component/FeedComponent';
import { Context } from '../Context'

function Feed() {
  const { facebook } = useContext(Context)
  return (
    <div>
        {
         facebook.map(list => {
           return (<div key={list.id}> <FeedComponent list={list}/></div>
           )
         })
        }
    </div>
  )
}

export default Feed
