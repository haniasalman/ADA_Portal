import React from "react";
import PropTypes from "prop-types";

export default function EditStatusPopup({ handleClose, content }) {
  return (
    <div
      style={{
        position: "fixed",
        background: "#00000080",
        width: "100%",
        height: "100vh",
        top: "0",
        left: "0",
        zIndex: "999",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "343px",
          margin: "0 auto",
          height: "auto",
          marginTop: "220px",
          background: "#fff",
          borderRadius: "30px",
          padding: "20px",
          overflow: "auto",
        }}
      >
        {content}
        <button
          className="close-icon"
          type="button"
          style={{
            color: "#FFFFFF",
            border: "none",
            width: "200px",
            height: "50px",
            borderRadius: "40px",
            lineHeight: "20px",
            fontFamily: "Inter",
            textAlign: "center",
            marginTop: "5px",
            background: "#0AA539",
            fontSize: "15px",
          }}
          onClick={handleClose}
        >
          Okay! Got it
        </button>
      </div>
    </div>
  );
}
