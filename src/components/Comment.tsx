import React, { useState } from 'react'
import CommentInput from './CommentInput'
import styles from './comment.module.css'
import userIcon from '../assets/user.png'
import likeIcon from '../assets/like.png'

type Props = {
    commentText: { body: string, replies: Array<object> }
}

const Comment = ({ commentText }: Props) => {
    const [isReply, setIsReply] = useState(false)
    const [reply, setReply] = useState(commentText.replies)

    const onComment = (newComment: object) => {
        setReply(preV => [...preV, newComment])
        setIsReply(false)
    }

    return (
        <div className={styles.container} style={{ marginLeft: '10px' }}>
            <div>
                <img src={userIcon} height={24} alt="usericon" />
            </div>
            <div>
                <div className={styles.userNameContainer}>
                <p style={{color: 'blueviolet', fontSize:'14px'}}>Clueless-Kun</p>
                <p className={styles.secondaryText}>7 hours ago</p>
               </div> 
                <p>{commentText.body}</p>
                <div className={styles.commentAdditionalInfoContiner}>
                    <p className={styles.likeIconContainer}><img src={likeIcon} alt="" /></p>
                    <p className={styles.secondaryText}>12 likes</p>
                    <p className={styles.secondaryText} onClick={() => setIsReply(preV => !preV)}>{isReply ? 'Cancel' : 'Reply'}</p>
                    <p className={styles.secondaryText}>Delete</p>
                </div>
                {isReply && <CommentInput onComment={onComment} comment={undefined} />}
                <div >
                    {reply?.map((commentText) => {
                        return <Comment commentText={commentText} />

                    })}
                </div>
            </div>
        </div>
    )
}

export default Comment