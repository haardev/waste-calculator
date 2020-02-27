import React from 'react';
import { getTexts } from '../texts';

const StepIntro = () => {
    const texts = getTexts('steps.intro');
    return (
        <div>
            <div className="waste-calculator__title">
                { texts.title }
            </div>
        </div>
    );
};

export default StepIntro;
