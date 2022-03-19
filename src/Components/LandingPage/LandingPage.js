import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";


 const LandingPage = () => {



      return (
        <div className="login" id="DIV_1">
            <div className="login__content" id="DIV_4">
                <h1 className="login__title" id="H1_5">Make Your Spotify Playlist</h1>
               <h3 className="h3-description">Playlist Making made easy ! With this App you can create your custom playlosts effortlessly with only on click
               , it only require you to Login with your Spotify Account and you're all set. More feature coming along !
                </h3>
                <Link to={"/App"}>
                <button className="btn btn-primary btn-login" id="BUTTON_6">Sign in with Spotify</button>
                </Link>
            </div>
        </div>
        );
      }
  




export default LandingPage;