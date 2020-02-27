import React from 'react';
import PropTypes from 'prop-types';

const RecommendationBlock = ({ title, description, type }) => {
    const classBaseName = 'waste-calculator';
    const className = `${ classBaseName }__recommendation-block ${ classBaseName }__recommendation-block--${ type }`;
    return (
        <div className={ className }>
            <div className="waste-calculator__recommendation-block__title">
                { title }
            </div>
            <div className="waste-calculator__recommendation-block__description">
                { description }
            </div>
        </div>
    );
};

RecommendationBlock.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.any
};

export default RecommendationBlock;
