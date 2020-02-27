import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = (props) => {
    const {
        name,
        label,
        onChange,
        isChecked
    } = props;

    return (
        <label>
            <input
                { ...props }
                type="radio"
                name={ name }
                checked={ isChecked }
                onChange={ onChange }
            />
            { label }
        </label>
    );
};

RadioInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    isChecked: PropTypes.bool
};

export default RadioInput;
