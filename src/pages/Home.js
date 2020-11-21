import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello,</h1>
      <h2>My name is Tsin Moua.</h2>
      <br />
      <Link to="/about">
        <button type="button" className="btn btn-dark">Learn more about me</button>
      </Link>
      <Footer />
    </div>
  )
}

export default Home;
