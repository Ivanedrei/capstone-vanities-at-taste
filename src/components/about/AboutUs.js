import React from "react";
import "./AboutUs.css";

export const AboutUs = () => {
    return (
        <>
            <div className="about_img">
                <img src="https://negosentro.com/wp-content/uploads/2020/08/pexels-pixabay-269077.jpg"
                    alt="buiness building" className="about_background"></img>
                <div className="centered">
                    About Us
                </div>
            </div>
            <h2 className="about_title">
                Who we are:
            </h2>
            <p id="paragraph" className="about_p1">
                After many years and generations of carpentry,
                we are the 4th generation who are making a difference in these modern days.
                As a team of high experienced artisanal carpenters,
                we offer the best quality to our community and far more...
            </p>
            <h2 className="about_title">
                Why choose us ?
            </h2>
            <p id="paragraph" className="about_p2">
                As a step up in Tech.we offer Custom Vanities for anyone who is looking a for
                unique look for their remodeling home projects, instead of the boring same feel of cabinets.
                We want our customers to enjoy their homes at their taste,
                so we recomend our products at the best high end materials and artisanal labor quality.
            </p>

        </>
    )
}