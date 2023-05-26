import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/background.jpg';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Fighting With All</h1>
            <p>A game to delight all of the enjoy of the one-to-one combat...</p>
            <Link to="/Characters">
                <button>Start to discovering our game!</button>
            </Link>
        </div>
    </div>
  );
}

export default Home