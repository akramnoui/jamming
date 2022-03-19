import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";


 const LandingPage = () => {



      return (
        <div className="login" id="DIV_1">
            <div className="login__content" id="DIV_4">
                <h1 className="login__title" id="H1_5">Make Your Spotify Playlist</h1>
               <h3 className="h3-description">We are looking to create a 1 minute video ad for a new online shopping game. Our desired video was 
                   inspired by this video in the link below. 
                   We are looking to get a similar and even BETTER affect with our video, 
                </h3>
                <Link to={"/App"}>
                <button className="btn btn-primary btn-login" id="BUTTON_6">Sign in with Spotify</button>
                </Link>
            </div>
        </div>
        );
      }
  




export default LandingPage;