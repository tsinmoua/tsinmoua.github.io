import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


function Home() {
    return (
        <div>
            <NavBar />
            <Header value="Contact" />

            <section id="contact" className="contact-container container">
                <p>Have a project in mind? Lets connect!</p>

                <div id="contact-information" className="row justify-content-center">
                    {/* <img src="./assets/images/gmail.png" alt="Email Address"> */}
                    <h3>&nbsp;&nbsp;tsinmoua@gmail.com&nbsp;&nbsp;</h3>
                    {/* <img src="./assets/images/phone.jpg" alt="Phone"> */}
                    <h3>&nbsp;( 651 ) 214-1980</h3>
                </div>

                <div className="links">
                    <a href="https://www.linkedin.com/in/tsinmoua/" target="_blank" rel="noreferrer"><input type="image"
                        src="./assets/images/linkedin.png" alt="LinkedIn Account" /></a>
                    <a href="https://github.com/tsinmoua" target="_blank" rel="noreferrer"><input type="image"
                        src="./assets/images/github.png" alt="GitHub Account" /></a>
                    <a href="./assets/images/Tsin Moua Resume.pdf" target="_blank" rel="noreferrer"><input type="image"
                        src="./assets/images/resume.png" alt="Resume" /></a>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Home;
