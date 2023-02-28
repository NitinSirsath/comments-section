import React, {useState} from 'react'
import Comment from '../components/Comment'

interface Comment {
    id: number
    body: string
    replies?: Array<Comment>
}

const dummyComments: Array<Comment> = [
    {
        id: 1,
        body: 'hello',
        replies : [],
    },
    {
        id: 2,
        body: 'hi',
        replies : [],
    },
]

const Home = (props: Props) => {
    const [comments, setComments] = useState(dummyComments)
    const [commentBody, setCommentBody] = useState('')

    const addComment = () => {
        const newComment: Comment = {
            id: comments.length + 1,
            body: commentBody,
        }
        setComments([...comments, newComment])
        setCommentBody('')
    }

  return (
    <div>
        <h1>comments</h1>
        <input type="text" 
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
        />
        <button onClick={() => addComment()} >comment</button>
        <div>
            {comments.map((commentText) => {
               return <Comment commentText={commentText}/>
            })
            }
        </div>
    </div>
  )
}

export default Home