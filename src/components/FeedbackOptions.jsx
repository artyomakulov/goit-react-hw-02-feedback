import React from 'react';
import PropTypes from 'prop-types';
import css from './App.module.css';

const FeedbackOptions = ({ increment, buttons }) => {
  return (
    <div>
      {Object.keys(buttons).map(button => {
        return (
          <button
            key={button}
            type="button"
            className={css.btn}
            onClick={increment}
          >
            {button}
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
};
