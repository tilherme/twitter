import React from 'react';
import Avatar from '../../img/user1.svg';
import Calendario from '../../img/calendar.svg';
import Pin from '../../img/pin.svg';
import DataDeNasc from '../../img/child.svg';
import Url from '../../img/url.svg';
import IconUser from '../../img/user.svg';
import IconGalery from '../../img/art.svg'
import './style.css';


function Profile(){
    return(
        <div className="wrapper-content content">
            <aside className="profile">
            <img src={Avatar}/>
            <h1>Guilherme Mateus</h1>
             <span>@developer web front-end</span>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
             <ul className="info">
                 <li><img src={Pin}/>Brazil</li>
                    <li><img src={Url} />https://github.com/</li>
                    <li><img src={Calendario} />16/08/20</li>
                    <li><img src={DataDeNasc} />10/04/99</li>

             </ul>
           <div className="widget followes">
               <strong><img src={IconUser}/> 3 followes that you know</strong>
               <ul>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                        <li></li>
                        <li></li>
                  

               </ul>
           </div>

                <div className="widget images">
                    <strong><img src={IconGalery} />266 Photos and Videos</strong>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>               

                    </ul>
                </div>

        
            
            </aside>
            <section className="timeline">
                time
                </section>
  
            <section className="widgets">
                <aside className="widget">
                    <div className=" widget follow">
                        <div className="title">
                            <strong>Who to follow</strong>
                            <a>Refresh</a>
                            <a>View all</a>
                        </div>
                        <ul>
                            <li>
                                <div className="profile">
                                    <img src={Avatar} />
                                    <div className="inf">
                                        <strong>Spade <span>@spade_be</span></strong>
                                        <button>Follow</button>
                                    </div>
                                </div>
                                <a>x</a>
                            </li>
                            <li>
                                <div className="profile">
                                    <img src={Avatar} />
                                    <div className="inf">
                                        <strong>Spade <span>@spade_be</span></strong>
                                        <button>Follow</button>
                                    </div>
                                </div>
                                <a>x</a>
                            </li>
                            <li>
                                <div className="profile">
                                    <img src={Avatar} />
                                    <div className="inf">
                                        <strong>Spade <span>@spade_be</span></strong>
                                        <button>Follow</button>
                                    </div>
                                </div>
                                <a>x</a>
                            </li>
                        </ul>

                    </div>

                </aside>
        

            </section>
        </div>
    );
}

export default Profile;