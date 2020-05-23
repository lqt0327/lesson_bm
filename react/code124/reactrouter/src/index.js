import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common/public.css';
import RouterComponent from './router';
import * as serviceWorker from './serviceWorker';

function App(){
    return (
        <React.Fragment>
            <RouterComponent></RouterComponent>
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
