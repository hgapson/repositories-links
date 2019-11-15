import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
import { getJwt } from './utils/jwt';
import axios from 'axios';
//import {addContact} from '../actions/contactActions';


class AddContact extends Component {
  state = {
    github: '',
    heroku:'',
    errors: {}
  };

  componentDidMount(){ 
    const jwt = getJwt()
    //console.log(jwt);

    if(!jwt){
        console.log('no token found');
        this.props.history.push('/')
    }
    //https://codecatalyst-test.herokuapp.com/ 
    var data={github:this.state.git_hub_url, heroku:this.state.heroku_url}
       
       console.log(this.state)
    axios.post('https://codecatalyst-test.herokuapp.com/api/',data,
    {headers: {Authorization: `Token ${jwt}`}})
    .then(res =>{
        this.setState({url: res.data})
        //console.log(res.data.length);
    })
    .catch(err =>{
        localStorage.removeItem("user-token")
        this.props.history.push('/')
    })
}
//FUNCTION TO LOGOUT
logoutFunctin=(e)=>{
  localStorage.removeItem('user-token')
  this.props.history.push('/')
  console.log('you are loggedOut')
}
  onChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { git_hub_url,heroku_url} = this.state;

    return (
      <div className="Phonebook" >
          <div className='heading'>

                                    <img src="code_catalyst.svg" alt="not available"/>
                                    <button onClick={this.logoutFunctin} 
                                            style={{float:'right'}}
                                            className="btn">
                                            LOGOUT
                                    </button>
          <aside>
                                    <div><i className="fab fa-facebook-f facebook"></i></div>
                                    <div><i className="fab fa-twitter twitter"></i></div>
                                    <div><i className="fab fa-linkedin-in linked"></i></div>
                                    <div><i className="fas fa-paper-plane send"></i></div>
                                </aside>

              <h1>Submit your Project</h1> 
              <p>Project Details:  <span>This is the link to the project you need to complete <i className="fas fa-arrow-up"></i></span></p>
              <div className="pencil"></div>
          </div>
                  <form onSubmit={this.onSubmit}>    
                      <div className="form-row names" >
                            <div className="form-name">
                                <label>GitHub URL</label>
                                <input className="form-control" 
                                      type="url" 
                                      required placeholder="GitHub URL of your project" 
                                      id="cardCVC" 
                                      name='git_hub_url'
                                      value={git_hub_url}
                                      onChange={this.onChange}
                                    />
                              </div>
                      </div>

                      <div className="form-row names">
                              <div className="sname form-name">
                                  <label>Heroku URL</label>
                                  <input className="form-control" 
                                        type="url" 
                                        required placeholder="Heroku URL of your project" 
                                        id="cardCVC"
                                        name='heroku_url' 
                                        value={heroku_url}
                                        onChange={this.onChange}
                                        />
                                </div>
                      </div>
                
                                <button type="submit" className="btn btn-success button">SUBMIT APPLICATION</button>
                  
              </form>
            
    </div>

    );
  }
}
 
export default AddContact;

