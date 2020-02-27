import StepIntro from './StepIntro';
import StepGender from './StepGender';
import StepAge from './StepAge';
import StepFrequencyOfThrowing from './StepFrequencyOfThrowing';
import StepCountOfThrownItems from './StepCountOfThrownItems';
import StepMethodOfDisposing from './StepMethodOfDisposing';
import StepMostThrownItems from './StepMostThrownItems';
import StepMaterialType from './StepMaterialType';
import StepResults from './StepResults';

export const steps = [
    {
        path: '/',
        label: 'Appy',
        icon: 'fa-check-circle',
        stepOrder: 0,
        component: StepIntro
    },
    {
        path: '/step-gender',
        label: 'Gender',
        icon: 'fa-check-circle',
        stepOrder: 1,
        component: StepGender,
    },
    {
        path: '/step-age',
        label: 'Age',
        icon: 'fa-check-circle',
        stepOrder: 2,
        component: StepAge,
    },
    {
        path: '/step-frequency-of-throwing',
        label: 'Frequency of Throwing',
        icon: 'fa-check-circle',
        stepOrder: 3,
        component: StepFrequencyOfThrowing,
    },
    {
        path: '/step-count-thrown-items',
        label: 'Count Items',
        icon: 'fa-check-circle',
        stepOrder: 4,
        component: StepCountOfThrownItems,
    },
    {
        path: '/step-method-of-disposing',
        label: 'Disposing',
        icon: 'fa-check-circle',
        stepOrder: 5,
        component: StepMethodOfDisposing,
    },
    {
        path: '/step-most-thrown-items',
        icon: 'fa-check-circle',
        label: 'Most thrown items',
        stepOrder: 6,
        component: StepMostThrownItems,
    },
    {
        path: '/step-material-type',
        label: 'Material Type',
        icon: 'fa-check-circle',
        stepOrder: 7,
        component: StepMaterialType,
    },
    {
        path: '/step-results',
        label: 'Evalulation',
        icon: 'fa-check-circle',
        stepOrder: 8,
        component: StepResults,
    }
];

export const getStep = (name, value) => {
    return steps.find((step) => step[name] === value);
};
