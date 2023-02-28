import React, {useState} from 'react'
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput'
import styles from '../styles/home.module.css'

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
    const [commentsList, setCommentsList] = useState(dummyComments)
   

    const onComment = (newComment: Comment) => {
        // const newComment: Comment = {
        //     id: comments.length + 1,
        //     body: commentBody,
        //     replies: [],
        // }
        setCommentsList(preV => [...preV, newComment])
        // setCommentBody('')
    }

  return (
    <div className={styles.container}>
       <CommentInput onComment={onComment} comments={commentsList}/>
        {/* <button onClick={() => addComment()} >comment</button> */}
        <div className={styles.commentsLists}>
            {commentsList.map((commentText) => {
               return <Comment commentText={commentText}/>
            })
            }
        </div>
    </div>
  )
}

export default Home