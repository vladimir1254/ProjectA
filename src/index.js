import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import MainApp from "./App";


ReactDOM.render(
            <MainApp state={store.getState()}/>,
        document.getElementById('root')
    );

// rerender(store.getState())
serviceWorker.unregister();
