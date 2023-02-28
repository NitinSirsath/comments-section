import React, {useState} from 'react'

type Props = {
    onComment: (newComment: Comment) => void
    comment: Comment
}

const CommentInput = ({onComment,comments}: Props) => {
    const [commentBody, setCommentBody] = useState('')

  

  return (
    <div>
         <input type="text" 
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
        />
        <button onClick={() => {
            onComment({
                // id: comments?.length + 1,
                body: commentBody,
                replies: [],
            });
            setCommentBody('')
        }}>comment</button>
    </div>
  )
}

export default CommentInput