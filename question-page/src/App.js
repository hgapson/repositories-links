import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddContact from './components/AddContact';
import SignUp from './components/SignUp';
import Login from './components/Login';


const App =()=>{
    return (
            <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/AddContact" component={AddContact}/>
                    <Route exact path="/SignUp" component={SignUp}/>
                   
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    )
}
export default App;