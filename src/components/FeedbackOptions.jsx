import React from 'react';
import PropTypes from 'prop-types';
import css from './App.module.css';

const FeedbackOptions = ({ increment, options }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.btn}
            onClick={increment}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
  //     <div>
  //       {options.map(({button}) => {
  //         return <button key={button} type="button" className={css.btn} onClick={increment}>{button}</button>
  //       })
  //     </div>
  //   );
  // };
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  increment: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
