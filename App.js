import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPost from './pages/AddPost'
import Feed from './pages/Feed'
import Options from './pages/Options'
import Header from './pages/Header'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/add">
          <AddPost />
        </Route>
        <Route path="/options">
          <Options />
        </Route>
      </Switch>
    </div>
  )
}

export default App
