import { useState } from "react"
import React from 'react'
import styles from './sorting.module.css'
import { ISortingProps } from './comment.types';



const Sorting = ({ commentsList, setCommentsList }: ISortingProps) => {

    // const [likeSort, setLikeSort] = useState(false)




    const handleSorting = (value: 'likes' | 'time') => {
        if (value === 'likes') {
            setCommentsList(
                (preV) => {
                    const sortedComments = preV.sort((a, b) => {

                        return (b?.likes || 0) - (a?.likes || 0)

                    }

                    )
                    return { ...sortedComments }
                }
            )
            // setLikeSort(true)
        }
        else if (value === 'time') {
            setCommentsList(
                (preV) => preV.sort((a, b) => {
                    return (a?.likes || 0) - (b?.likes || 0)
                })
            )
        }
        // setLikeSort(preV => !preV)
    }

    console.log(commentsList, 'commentsList')

    return (
        <div className={styles.container}>
            <h4>Sort -</h4>
            <div>
                <button className={styles.buttonhandler} onClick={() => handleSorting('likes')}>By likes</button>
            </div>
            <div>
                <button className={styles.buttonhandler} onClick={() => handleSorting('time')}>By time</button>
            </div>
        </div>
    )
}

export default Sorting