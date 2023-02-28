import React, { useContext, useState } from 'react'
import CommentInput from './CommentInput'
import styles from './comment.module.css'
import userIcon from '../assets/user.png'
import likeIcon from '../assets/like.png'
import { globalContext } from '../App'

type Props = {
    commentText: { body: string, replies: Array<object> }
}

const Comment = ({ commentText }: Props) => {
    const [isReply, setIsReply] = useState(false)
    const [reply, setReply] = useState(commentText.replies)
    const [editInput, setEditInput] = useState(false)
    

    const { likes, setLikes ,setCommentsList} = useContext(globalContext)

    console.log('likes', likes)

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
                    <p style={{ color: 'blueviolet', fontSize: '14px' }}>Clueless-Kun</p>
                    <p className={styles.secondaryText}>{commentText.time}</p>
                </div>
                <p className={styles.commentBodyText}>{commentText.body}</p>
                <div className={styles.commentAdditionalInfoContiner}>
                    <p className={styles.likeIconContainer} onClick={()=> {
                        setCommentsList(
                            preV => preV.map((comment) => {
                                if (comment.id === commentText.id) {
                                    return {
                                        ...comment,
                                        likes: comment.likes + 1
                                    }
                                }
                                return comment
                            })
                        )
                    }}><img src={likeIcon} alt="" /></p>
                    <p className={styles.secondaryText}>{commentText.likes} Likes</p>
                    <p className={styles.dislikeIconContainer} onClick={()=> {
                        setCommentsList(
                            preV => preV.map((comment) => {
                                if (comment.id === commentText.id) {
                                    return {
                                        ...comment,
                                        dislikes: comment.dislikes + 1
                                    }
                                }
                                return comment
                            })
                        )
                    }}><img src={likeIcon} alt="" /></p>
                    <p className={styles.secondaryText}>{commentText.dislikes} Dislikes</p>
                    <p className={styles.secondaryText} onClick={() => setIsReply(preV => !preV)}>{isReply ? 'Cancel' : 'Reply'}</p>
                    <p className={styles.secondaryText} onClick={() => {
                        setCommentsList(preV => preV.filter((comment) => comment.id !== commentText.id))
                    }} >Delete</p>
                    <p className={styles.secondaryText} onClick={()=> {
                        setEditInput(preV => !preV)
                    }}>Edit</p>
                </div>
                {
                        editInput && <div className={styles.editContainer}>
                            <input className={styles.editableInput} type="text" value={commentText.body} onChange={(e) => {
                                setCommentsList(preV => preV.map((comment) => {
                                    if (comment.id === commentText.id) {
                                        return {
                                            ...comment,
                                            body: e.target.value
                                        }
                                    }
                                    return comment
                                }))
                            }} />
                            <button className={styles.editButton} onClick={()=> {
                                setEditInput(preV => !preV)
                            }}>save</button>
                        </div>
                    }
                {isReply && <CommentInput  onComment={onComment} comment={undefined} />}
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