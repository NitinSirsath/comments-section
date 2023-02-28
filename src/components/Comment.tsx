import React, { ReactNode, useContext, useState } from 'react'
import CommentInput from './CommentInput'
import styles from './comment.module.css'
import userIcon from '../assets/user.png'
import likeIcon from '../assets/like.png'
import { globalContext } from '../App'
import { ICommentProps, ICommentText } from './comment.types';


const Comment = ({ commentText }: ICommentProps) => {
    const [isReply, setIsReply] = useState(false)
    const [reply, setReply] = useState(commentText.replies)
    const [editInput, setEditInput] = useState(false)


    const { setCommentsList } = useContext(globalContext)

    const handleCommentActions = (key: 'likes' | 'dislikes' | 'body', target?: string) => {
        setCommentsList(
            (preV) => preV.map((comment) => {
                if (comment.id === commentText.id) {
                    if (key === 'body') {
                        return {
                            ...comment,
                            [key]: target || ''
                        }
                    }
                    else {
                        return {
                            ...comment,
                            [key]: (comment[key] || 0) + 1
                        }
                    }
                }
                return comment
            })
        )
    }

    const onComment = (newComment: ICommentText) => {
        setReply(preV => [...preV as [], newComment])
        setIsReply(false)
    }

    return (
        <div className={styles.container} style={{ marginLeft: '10px' }}>
            <div>
                <img src={userIcon} height={24} alt="usericon" />
            </div>
            <div>
                <div className={styles.userNameContainer}>
                    <p style={{ color: 'blueviolet', fontSize: '14px' }}>Clueless-Kun</p>
                    <p className={styles.secondaryText}>{new Date(commentText.time || 0).toLocaleDateString()}</p>
                </div>
                <p className={styles.commentBodyText}>{commentText.body}</p>
                <div className={styles.commentAdditionalInfoContiner}>
                    <p className={styles.likeIconContainer} onClick={() => handleCommentActions('likes')}><img src={likeIcon} alt="" /></p>
                    <p className={styles.secondaryText}>{commentText.likes} Likes</p>
                    <p className={styles.dislikeIconContainer} onClick={() => handleCommentActions('dislikes')}><img src={likeIcon} alt="" /></p>
                    <p className={styles.secondaryText}>{commentText.dislikes} Dislikes</p>
                    <p className={styles.secondaryText} onClick={() => setIsReply(preV => !preV)}>{isReply ? 'Cancel' : 'Reply'}</p>
                    <p className={styles.secondaryText} onClick={() => {
                        setCommentsList((preV: any[]) => preV.filter((comment: { id: any }) => comment.id !== commentText.id))
                    }} >Delete</p>
                    <p className={styles.secondaryText} onClick={() => {
                        setEditInput(preV => !preV)
                    }}>Edit</p>
                </div>
                {
                    editInput && <div className={styles.editContainer}>
                        <input className={styles.editableInput} type="text" value={commentText.body} onChange={(e) => handleCommentActions('body', e.target.value)} />
                        <button className={styles.editButton} onClick={() => {
                            setEditInput(preV => !preV)
                        }}>save</button>
                    </div>
                }
                {isReply && <CommentInput onComment={onComment} comments={[]} />}
                <div>
                    {reply?.map((commentText) => {
                        console.log(reply, 'reply');
                        return <Comment commentText={commentText} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Comment