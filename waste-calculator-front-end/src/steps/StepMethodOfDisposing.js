import React from 'react';
import { getTexts } from '../texts';
import { methodOfDisposingOptions } from './options';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';

const StepMethodOfDisposing = ({ methodOfDisposing, updateForm }) => {
    const texts = getTexts('steps.methodOfDisposing');
    return (
        <div>
            <div className="waste-calculator__title">
                { texts.title }
            </div>
            <select value={ methodOfDisposing }
                    onChange={ (e) => updateForm('methodOfDisposing', e.target.value) }>
                { methodOfDisposingOptions.map(({ value, label }) => (
                    <option key={ value }
                            disabled={ value === '' && true }
                            value={ value }>
                        { label }
                    </option>)) }
            </select>
        </div>
    );
};

StepMethodOfDisposing.propTypes = {
    methodOfDisposing: PropTypes.string,
    updateForm: PropTypes.func
};

const mapStateToProps = (state) => ({
    methodOfDisposing: state.form.form.methodOfDisposing
});

export default connect(mapStateToProps, {
    updateForm
})(StepMethodOfDisposing);
