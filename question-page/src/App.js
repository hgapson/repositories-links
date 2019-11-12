import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import AddContact from './components/AddContact';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import {Provider} from 'react-redux';
import store from './store';
import './Component.css';

const App = () => {
    return(
       <Provider store={store}>
        
        <div className="App">
          <Header />
          <div className="container">
            <Login/>
          </div>
          <Footer/>
        </div>
      
       </Provider>
        
)
}
export default App;
