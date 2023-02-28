import React, { ReactNode, useState, useEffect, useContext } from 'react'
import { globalContext } from '../App';
import Comment from '../components/Comment';
import { ICommentText } from '../components/comment.types';
import CommentInput from '../components/CommentInput'
import Sorting from '../components/Sorting';
import styles from '../styles/home.module.css'



const Home = () => {

    const { commentsList, setCommentsList } = useContext(globalContext)



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

    const onComment = (newComment: ICommentText) => {

        setCommentsList((preV: any) => [...preV, newComment])

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









    return (
        <div className={styles.container}>
            <CommentInput onComment={onComment} comments={commentsList} />
            <Sorting commentsList={commentsList} setCommentsList={setCommentsList} />
            {/* <button onClick={() => addComment()} >comment</button> */}
            <div className={styles.commentsLists}>
                {commentsList.map((commentText: ICommentText) => {
                    return <Comment key={commentText.id} commentText={commentText} />
                })
                }
            </div>
        </div>
    )
}

export default Home