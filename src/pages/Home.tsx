import React, {useState, useEffect, useContext} from 'react'
import { globalContext } from '../App';
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput'
import styles from '../styles/home.module.css'

// interface Comment {
//     id: number
//     body: string
//     time?: number
//     likes?: number
//     dislikes?: number
//     replies?: Array<Comment>
// }

// const dummyComments: Array<Comment> = [
//     {
//         id: 1,
//         body: 'Dude thank you so much for this, now if only it was possible to somehow get this to stay as the top discussion so that new poeple dont make these mistakes',
//         replies : [],
//         time : 18.39,
//         likes : 10,
//         dislikes : 0
//     },
//     {
//         id: 2,
//         body: 'If I could recommend this discsussion to new poeple, I would',
//         replies : [],
//         time : 19.39,
//         likes : 12,
//         dislikes : 0
//     },
// ]

const Home = (props: Props) => {

    const { commentsList, setCommentsList } = useContext(globalContext)
    
    const [timeString, setTimeString] = useState('');

//   useEffect(() => {
//     const now = new Date();
//     const date = new Date(2022-03-01T03:24:59Z);
//     const diffSeconds = Math.round((now - date) / 1000);

//     if (diffSeconds < 60) {
//       setTimeString(`${diffSeconds} seconds ago`);
//     } else if (diffSeconds < 3600) {
//       const diffMinutes = Math.round(diffSeconds / 60);
//       setTimeString(`${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`);
//     } else if (diffSeconds < 86400) {
//       const diffHours = Math.round(diffSeconds / 3600);
//       setTimeString(`${diffHours} hour${diffHours > 1 ? 's' : ''} ago`);
//     } else {
//       const diffDays = Math.round(diffSeconds / 86400);
//       setTimeString(`${diffDays} day${diffDays > 1 ? 's' : ''} ago`);
//     }
//   }, []);

//   console.log(timeString, 'timeString');

    const onComment = (newComment: Comment) => {
      
        setCommentsList(preV => [...preV, newComment])
        
    }

    // const currentDateTime = Date().toLocaleString()
    // console.log(currentDateTime, 'currentDateTime');

  

    //     useEffect(() => {
    //         const date = new Date();
    //   const hours = date.getHours();
    //   const minutes = date.getMinutes();
    //   const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    //     setTimeString(timeString);
    //     }, [timeString])
      
    
    

      console.log(timeString, 'timeString');
    

    

    

  return (
    <div className={styles.container}>
        {/* <h1>{currentDateTime}</h1> */}
       <CommentInput onComment={onComment} comments={commentsList}/>
        {/* <button onClick={() => addComment()} >comment</button> */}
        <div className={styles.commentsLists}>
            {commentsList.map((commentText) => {
               return <Comment commentText={commentText}/>
            })
            }
        </div>
    </div>
  )
}

export default Home