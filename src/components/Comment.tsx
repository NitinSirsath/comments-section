import React, {useState} from 'react'
import CommentInput from './CommentInput'

type Props = {
    commentText : object
}

const Comment = ({commentText}: Props) => {
    const [isReply, setIsReply] = useState(false)
    const [reply, setReply] = useState(commentText.replies)

    const onComment = (newComment: object) => {
        setReply(preV => [...preV, newComment])
        setIsReply(false)
    }
   console.log(reply, 'reply')
  return (
    <div>
        <p>{commentText.body}</p>
        <button onClick={() => setIsReply(!isReply)}>{isReply? 'cancel' : 'reply'}</button>
        {isReply && <CommentInput onComment={onComment}/>}
    </div>
  )
} 

export default Comment