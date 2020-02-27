const LOCAL_STORAGE_NAME = 'formReducer';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LOCAL_STORAGE_NAME);

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_NAME, serializedState);
    }
    catch (err) {
        console.error('Error with loading the state.');
        console.log(err);
    }
};
