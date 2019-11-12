import React, { Component } from 'react';
import {PostData} from './PostData';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    login(){
        PostData('login', this.state).then ((result) => {
            let responseJson = result;
            console.log(responseJson);
        })
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        
    }
    render() {
        return (
            <div className='row small-up-2 medium-up-3 large-up4'>
            <div className='column bodyPart'>
                <h2>Login page</h2>
                <label>username</label>
                <input type='text' name='email' placeholder='username' onChange={this.onChange} />
                <label>password</label>
                <input type='password' name='password' placeholder='password' onChange={this.onChange}/>
                <input type='submit' value='login' className='login-button' onClick={this.login} />
            </div>
                
            </div>
        );
    }
}

export default Login;


