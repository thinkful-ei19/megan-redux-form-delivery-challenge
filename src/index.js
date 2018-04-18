import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './main.display';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <Display />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
