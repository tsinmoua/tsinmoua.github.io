import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"


function Home() {
    return (
        <div>
            <NavBar />
            
            <section class="about-container" id="about">
                <h1>About</h1>
                <div className="row justify-content-center">
                    <div className="circle-image"></div>
                </div>
                <div>
                    <p>
                        I am a Full Stack Developer based in St. Paul, Minnesota.
                    <br />I can build and provide support for your full stack web applications.
                    <br />Feel free to take a look at my latest projects in my projects tab.
                </p>
                    <br />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home;
