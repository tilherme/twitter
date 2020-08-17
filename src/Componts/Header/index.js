import React from 'react';
import Home from '../../img/home.svg';
import Notification from '../../img/notification.svg';
import Msg from '../../img/mail.svg';
import Logo from '../../img/twitter.svg';
import User from '../../img/user1.svg';

import './style.css'

function Header() {
    return (
       <header id="main-header">
        <div className="content">
                
                <nav>
                    <ul>
                        <li> <img src={Home} alt='inicio' />Home</li>
                        <li> <img src={Notification} alt='inicio' />Noticação</li>
                         <li> <img src={Msg} alt='inicio' />Mensagem</li>         
                        </ul>
                </nav>
                    <img src={Logo} alt='inicio' />
                    <div className="side">
                    
                
                        <input type="text" placeholder="Seach on twitter"/>
                        <img src={User}/>
                        <button>Tweet</button>
                    </div>
                    </div>

        </header>
    );
}

export default Header;
