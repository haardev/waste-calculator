import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

const initialState = loadState();
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(throttle(() => {
    saveState({
        form: store.getState().form
    });
}, 1000));

export default store;
