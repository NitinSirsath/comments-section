import { useState } from "react"
import React from 'react'
import styles from './sorting.module.css'
import { ISortingProps } from './comment.types';



const Sorting = ({ commentsList, setCommentsList }: ISortingProps) => {

    const [sortingBy, setSortingBy] = useState<Record<'likes' | 'time' | any, boolean | undefined>>({})
    const handleSorting = (value: 'likes' | 'time') => {
        if (!sortingBy[value]) {
            setCommentsList(
                (preV) => [...preV].sort((a, b) => {
                    return (b[value] || 0) - (a[value] || 0)
                })
            )
            setSortingBy({
                ...{},
                [value]: true
            })
        }
        else {
            setCommentsList(
                (preV) => [...preV].sort((a, b) => {
                    return (a[value] || 0) - (b[value] || 0)
                })
            )
            setSortingBy({
                ...{},
                [value]: false
            })
        }
    }


    return (
        <div className={styles.container}>
            <h4>Sort -</h4>
            <div>
                <button className={`${styles.buttonhandler} ${sortingBy.likes ? styles.activeButton : ''}`} onClick={() => handleSorting('likes')}>By likes</button>
            </div>
            <div>
                <button className={`${styles.buttonhandler} ${sortingBy.time ? styles.activeButton : ''}`} onClick={() => handleSorting('time')}>By time</button>
            </div>
        </div>
    )
}

export default Sorting;