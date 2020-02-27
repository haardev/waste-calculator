import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';

const StepAge = ({ age, updateForm }) => {
    return (
        <div>
            <div className="waste-calculator__title">
                What is your age?
            </div>
            <select value={ age }
                    onChange={ (e) => updateForm('age', e.target.value) }
            >
                <option value=""
                        disabled="disabled">
                    Select One
                </option>
                <option value="Under 18">Under 18</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65+">65+</option>
            </select>
        </div>
    );
};

StepAge.propTypes = {
    age: PropTypes.string,
    updateForm: PropTypes.func
};

const mapStateToProps = (state) => ({
    age: state.form.form.age
});

export default connect(mapStateToProps, {
    updateForm
})(StepAge);

