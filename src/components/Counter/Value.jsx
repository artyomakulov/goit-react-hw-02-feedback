import React from 'react'

const Value = () => {
    return (
        <div className="Value">
            <span className='btn_value'>good: {this.state.good}</span>
            <span className='btn_value'>neutral: {this.state.neutral}</span>
            <span className='btn_value'>bad: {this.state.bad}</span>
        </div>
    )
    
}

export default Value