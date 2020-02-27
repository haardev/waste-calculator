import React from 'react';
import { getTexts } from '../texts';
import { mostThrownItemsOptions } from './options';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';

const StepMostThrownItems = ({ mostThrownItems, updateForm }) => {
    const texts = getTexts('steps.mostThrownItems');
    return (
        <div>
            <div className="waste-calculator__title">
                { texts.title }
            </div>
            <select value={ mostThrownItems }
                    onChange={(e) => updateForm('mostThrownItems', e.target.value) }
            >
                { mostThrownItemsOptions.map(({ value, label }) => (
                    <option key={ value }
                            disabled={ value === '' && true }
                            value={ value }>{ label }
                    </option>)) }
            </select>
        </div>
    );
};

StepMostThrownItems.propTypes = {
    mostThrownItems: PropTypes.string,
    updateForm: PropTypes.func
};

const mapStateToProps = (state) => ({
    mostThrownItems: state.form.form.mostThrownItems
});

export default connect(mapStateToProps, {
    updateForm
})(StepMostThrownItems);
