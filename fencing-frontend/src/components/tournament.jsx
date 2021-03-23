import React from "react";

export default function Tournament(props) {
  return (
    <div className="tournament">
      <div className="text" style={{ minWidth: "80px", flex: 1 }}>
        {props.name}
      </div>
      <div className="text" style={{ minWidth: "60px", flex: 0.55 }}>
        {props.start}
      </div>
      <div className="text" style={{ minWidth: "60px", flex: 0.55 }}>
        {props.end}
      </div>
      <div className="text" style={{ minWidth: "40px", flex: 1 }}>
        {props.location}
      </div>
      <div className="text" style={{ minWidth: "40px", flex: 1 }}>
        {props.host}
      </div>
      <div className="text" style={{ minWidth: "40px", flex: 1 }}>
        {props.venue}
      </div>
      <div className="text" style={{ minWidth: "78px", flex: 0.55 }}>
        {props.deadline}
      </div>
      <div className="text" style={{ minWidth: "40px", flex: 0.8 }}>
        {props.status}
      </div>
      <div
        style={{
          minWidth: "40px",
          flex: 1.8,
          border: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="points" style={{ backgroundColor: "#68B0AB" }}>
          JNR
        </div>
        <div className="points" style={{ backgroundColor: "#D55672" }}>
          D1A
        </div>
        <div className="points" style={{ backgroundColor: "#E9B44C" }}>
          DII
        </div>
        <div className="points" style={{ backgroundColor: "white" }}>
          DIII
        </div>
      </div>
    </div>
  );
}
