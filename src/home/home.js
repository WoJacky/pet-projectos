import React from 'react';
//import weahterimg from '../photo-src/weather-logo.jpg'
import weahterimg from '../photo-src/weather.jpg'
import recipeimg from '../photo-src/recipe-logo.jpg'
import memeimg from '../photo-src/meme-logo.jpg'
import { Link } from 'react-router-dom'
import './home.css';

function App() {
    const navStyle = {
        color: 'white'
    };
    return (
        <div className="App">
            <Link style={navStyle} to='/Recipe'>
                <div className="card">
                    <div className="front">
                        <div className="content">
                            <div className="image">
                                <img src={recipeimg} alt="Recipe" />
                            </div>
                            <div className="title">
                                Recipe API
                <div className="author"> Wojciech Jackowiak </div>
                            </div>
                        </div>
                    </div>

                    <div className="back">
                        <div className="content">
                            <div className="title">
                                Recipe APP
              </div>
                            <div className="sub-title">
                                Creating recipe generator
              </div>
                            <div className="info">
                                <ul>
                                    <li><i className="fa fa-user"></i> Wojtek</li>
                                    <li><i className="fa fa-map-marker-alt"></i> New year resolution </li>
                                    <li><i className="fa fa-heart"></i> Many ideas for meal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link style={navStyle} to='/Weather'>
                <div className="card">
                    <div className="front">
                        <div className="content">
                            <div className="image">
                                <img src={weahterimg} alt="Weather" />

                            </div>
                            <div className="title">
                                Weather APP
              <div className="author">Wojciech Jackowiak</div>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="content">
                            <div className="title">
                                Weather APP
            </div>
                            <div className="sub-title">
                                Creating Weather Forecast
            </div>
                            <div className="info">
                                <ul>
                                    <li><i className="fa fa-user"></i> Wojtek</li>
                                    <li><i className="fa fa-map-marker-alt"></i> Check weather in your town </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link style={navStyle} to='/Meme'>
                <div className="card">
                    <div className="front">
                        <div className="content">
                            <div className="image">
                                <img src={memeimg} alt="Meme" />
                            </div>
                            <div className="title">
                                Memes Generator
              <div className="author">Wojciech Jackowiak</div>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="content">
                            <div className="title">
                                MEME GENERATOR
            </div>
                            <div className="sub-title">
                                Create your own meme, collect likes
            </div>
                            <div className="info">
                                <ul>
                                    <li><i className="fa fa-user"></i> Wojtek</li>
                                    <li><i className="fa fa-map-marker-alt"></i> Have an ideas for meme ? </li>
                                    <li><i className="fa fa-heart"></i> Check this out</li>
                                    <li><i className="fa fa-comment"></i> Many pictures</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </div>

    );
}
export default App;
