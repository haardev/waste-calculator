import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '../components/common/RadioGroup';
import Radio from '../components/common/RadioInput';
import { getTexts } from '../texts';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';

class StepGender extends Component {
    handleChange = (event) => {
        const { updateForm } = this.props;

        updateForm('gender', event.target.value);
    };

    render() {
        const { gender } = this.props;
        const texts = getTexts('steps.gender');

        return (
            <div>
                <div className="waste-calculator__title">
                    { texts.title }
                </div>
                <RadioGroup handleChange={ this.handleChange }
                            value={ gender }>
                    <Radio value='m'
                           label='Male'/>
                    <Radio value='f'
                           label='Female'/>
                    <Radio value='other'
                           label='Other'/>
                </RadioGroup>
            </div>
        );
    }
}

StepGender.propTypes = {
    gender: PropTypes.string,
    updateForm: PropTypes.func
};

const mapStateToProps = (state) => ({
    gender: state.form.form.gender
});

export default connect(mapStateToProps, {
    updateForm
})(StepGender);
