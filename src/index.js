import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';



ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="LandingPage" element={<LandingPage />} />
    </Routes>
 
    {/* <App /> */}
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
