import React from 'react';
import PropTypes from 'prop-types';

const ProgressBarStep = ({label, icon, completed}) => {
  const className = `progress-bar__element ${completed ? 'progress-bar__element--completed' : ''}`;
  return (
      <li className={className}>
            <span>
                <i className={`fa fa-2x ${icon}`}
                   aria-hidden="true"/>
            </span>
        <div className="progress-bar__description">
          {label}
        </div>
      </li>
  );
};

ProgressBarStep.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  completed: PropTypes.bool
};

export default ProgressBarStep;
