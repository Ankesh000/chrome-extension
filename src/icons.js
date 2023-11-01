import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import App from "./App";

//====================================================================================================================//

const icons = [
  "/om.png",
  "/om1.png",
  "/lol.png",
  "/nanesha.png",
  "/gada.png",
  "/fun-glasses.png",
  "/holy.png",
  "/crown.png",
  "/joke1.png",
  "/joke2.png",
  "/joke3.png",
  "/joke4.png",
  "/joke5.png",
  "/joke6.png",
];

//==================================================================================================================//

export default function Icons() {
  const [icon, setIcon] = useState("/om.png");
  const [home, setHome] = useState(null);

  // Function to display App.js component

  const displayHome = () => {
    setHome(<App />);
  };

  //==============================================================================================================//

  const randomLikes = Math.floor(Math.random() * 99999);
  const randomDislikes = Math.floor(Math.random() * 9);
  const randomIndex = Math.floor(Math.random() * icons.length);
  const displayRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    setIcon(icons[randomIndex]);
  };

  useEffect(() => {
    setIcon(Math.floor(Math.random() * icons.length));
  }, []);

 //===================================================================================================================//

  return (
    <div>
      {home ? (
        <App />
      ) : (
        <div className="quote-container">
          <img
            src={icons[randomIndex]}
            alt="Logo"
            style={{ width: "50%", height: "40%" }}
          />
          <p id="quote"> </p>
          <div
            style={{
              display: "flex",
              direction: "column",
              padding: "5px",
              justifyContent: "space-evenly",
            }}
          >
            <ThumbUpAltIcon />{" "}
            <Typography style={{ marginLeft: "5px" }}>
              like: {randomLikes}
            </Typography>
            <ThumbDownAltIcon
              style={{ marginLeft: "10px", fontSize: "bold" }}
            />
            <Typography style={{ marginLeft: "5px" }}>
              dislike: {randomDislikes}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              color="error"
              value={home}
              style={{ marginRight: "15px", borderRadius: "20px" }}
              onClick={() => displayHome()}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ borderRadius: "20px" }}
              onClick={() => displayRandomIcon(randomIndex)}
            >
              Next
            </Button>
            <a href={icons[randomIndex]} download>
              <Button
                style={{ marginLeft: "15px", borderRadius: "20px" }}
                variant="contained"
                color="success"
              >
                Download
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
