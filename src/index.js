import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import MyRouter from "./route";
import "./index.css"

const store = createStore(todoApp);
render(
    <Provider store={store}>
        <div className={"AllPage"}>
            <MyRouter/>
        </div>
    </Provider>,
    document.getElementById('root')
);