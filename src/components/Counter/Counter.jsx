import React from 'react';

class Counter extends React.Component {
    state = {
        good: 0, 
        neutral: 0,
        bad: 0
      };

      handelIncrement = (event) => {
        if (event.target.textContent === 'good') {
            this.setState(prevState => ({
        good: prevState.good + 1,
    }))
        } else if (event.target.textContent === 'neutral') {
            this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        })) 
        } else {
            this.setState(prevState => ({
            bad: prevState.bad + 1,
        })) 
        }
    }

    render () {
        return (
            <div className="Counter">
                <button type="button" onClick={this.handelIncrement}>good</button>
                <button type="button" onClick={this.handelIncrement}>neutral</button>
                <button type="button" onClick={this.handelIncrement}>bad</button>
                <span className='btn_value'>good: {this.state.good}</span>
                <span className='btn_value'>neutral: {this.state.neutral}</span>
                <span className='btn_value'>bad: {this.state.bad}</span>
            </div>
        )
    }
}

export default Counter;