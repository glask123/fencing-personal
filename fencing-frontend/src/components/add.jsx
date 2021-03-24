import React, { useState } from "react";
import Close from "../assets/x.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Add() {
  const [data, setData] = useState({
    name: "",
    start: "",
    end: "",
    location: "",
    host: "",
    venue: "",
    deadline: "",
    status: "",
    junior: "",
    d1a: "",
    d2: "",
    d3: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/tournament/new", data)
      .then((res) => {
        alert("Tournament has been added to the database.");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="addbody">
      <Link to="/" className="x">
        <img src={Close} alt="close" style={{ width: "100%" }} />
      </Link>

      <form className="addform" onSubmit={handleSubmit}>
        <h3 className="addtitle">Add Tournament</h3>
        <label className="addlabel" htmlFor="name">
          Name
        </label>
        <input
          className="addinput"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={data.name}
        />

        <label className="addlabel" htmlFor="start">
          Start
        </label>

        <input
          className="addinput"
          type="text"
          id="start"
          name="start"
          onChange={handleChange}
          value={data.start}
        />

        <label className="addlabel" htmlFor="end">
          End
        </label>

        <input
          className="addinput"
          type="text"
          id="end"
          name="end"
          onChange={handleChange}
          value={data.end}
        />

        <label className="addlabel" htmlFor="loc">
          Location
        </label>

        <input
          className="addinput"
          type="text"
          id="loc"
          name="location"
          onChange={handleChange}
          value={data.location}
        />

        <label className="addlabel" htmlFor="host">
          Host
        </label>

        <input
          className="addinput"
          type="text"
          id="host"
          name="host"
          onChange={handleChange}
          value={data.host}
        />

        <label className="addlabel" htmlFor="venue">
          Venue
        </label>

        <input
          className="addinput"
          type="text"
          id="venue"
          name="venue"
          onChange={handleChange}
          value={data.venue}
        />

        <label className="addlabel" htmlFor="dead">
          Deadline
        </label>

        <input
          className="addinput"
          type="text"
          id="dead"
          name="deadline"
          onChange={handleChange}
          value={data.deadline}
        />

        <label className="addlabel" htmlFor="status">
          Status
        </label>

        <input
          className="addinput"
          type="text"
          id="status"
          name="status"
          onChange={handleChange}
          value={data.status}
        />

        <label className="addlabel" htmlFor="junior">
          Points
        </label>
        <select
          id="junior"
          name="junior"
          className="removeselect addselect"
          onChange={handleChange}
        >
          <option value="junior" disabled selected>
            JUNIOR
          </option>
          <option value="none">N/A</option>
          <option value="regional">Regional</option>
          <option value="national">National</option>
        </select>
        <select
          id="d1a"
          name="d1a"
          className="removeselect addselect"
          onChange={handleChange}
        >
          <option value="d1a" disabled selected>
            DVIA
          </option>
          <option value="none">N/A</option>
          <option value="regional">Regional</option>
          <option value="national">Qualif.</option>
        </select>
        <select
          id="d2"
          name="d2"
          className="removeselect addselect"
          onChange={handleChange}
        >
          <option value="d2" disabled selected>
            DVII
          </option>
          <option value="none">N/A</option>
          <option value="regional">Regional</option>
          <option value="national">Qualif.</option>
        </select>
        <select
          id="d3"
          name="d3"
          className="removeselect addselect"
          onChange={handleChange}
        >
          <option value="d3" disabled selected>
            DVIII
          </option>
          <option value="none">N/A</option>
          <option value="regional">Regional</option>
          <option value="national">Qualif.</option>
        </select>
        <input type="submit" className="addsubmit" value="SUBMIT" />
      </form>
    </div>
  );
}
