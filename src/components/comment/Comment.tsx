import React, {useState} from 'react'

type Props = {
    commentText : Comment
}

const Comment = ({commentText}: Props) => {
    const [isReply, setIsReply] = useState(false)
  return (
    <div>
        <p>{commentText.body}</p>
        <button onClick={() => setIsReply(!isReply)}>reply</button>
        {isReply && <input type="text" />}
    </div>
  )
} 

export default Comment