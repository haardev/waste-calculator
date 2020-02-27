import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const domEl = document.querySelectorAll('.waste-calculator-app');

if (domEl && domEl.length > 0) {
    domEl.forEach((item) => {
        ReactDOM.render(
            <HashRouter>
                <Provider store={ store }>
                    <App/>
                </Provider>
            </HashRouter>, item);
    });
}
