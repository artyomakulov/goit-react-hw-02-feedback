import React from 'react'

export default function Value({good, neutral, bad}) {
    return (
        <div className="Value">
        <span className='btn_value'>good: {good}</span>
        <span className='btn_value'>neutral: {neutral}</span>
        <span className='btn_value'>bad: {bad}</span>
    </div>
    )
}