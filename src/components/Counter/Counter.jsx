import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import SectionTitle from './SectionTitle'
import css from './Counter.module.css'

class Counter extends React.Component {
    state = {
        good: 0, 
        neutral: 0,
        bad: 0,
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

    countTotalFeedback = ({ good, neutral, bad }) => {
        return good + neutral + bad;
      };

    countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
        const totalFeedback = good + neutral + bad;
    
        let positFeedPerctenger = (good / totalFeedback) * 100;
    
        return (positFeedPerctenger = positFeedPerctenger
          ? positFeedPerctenger
          : 0);
      };

    render () {
        const {good, neutral, bad} = this.state
        return (  
            <div className={css.Counter}>
            <SectionTitle title={"Please leave feedback"}> 
            <FeedbackOptions increment={this.handelIncrement}/>
            <Statistics good={good} neutral={neutral} bad={bad}  total={this.countTotalFeedback(this.state)} positiveFeedBack={this.countPositiveFeedbackPercentage(this.state)}/>
            </SectionTitle>
            </div>
        )
    }
}

export default Counter;