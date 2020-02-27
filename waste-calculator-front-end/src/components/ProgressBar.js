import React from 'react';
import PropTypes from 'prop-types';
import ProgressBarStep from './ProgressBarStep';
import {getStep, steps} from '../steps';

const ProgressBar = ({history}) => {
  const stepsList = steps.slice(1);
  const {location: {pathname}} = history;
  const currentStep = getStep('path', pathname);

  return (
      <div className="progress-bar__container">
        <ul className="progress-bar__list">
          {stepsList.map(({label, icon, stepOrder}, index) => {
            return <ProgressBarStep icon={icon}
                                    completed={stepOrder <= currentStep.stepOrder && true}
                                    key={index}
                                    label={label}/>;
          })}
        </ul>
      </div>
  );
};

ProgressBar.propTypes = {
  history: PropTypes.any
};

export default ProgressBar;
