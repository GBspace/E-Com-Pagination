import './main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Layout from './Containers/Layout';
import Products from './Containers/Products';
import {browserHistory,Router,Route} from 'react-router';


const store = configureStore();

const jsx = (
    <Provider store={store}>
       <Router history={browserHistory}>
            <Route component={Layout}>
                <Route path='/' component={Products}></Route>
            </Route>
       </Router>
    </Provider>
);




ReactDOM.render(jsx,document.getElementById('root'));

