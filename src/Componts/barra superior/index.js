import React from 'react';
import More from '../../img/more.svg'
import './style.css';
function BarraSuperior() {
    return (
        <div className="bar">
         <div className="content">
                <ul>
                    <li className="active">
                        <span>Tweets </span>
                        <strong>1234</strong>
                    </li>
                    <li>
                        <span>Followings </span>
                        <strong>654</strong>
                    </li>
                    <li>
                        <span>Followers </span>
                        <strong>387</strong>
                    </li>
                    <li>
                        <span>Favorites </span>
                        <strong>265</strong>
                    </li>
                    
                </ul>
                
                <div className="actions">

                    <button>Follow</button>
                    < img src={More}/>
                    
                    
                </div>

            </div>

         </div>
           
        
    );
}

export default BarraSuperior;
