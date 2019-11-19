import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import AddUrl from './components/AddUrl';
import SignUp from './components/SignUp';
import Login from './components/Login';


const App =()=>{
    return (
            <BrowserRouter>
            <Header/>
            <Switch>
                <React.Fragment>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/AddUrl" component={AddUrl}/>
                    <Route exact path="/SignUp" component={SignUp}/>
                   
                </React.Fragment>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default App;