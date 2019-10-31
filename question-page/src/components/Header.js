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
                                <aside>
                                    <div><i class="fab fa-facebook-f facebook"></i></div>
                                    <div><i class="fab fa-twitter twitter"></i></div>
                                    <div><i class="fab fa-linkedin-in linked"></i></div>
                                    <div><i class="fas fa-paper-plane send"></i></div>
                                </aside>

                    <div className="info1">
                        <label className="person"><b className="name">Log out</b></label>
                    </div>
            
            </header>
  
  </div>


      );
}
export default Header;