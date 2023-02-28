import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'

export const globalContext = createContext({})

interface Comment {
  id: number
  body: string
  time?: number
  likes?: number
  dislikes?: number
  replies?: Array<Comment>
}

const dummyComments: Array<Comment> = [
  {
      id: 1,
      body: 'Dude thank you so much for this, now if only it was possible to somehow get this to stay as the top discussion so that new poeple dont make these mistakes',
      replies : [],
      time : 18.39,
      likes : 10,
      dislikes : 0
  },
  {
      id: 2,
      body: 'If I could recommend this discsussion to new poeple, I would',
      replies : [],
      time : 19.39,
      likes : 12,
      dislikes : 0
  },
]



function App() {
  const [commentsList, setCommentsList] = useState(dummyComments)
  const [likes, setLikes] = useState(0)

  return (
    <globalContext.Provider value={{ likes, setLikes,commentsList ,setCommentsList}}>
      <div className="app">
      <Home />
    </div>
    </globalContext.Provider>
    
  )
}

export default App
