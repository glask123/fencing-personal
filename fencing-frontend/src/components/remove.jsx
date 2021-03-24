import React, { useState, useEffect } from "react";
import Close from "../assets/x.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Remove() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, setValue] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    let id;
    data.forEach((item) => {
      if (item.name === value) {
        id = item._id;
      }
    });
    axios
      .delete(`/api/tournament/delete/${id}`)
      .then((res) => {
        alert(`${value} successfully deleted.`);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (!isLoaded) {
    return <div className="removebody">Loading...</div>;
  } else {
    return (
      <div className="removebody">
        <Link to="/" className="x">
          <img src={Close} alt="close" style={{ width: "100%" }} />
        </Link>
        <form className="removeform" onSubmit={handleSubmit}>
          <label htmlFor="name" className="removelabel">
            Remove Tournament
          </label>
          <br />
          <select
            id="name"
            name="name"
            className="removeselect"
            onChange={handleChange}
          >
            <option value="choose" disabled selected>
              Tournament Name
            </option>
            {data.map((item) => (
              <option value={item.name} key={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <br />
          <input type="submit" value="SUBMIT" className="removesubmit" />
        </form>
      </div>
    );
  }
}
