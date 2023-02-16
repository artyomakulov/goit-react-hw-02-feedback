import React from 'react'
import css from './Counter.module.css'

export default function Value({good, neutral, bad, total, positiveFeedBack}) {
    return (
        <div className={css.value}>
        <span className={css.btn_value}>good: {good}</span>
        <span className={css.btn_value}>neutral: {neutral}</span>
        <span className={css.btn_value}>bad: {bad}</span>
        <span className={css.btn_value}>total: {total}</span>
        <span className={css.btn_value}>positiveFeedBack: {Math.round(positiveFeedBack)}%</span>
    </div>
    )
}