import React from 'react';
import { getTexts } from '../texts';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';
import PropTypes from 'prop-types';
import { frequencyOfThrowingOptions } from './options';

const StepFrequencyOfThrowing = ({ updateForm, frequencyOfThrowing }) => {
    const texts = getTexts('steps.frequencyOfThrowing');
    return (
        <div>
            <div className="waste-calculator__title">
                { texts.title }
            </div>
            <select value={ frequencyOfThrowing }
                    onChange={ (e) => updateForm('frequencyOfThrowing', e.target.value) }
            >
                { frequencyOfThrowingOptions.map(({ value, label }) => (
                    <option key={ value }
                            disabled={ value === '' && true }
                            value={ value }>{ label }</option>)) }
            </select>
        </div>
    );
};

StepFrequencyOfThrowing.propTypes = {
    frequencyOfThrowing: PropTypes.string,
    updateForm: PropTypes.func
};

const mapStateToProps = (state) => ({
    frequencyOfThrowing: state.form.form.frequencyOfThrowing
});

export default connect(mapStateToProps, {
    updateForm
})(StepFrequencyOfThrowing);
