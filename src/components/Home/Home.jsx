import React from 'react';
import './Home.css'
import Teampic from './../../Images/mmexport1632429287590.jpg';


function Home() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <h1 id="Homepageh1" class="text-center">Meet Our Team!</h1>
                <div class="text-center"><img className="teampic" src={Teampic}></img></div>
                </div>
            </div>
        </div>
    )
}

export default Home;