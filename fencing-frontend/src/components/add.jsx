import React from "react";

export default function Add() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text" id="name" />
      <br />

      <label htmlFor="start">Start</label>
      <br />
      <input type="text" id="start" />
      <br />

      <label htmlFor="end">End</label>
      <br />
      <input type="text" id="end" />
      <br />

      <label htmlFor="loc">Location</label>
      <br />
      <input type="text" id="loc" />
      <br />

      <label htmlFor="host">Host</label>
      <br />
      <input type="text" id="host" />
      <br />

      <label htmlFor="venue">Venue</label>
      <br />
      <input type="text" id="venue" />
      <br />

      <label htmlFor="dead">Deadline</label>
      <br />
      <input type="text" id="dead" />
      <br />

      <label htmlFor="points">Points</label>
      <br />
      <input type="text" id="points" />
      <br />
    </form>
  );
}
