import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavigationBar = ({
    nextStep,
    onNext,
    onBack,
    onShare,
    onStartAgain,
    completed
}) => {
    const formButtons = (
        <React.Fragment>
            <button onClick={ onBack }
                    className="waste-calculator__navigation-button waste-calculator__navigation-button--back">
                Back
            </button>
            <Link to={ nextStep }
                  className="waste-calculator__navigation-button waste-calculator__navigation-button--next"
                  onClick={ onNext }>
                Next
                <i className="fa fa-arrow-right"
                   aria-hidden="true"/>
            </Link>
        </React.Fragment>
    );

    const completedButtons = (
        <React.Fragment>
            <button className="waste-calculator__navigation-button"
                    onClick={ onStartAgain }>
                <i className="fa fa-repeat"
                   aria-hidden="true"/>
                Start again
            </button>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <nav className="waste-calculator__navigation-bar">
                { completed ? completedButtons : formButtons }
            </nav>
        </React.Fragment>
    );
};

NavigationBar.propTypes = {
    nextStep: PropTypes.string.isRequired,
    onBack: PropTypes.func,
    onNext: PropTypes.func.isRequired,
    onShare: PropTypes.func.isRequired,
    onStartAgain: PropTypes.func.isRequired,
    completed: PropTypes.bool
};

export default NavigationBar;
