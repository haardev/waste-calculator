import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { getTexts } from '../texts';
import { connect } from 'react-redux';
import { updateForm } from '../actions/formActions';
import {
    mainMaterialTypeOptions,
    syntheticMaterialTypeOptions,
    naturalMaterialTypeOptions,
    animalMaterialTypeOptions
} from './options';

const StepMaterialType = ({ updateForm, materialType }) => {
    const texts = getTexts('steps.materialType');

    const initState = {
        mainMaterial: _get(materialType, 'mainMaterial', ''),
        subMaterial: _get(materialType, 'subMaterial', '')
    };
    const [materialOptions, setMaterialOptions] = useState(initState);

    const handleOnChange = (event) => {
        const newState = {
            ...materialOptions,
            [event.target.name]: event.target.value
        };
        setMaterialOptions(newState);

        updateForm('materialType', newState);
    };

    const renderOption = (option, type, value) => {
        return (
            <select
                value={ value }
                name={ type }
                onChange={ handleOnChange }>
                { option.map(({ value, label }) =>
                    <option key={ value }
                            value={ value }>{ label }
                    </option>
                ) }
            </select>
        );
    };

    const { mainMaterial, subMaterial } = materialOptions;
    return (
        <div>
            <div className="waste-calculator__title">
                { texts.title }
            </div>
            { renderOption(mainMaterialTypeOptions, 'mainMaterial', mainMaterial) }
            { mainMaterial === 'plantFibers' && renderOption(naturalMaterialTypeOptions, 'subMaterial', subMaterial) }
            { mainMaterial === 'synthetic' && renderOption(syntheticMaterialTypeOptions, 'subMaterial', subMaterial) }
            { mainMaterial === 'animalFibers' && renderOption(animalMaterialTypeOptions, 'subMaterial', subMaterial) }
        </div>
    );
};

StepMaterialType.propTypes = {
    materialType: PropTypes.any,
    updateForm: PropTypes.func
};

const mapStateToProps = (state) => ({
    materialType: state.form.form.materialType
});

export default connect(mapStateToProps, {
    updateForm
})(StepMaterialType);
