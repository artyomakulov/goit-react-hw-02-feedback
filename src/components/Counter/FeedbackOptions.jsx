import React from 'react';
import css from './Counter.module.css'


const FeedbackOptions = ({ increment }) => {
    return (
            <div>
    <button type="button" className={css.btn} onClick={increment}>good</button>
    <button type="button" className={css.btn} onClick={increment}>neutral</button>
    <button type="button" className={css.btn} onClick={increment}>bad</button>
</div>
    )
}

export default FeedbackOptions