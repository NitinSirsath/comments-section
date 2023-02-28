import React, {useState} from 'react'

interface Comment {
    id: number
    content: string
}

const dummyComments: Array<Comment> = [
    {
        id: 1,
        content: 'hello',
    },
    {
        id: 2,
        content: 'hi',
    },
]

const Home = (props: Props) => {
    const [comments, setComments] = useState(dummyComments)

  return (
    <div>
        <h1>comments</h1>
        <input type="text" />
        <button>comment</button>
        <div>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.content}</p>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default Home