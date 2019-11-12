import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addContact} from '../actions/contactActions';


class AddContact extends Component {
  state = {
    git_hub_url: '',
    heroku_url:'',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { git_hub_url,heroku_url, errors } = this.state;

    const newContact = {
      git_hub_url, heroku_url,
      errors
    };

   this.props.addContact(newContact)
    this.setState({
      git_hub_url: '',
      heroku_url:'',
      errors: {}
    });

    // this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { git_hub_url,heroku_url} = this.state;

    return (
      <div className="Phonebook" >
          <div className='heading'>
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
  addContact.PropTypes={
  addContact:PropTypes.func.isRequired,

}
export default connect(null,{addContact})(AddContact);

