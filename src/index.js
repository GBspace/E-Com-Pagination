import './main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Layout from './Containers/Layout';
import Products from './Containers/Products';
import {BrowserRouter as Router,Route} from 'react-router-dom';


const store = configureStore();

const jsx = (
    <Provider store={store}>
       <Router>
            <Route path='/' component={Layout}></Route>
       </Router>
    </Provider>
);




ReactDOM.render(jsx,document.getElementById('root'));

