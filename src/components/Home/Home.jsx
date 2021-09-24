import React from 'react';
import './Home.css';
import MyCarousel from '../Carousel/Carousel';


function Home() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="text-center">
                        <MyCarousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;