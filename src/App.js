//app.js
import React, { useState } from "react";
import "./App.css";
import Quotes from "./quotes";
import Jokes from "./jokes";
import Icons from "./icons.js";
import Game from "./game.js";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import gameImage from "../src/images/joystick.png";
import jokesGif from "../src/images/gossip.png";
import quotesGif from "../src/images/quote.png";
import iconImage from "../src/images/social-media.png";
import arrowImage from "../src/images/arrow-down.png";
import { Typography } from "@mui/material";

//=====================================================================================================================//


function App() {
  const [displayedContent, setDisplayedContent] = useState(null);

  // Function to display Quotes component
  const displayQuotes = () => {
    setDisplayedContent(<Quotes />);
  };

  // Function to display Game component
  const playGame = () => {
    setDisplayedContent(<Game />);
  };

  // Function to display Jokes component
  const displayJokes = () => {
    setDisplayedContent(<Jokes />);
  };

  // Function to display Icons component
  const displayIcons = () => {
    setDisplayedContent(<Icons />);
  };

  return (
    <div className="quote-container">
      {displayedContent ? (
        displayedContent
      ) : (
        <div>
          <Typography
            style={{
              marginLeft: "160px",
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            J I G Q
          </Typography>

          <WavingHandIcon
            style={{ width: "50px", height: "80px", marginLeft: "170px" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <img
              src={arrowImage}
              style={{
                width: "60px",
                height: "60px",
                flex: 1,
                margin: "0 20px",
                borderRadius: "20px",
                opacity: ".3",
              }}
              alt="Moving Icon"
            />
            <img
              src={arrowImage}
              style={{
                width: "60px",
                height: "60px",
                flex: 1,
                opacity: ".3",
                margin: "0 20px",
                borderRadius: "20px",
              }}
              alt="Moving Icon"
            />
            <img
              src={arrowImage}
              style={{
                width: "60px",
                height: "60px",
                flex: 1,
                margin: "0 20px",
                borderRadius: "20px",
                opacity: ".3",
              }}
              alt="Moving Icon"
            />
            <img
              src={arrowImage}
              style={{
                width: "60px",
                height: "60px",
                flex: 1,
                margin: "0 20px",
                borderRadius: "20px",
                opacity: ".3",
              }}
              alt="Moving Icon"
            />
          </div>

          <div
            style={{
              display: "flex",

              marginTop: "40px",
            }}
          >
            <img
              src={jokesGif}
              onClick={displayJokes}
              style={{
                cursor: "pointer",
                width: "60px",
                backgroundColor: "lightgreen",
                height: "60px",
                flex: 1,
                margin: "0 20px",
                borderRadius: "20px",
              }}
              alt="Moving Icon"
            />

            <img
              src={iconImage}
              style={{
                cursor: "pointer",
                backgroundColor: "lightgreen",
                width: "60px",
                height: "60px",
                flex: 1,
                margin: "0 20px",
                borderRadius: "20px",
              }}
              alt="Moving Icon"
              onClick={displayIcons}
            />
            <img
              style={{
                cursor: "pointer",
                backgroundColor: "lightgreen",
                width: "60px",
                height: "60px",
                flex: 1,
                margin: "0 20px",
                borderRadius: "20px",
              }}
              src={gameImage}
              alt="Start Game"
              onClick={() => playGame(true)}
            />
            <img
              src={quotesGif}
              style={{
                cursor: "pointer",
                width: "60px",
                backgroundColor: "lightgreen",
                height: "60px",
                flex: 1,
                margin: "0 20px",
                borderRadius: "20px",
              }}
              alt="Moving Icon"
              onClick={displayQuotes}
            />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontFamily: "cursive",
                fontSize: "20px",
                marginLeft: "20px",
              }}
            >
              J
            </Typography>
            <Typography style={{ marginTop: "10px" }}>okes</Typography>

            <Typography
              style={{
                marginLeft: "60px",
                fontWeight: "bold",

                fontFamily: "cursive",
                fontSize: "20px",
              }}
            >
              I
            </Typography>
            <Typography style={{ marginTop: "10px" }}>cons</Typography>
            <Typography
              style={{
                marginLeft: "50px",
                fontWeight: "bold",
                fontFamily: "cursive",
                fontSize: "20px",
              }}
            >
              G
            </Typography>
            <Typography style={{ marginTop: "10px" }}>ame</Typography>
            <Typography
              style={{
                marginLeft: "50px",
                fontWeight: "bold",
                fontFamily: "cursive",
                fontSize: "20px",
              }}
            >
              Q
            </Typography>
            <Typography style={{ marginTop: "10px" }}>uotes</Typography>
          </div>
        </div>
      )}
    </div>
  );
}

//===============================================================================================================//

export default App;
