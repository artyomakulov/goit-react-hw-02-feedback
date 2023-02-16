import React from 'react';
import Buttons from './Buttons';
import Value from './Value';

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
        const {good, neutral, bad} = this.state
        return (  
            <div className="Counter">
            <Buttons increment={this.handelIncrement}/>
            <Value good={good} neutral={neutral} bad={bad}/>
            </div>
        )
    }
}

export default Counter;