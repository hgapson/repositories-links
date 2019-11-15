import React from 'react';
import '../Component.css';



function Header(){
    //FUNCTION TO LOGOUT
// logoutFunctin=(e)=>{
//     localStorage.removeItem('user-token')
//     this.props.history.push('/')
//     console.log('you are logged Out')
//   }
  
   
    return(

        <div className="list">       
            <header className="django">
                <div className="call">
                <img src="code_catalyst.svg" alt="not found"></img>
                {/* <img src="code_catalyst.svg" alt="code catalyst"/> */}
                </div>
                               
                {/* <button onClick={this.logoutFunctin} 
                                            style={{float:'right'}}
                                            className="btn">
                                            LOGOUT
                                    </button>
                */}
            
            </header>
  
  </div>


      );
}
export default Header;