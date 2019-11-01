import React from 'react';
import '../Component.css';



function Header(){
   
    return(

        <div className="list">       
            <header className="django">
                <div className="call">
                <img src="code_catalyst.svg" alt="not found"></img>
                {/* <img src="code_catalyst.svg" alt="code catalyst"/> */}
                </div>
                               

                    <div className="info">
                        <label className="person"><b className="name">Log out</b></label>
                    </div>
            
            </header>
  
  </div>


      );
}
export default Header;