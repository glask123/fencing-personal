import React, { useState, useEffect } from "react";
import Tournament from "./tournament";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("/api/tournaments")
      .then((res) => {
        setData(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, []);

  if (!isLoaded) {
    return <div className="App">Loading...</div>;
  } else {
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
          {data.map((item) => (
            <Tournament
              name={item.name}
              start={item.start}
              end={item.end}
              location={item.location}
              host={item.host}
              venue={item.venue}
              deadline={item.deadline}
              status={item.status}
              junior={item.junior}
              d1a={item.d1a}
              d2={item.d2}
              d3={item.d3}
              id={item._id}
            />
          ))}
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
}

/*

*/
