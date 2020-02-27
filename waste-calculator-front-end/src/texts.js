import _get from 'lodash/get';

export const texts = {
    generic: {
        buttons: {
            next: {
                label: 'Next'
            },
            back: {
                label: 'Back'
            }
        }
    },
    steps: {
        intro: {
            title: 'Some text that must be filled',
            description: 'Some text that must be filled'
        },
        gender: {
            title: 'What is your gender?'
        },
        age: {
            title: 'What is your age?'
        },
        countOfThrownItems: {
            title: 'How many items do you get rid of every time?'
        },
        frequencyOfThrowing: {
            title: 'How many times a year do you get rid of your garments?'
        },
        materialType: {
            title: 'What does this item mostly consist of ?'
        },
        methodOfDisposing: {
            title: 'How do you get rid of your garments ?'
        },
        mostThrownItems: {
            title: 'Which item do you get most rid of ?'
        },
        results: {
            title: ''
        }
    }
};

export const getTexts = (path) => {
    return _get(texts, path, {});
};
