import React from "react";
import Tournament from "./tournament";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <div className="label">
        <div className="labeltext" style={{ minWidth: "80px", flex: 1 }}>
          Name
        </div>
        <div className="labeltext" style={{ minWidth: "60px", flex: 0.55 }}>
          Start
        </div>
        <div className="labeltext" style={{ minWidth: "60px", flex: 0.55 }}>
          End
        </div>
        <div className="labeltext" style={{ minWidth: "40px", flex: 1 }}>
          Location
        </div>
        <div className="labeltext" style={{ minWidth: "40px", flex: 1 }}>
          Host
        </div>
        <div className="labeltext" style={{ minWidth: "40px", flex: 1 }}>
          Venue
        </div>
        <div className="labeltext" style={{ minWidth: "78px", flex: 0.55 }}>
          Deadline
        </div>
        <div className="labeltext" style={{ minWidth: "40px", flex: 0.8 }}>
          Status
        </div>
        <div
          className="labeltext"
          style={{ minWidth: "40px", flex: 1.8, border: "none" }}
        >
          Points
        </div>
      </div>
      <div className="tournaments">
        <Tournament
          name="March NAC"
          start="3/20"
          end="3/23"
          location="Detriot, MI"
          host="USA Fencing"
          venue="Cobo Convention Center"
          deadline="1/22"
          status="Registered"
          junior="Regional"
          d1a="National"
          d2=""
          d3=""
        />
      </div>
      <div className="nav">
        <Link to="/add">
          <img className="icon" src={Plus} alt="plus" />
        </Link>
        <Link to="/remove">
          <img className="icon" src={Minus} alt="minus" />
        </Link>
      </div>
    </div>
  );
}
