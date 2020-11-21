import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"


function Home() {
    return (
        <div>
            <NavBar />
            <section className="projects-container" id="projects">
                <h1>Projects</h1>

                <div className="container carousel-container">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="false">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/* <img src="./assets/images/budgetTracker.jpg" className="d-block w-100 project-images"
                                alt="Budget Tracker"> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://budget-hero.herokuapp.com/" target="_blank"
                                        className="btn app-button">App</a>
                                    <a href="https://github.com/ShueMoua/Budget_Tracker" target="_blank"><input
                                        type="button" className="github-button btn" value="GitHub" /></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="./assets/images/artistsinthenews.jpg" className="d-block w-100 project-images"
                                alt="Artists in the News"> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://budget-hero.herokuapp.com/" target="_blank"
                                        className="btn app-button">App</a>
                                    <a href="https://github.com/ShueMoua/Budget_Tracker" target="_blank"><input
                                        type="button" className="github-button btn" value="GitHub" /></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="./assets/images/burger.jpg" className="d-block w-100 project-images" alt="Burger"> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://budget-hero.herokuapp.com/" target="_blank"
                                        className="btn app-button">App</a>
                                    <a href="https://github.com/ShueMoua/Budget_Tracker" target="_blank"><input
                                        type="button" className="github-button btn" value="GitHub" /></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="./assets/images/gymquiz.jpg" className="d-block w-100 project-images" alt="Gym Quiz"> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://budget-hero.herokuapp.com/" target="_blank"
                                        className="btn app-button">App</a>
                                    <a href="https://github.com/ShueMoua/Budget_Tracker" target="_blank"><input
                                        type="button" className="github-button btn" value="GitHub" /></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="./assets/images/NoteTaker.jpg" className="d-block w-100 project-images" */}
                                alt="Note Taker">
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://budget-hero.herokuapp.com/" target="_blank"
                                        className="btn app-button">App</a>
                                    <a href="https://github.com/ShueMoua/Budget_Tracker" target="_blank"><input
                                        type="button" className="github-button btn" value="GitHub" /></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="./assets/images/WeatherDashboard.jpg" className="d-block w-100 project-images" */}
                                alt="Weather Dashboard">
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://budget-hero.herokuapp.com/" target="_blank"
                                        className="btn app-button">App</a>
                                    <a href="https://github.com/ShueMoua/Budget_Tracker" target="_blank"><input
                                        type="button" className="github-button btn" value="GitHub" /></a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;
