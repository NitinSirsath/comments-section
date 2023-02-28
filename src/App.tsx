import { createContext, SetStateAction, useState } from 'react'

import './App.css'
import { GlobalContextValue, ICommentText } from './components/comment.types'
import Home from './pages/Home'



export const globalContext = createContext<GlobalContextValue>({
  likes: 0,
  setLikes: () => { },
  commentsList: [],
  setCommentsList: () => { }
})


const dummyComments: ICommentText[] = [
  {
    id: 1,
    body: 'Dude thank you so much for this, now if only it was possible to somehow get this to stay as the top discussion so that new poeple dont make these mistakes',
    replies: [],
    time: Math.round(new Date('2023-02-09').getTime()),
    likes: 10,
    dislikes: 0
  },
  {
    id: 2,
    body: 'If I could recommend this discsussion to new poeple, I would',
    replies: [],
    time: Math.round(new Date('2023-02-12').getTime()),
    likes: 12,
    dislikes: 0
  },
]



function App() {
  const [commentsList, setCommentsList] = useState(dummyComments)
  const [likes, setLikes] = useState(0)

  return (
    <globalContext.Provider value={{ likes, setLikes, commentsList, setCommentsList }}>
      <div className="app">
        <Home />
      </div>
    </globalContext.Provider>

  )
}

export default App
