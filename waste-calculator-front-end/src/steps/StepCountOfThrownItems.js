import React from 'react';
import { getTexts } from '../texts';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';
import PropTypes from 'prop-types';
import { countOfThrownItemsOptions } from './options';

const StepCountOfThrownItems = ({ countTimesThrown, updateForm }) => {
    const texts = getTexts('steps.countOfThrownItems');
    return (
        <div>
            <div className="waste-calculator__title">
                { texts.title }
            </div>
            <select value={ countTimesThrown }
                    onChange={ (e) => updateForm('countTimesThrown', e.target.value) }
            >
                { countOfThrownItemsOptions.map(({ value, label }) => (
                    <option key={ value }
                            disabled={ value === '' && true }
                            value={ value }>
                        { label }
                    </option>)) }
            </select>
        </div>
    );
};

StepCountOfThrownItems.propTypes = {
    countTimesThrown: PropTypes.string,
    updateForm: PropTypes.func
};

const mapStateToProps = (state) => ({
    countTimesThrown: state.form.form.countTimesThrown
});

export default connect(mapStateToProps, {
    updateForm
})(StepCountOfThrownItems);
