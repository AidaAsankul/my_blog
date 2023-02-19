import React from "react";

const PopularItem = (props) => {
    return (
        <li className="w3-padding-16">
            <img src={props.img} alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
            <span className="w3-large">{props.title}</span><br />
            <span>{props.text}</span>
        </li>
    )
}


const Popular = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    <PopularItem
                    img="https://www.w3schools.com/w3images/workshop.jpg"
                    title="Lorem"
                    text="Sed mattis nunc"
                    />
                    <PopularItem
                        img="https://www.w3schools.com/w3images/gondol.jpg"
                        title="Ipsum"
                        text="Praes tinci sed"
                    />
                    <PopularItem
                        img="https://www.w3schools.com/w3images/skies.jpg"
                        title="Dorum"
                        text="Ultricies congue"
                    />
                    <PopularItem
                        img="https://www.w3schools.com/w3images/rock.jpg"
                        title="Mingsum"
                        text="Lorem ipsum dipsum"
                    />



                </ul>
            </div>
            <hr/>
        </>

    )
}

export default Popular;
