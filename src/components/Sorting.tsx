import { useState } from "react"
import React from 'react'
import styles from './sorting.module.css'

type Props = {
    commentsList: Array<object>
    setCommentsList: (newComment: object) => void
}

const Sorting = ({commentsList,setCommentsList}: Props) => {

    const [likeSort, setLikeSort] = useState(false)

    const handleSorting = (_value:string) => {
        if(!likeSort) {
            setCommentsList(
                ( preV: any[]) => preV.sort((a: { _value: number },b: { _value: number }) => {
                    return b._value - a._value
                })
            )
            setLikeSort(true)
        } else {
            setCommentsList(
                (preV: any[]) => preV.sort((a: { _value: number },b: { _value: number }) => {
                    return a._value - b._value
                })
            )
            setLikeSort(false)
        }
    }

    console.log(commentsList,   'commentsList')

  return (
    <div className={styles.container}>
        <h4>Sort -</h4>
        <div>
            <button className={styles.buttonhandler} onClick={()=> handleSorting('likes')}>By likes</button>
        </div>
        <div>
            <button className={styles.buttonhandler} onClick={()=> handleSorting('time')}>By time</button>
        </div>
       </div>
  )
}

export default Sorting