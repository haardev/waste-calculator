import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) =>
    React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
            isChecked: props.value === child.props.value,
            name: props.name,
            onChange: props.handleChange
        });
    });


RadioGroup.propTypes = {
    children: PropTypes.any,
    handleChange: PropTypes.func,
    name: PropTypes.string
};

export default RadioGroup;
