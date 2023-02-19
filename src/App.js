import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Popular from "./components/Popular";
import Labels from "./components/Labels";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import "./index.css";

const App = () => {
    return(
        <div className="w3-content" style={{maxWidth: '1400px'}}>
            <Header/>
            <div className="w3-row">
                <div className="w3-col l8 s12">
                 <Posts
                     img="https://www.w3schools.com/w3images/woods.jpg"
                     title="TITLE HEADING"
                     title_desc="Title description"
                     created_date="April 7, 2014"
                     desc="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem
                        euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
                        ultricies mi non congue ullam corper. Praesent tincidunt sed
                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam
                        non fringilla."
                     count_comments="0"
                 />
                    <Posts
                        img="https://www.w3schools.com/w3images/bridge.jpg"
                        title="TITLE HEADING SECOND"
                        title_desc="Title description second"
                        created_date="May 9, 2022"
                        desc="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem
                        euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
                        ultricies mi non congue ullam corper. Praesent tincidunt sed
                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam
                        non fringilla."
                        count_comments="10"
                    />
                </div>
                <div className="w3-col l4">
                    <About/>
                    <Popular/>
                    <Labels/>
                </div>
            </div>
            <div className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
              <Footer/>
            </div>
        </div>
    )
}

export default App;