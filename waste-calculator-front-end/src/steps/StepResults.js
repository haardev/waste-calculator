import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';
import PropTypes from 'prop-types';
import ResultBlock from '../components/ResultBlock';
import RecommendationBlock from '../components/RecommendationBlock';

const StepResults = ({ results }) => {
    const mockup = {
        options: [
            {
                value: 1,
                label: 'Melting Ice',
                title: 'You can drive car for 5 days'
            },
            {
                value: 2,
                label: 'Burning tree',
                title: 'You can drive car for 10 days'
            },
            {
                value: 10,
                label: 'Driving car',
                title: 'You can drive car for 50 days'
            }
        ]
    };

    const [activeOption, setActiveOption] = useState(1);

    const handleOnOptionClick = (value) => {
        setActiveOption(value);
    };

    const currentOption = mockup.options.find((option) => option.value === activeOption);

    return (
        <div>
            <div className="waste-calculator__title">Congrats! Here is your results</div>
            <ResultBlock title="YOUR CO2 FOOTPRINT"
                         indicator="500"
                         indicatorType={ <span>CO<sup>2</sup></span> }
                         matrix="kg/m3"
                         options={ mockup.options }
                         activeOption={ currentOption.value }
                         onOptionClick={ handleOnOptionClick }
                         descriptionText={ currentOption.title }/>
            <div className="spacer-top-20">
                <RecommendationBlock title={ 'You\'re doing well' }
                                     rating={ 2 }
                                     type={ 'positive' }
                                     description={ 'YOU’VE WASTED LESS FRUIT & VEG THAN THE AVERAGE PERSON' }/>
            </div>
        </div>
    );
};

StepResults.propTypes = {
    results: PropTypes.any
};

const mapStateToProps = (state) => ({
    results: state.form.results
});

export default connect(mapStateToProps, {
    updateForm
})(StepResults);
