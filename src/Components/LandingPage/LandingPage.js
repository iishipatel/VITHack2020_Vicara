import React from "react";
import "./landing.css";

import doc from "../../assets/landing.png"

import { Button } from "antd";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing_bg">
      <h1 className="heading_landing">
      Your medical report is just <span className="green_hulk">one-click</span> away.
      </h1>

      <p className="p_landing">
        A centralized database of a medical history of users in case of an
        emergency which is accessed by verified doctors. A one-stop application
        to store, share, and view medical history. 
      </p>

      <img alt="doc" className="circle_doc" src={doc}></img>

      <div className="Button_grp_landing">
        
        <Button block className="first_btn btn_landing">
          <Link to="/form">GET STARTED</Link>
        </Button>
      </div>
    </div>
  );
}

export default Landing;