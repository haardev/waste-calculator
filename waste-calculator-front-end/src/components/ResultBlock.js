import React from 'react';
import PropTypes from 'prop-types';

const ResultBlock = ({
                       title,
                       descriptionText,
                       indicator,
                       matrix,
                       indicatorType,
                       options,
                       activeOption,
                       onOptionClick
                     }) => {
  return (
      <React.Fragment>
        <div className="waste-calculator__result-block">
          <div className="waste-calculator__indicator">
            <span>{indicator}</span>
            {indicatorType}
            <sup>{matrix}</sup>
          </div>
          <div className="waste-calculator__result-block__description">
            {descriptionText}
          </div>
          <ul className="waste-calculator__result-tab-list">
            {options.map(({value, label}) => (
                <li className={activeOption === value ? 'waste-calculator__result-tab-list--active' : ''}
                    onClick={() => onOptionClick(value)}
                    key={value}>{label}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
  );
};

ResultBlock.propTypes = {
  title: PropTypes.string,
  descriptionText: PropTypes.string,
  indicator: PropTypes.string,
  indicatorType: PropTypes.any,
  matrix: PropTypes.string,
  options: PropTypes.array,
  activeOption: PropTypes.any,
  onOptionClick: PropTypes.func
};

export default ResultBlock;
