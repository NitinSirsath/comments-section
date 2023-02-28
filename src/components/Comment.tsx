import React, {useState} from 'react'

type Props = {
    commentText : object
}

const Comment = ({commentText}: Props) => {
    const [isReply, setIsReply] = useState(false)
    const [reply, setReply] = useState(commentText.replies)
  return (
    <div>
        <p>{commentText.body}</p>
        <button onClick={() => setIsReply(!isReply)}>{isReply? 'cancel' : 'reply'}</button>
        {isReply && <input type="text" />}
    </div>
  )
} 

export default Comment