import React, { useContext, useState } from 'react'
import styles from './commentInput.module.css'
import userIcon from '../assets/user.png'
import { globalContext } from '../App'
import { ICommentInputProps } from './comment.types';




const CommentInput = ({ onComment, comments }: ICommentInputProps) => {
    const [commentBody, setCommentBody] = useState('')

    const { likes } = useContext(globalContext)


    const handleSubmit = () => {
        if (!commentBody) return
        onComment({
            id: comments?.length + 1,
            body: commentBody,
            replies: [],
            time: Date.now(),
            likes: likes,
            dislikes: 0

        });
        setCommentBody('')
    }



    return (
        <div className={styles.container}>
            <img src={userIcon} alt="user" height={40} />
            <textarea maxLength={200} className={styles.inputField} placeholder='Join the discussion!'
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                rows={1}
            />
            <button className={styles.buttonhandler} onClick={() => {
                handleSubmit()
            }}>comment</button>
        </div>
    )
}

export default CommentInput