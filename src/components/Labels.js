import React from "react";
import styles from "./Tags.module.css"

console.log(styles);

const titleStyle = {
    fontSize:'31px',
    color:'darkred',
    textDecoration:'underline'
}

const blockStyle = {
    backgroundColor: 'orange'
}

const Labels = () => {
    return (
        <div className="w3-card w3-margin">
            <div style={blockStyle} className="w3-container w3-padding">
                <h4 style={titleStyle} className={styles.title}>Tags</h4>
            </div>
            <div className="w3-container my-container">
                <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> <span
                        className="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> <span
                        className="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span
                        className="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> <span
                        className="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span
                        className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span
                        className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> <span
                        className="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                </p>
            </div>
        </div>

    )
}
export default Labels;