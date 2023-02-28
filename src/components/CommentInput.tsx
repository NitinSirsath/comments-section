import React, {useState} from 'react'
import styles from './commentInput.module.css'
import userIcon from '../assets/user.png'

type Props = {
    onComment: (newComment: Comment) => void
    comments: Array<Comment> 
}

const CommentInput = ({onComment,comments}: Props) => {
    const [commentBody, setCommentBody] = useState('')

  

  return (
    <div className={styles.container}>
        <img src={userIcon} alt="user" height={40}/>
         <input className={styles.inputField} placeholder='Join the Comment Section' type="text" 
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
        />
        <button className={styles.buttonhandler} onClick={() => {
            onComment({
                id: comments?.length + 1,
                body: commentBody,
                replies: [],
            });
            setCommentBody('')
        }}>comment</button>
    </div>
  )
}

export default CommentInput