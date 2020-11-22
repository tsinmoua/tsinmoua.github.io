import React from "react";
import "./style.css";
import projectList from "./ProjectList"
import Card from "../Card/Card"

function Project() {
    console.log(projectList);

    return (
        <div className="container carousel-container">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="false">
                <ol className="carousel-indicators">
                    {
                        projectList.map((project, index) => {
                            return (
                                <li data-target="#carouselExampleCaptions"
                                    data-slide-to={index}
                                    key={index}
                                    className="active"></li>
                            )
                        })
                    }
                </ol>

                <div className="carousel-inner">
                    {
                        projectList.map((project, index) => {
                            if (project.active === "active") {
                                return (
                                    <div className="carousel-item active"
                                        key={index}>
                                        <Card 
                                        src={project.image}
                                        alt={project.name}
                                        href={project.app}
                                        href2={project.github}
                                        />
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="carousel-item"
                                        key={index}>
                                        <Card 
                                        src={project.image}
                                        alt={project.name}
                                        href={project.app}
                                        href2={project.github}
                                        />
                                    </div>
                                )
                            }
                        })
                    }

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
        </div>
    );
}

export default Project;