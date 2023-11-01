import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import App from "./App";

//=====================================================================================================================//


const jokes = [
  "Q. What is the biggest lie in the entire universe? Answer.I have read and agree to the Terms & Conditions.",
  "Q. How does a computer get drunk ? Answer. It takes screenshots",
  "We'll we'll we'll...if it isn't autocorrect.",
  "Q. What is the biggest lie in the entire universe? Answer.I have read and agree to the Terms & Conditions.",
  "Q. How does a computer get drunk ? Answer. It takes screenshots",
  "We'll we'll we'll...if it isn't autocorrect.",
  "पहला दोस्त- ओये सुन! सेकेंड ईयर का रिजल्ट आ गया क्या? दूसरा दोस्त- हां आ गया और अब तमीज से बात कर। पहला दोस्त- क्यों? दूसरा दोस्त- क्योंकि अब मैं तेरा सीनियर हूं।",
  "पहला दोस्त- ओये सुन! सेकेंड ईयर का रिजल्ट आ गया क्या? दूसरा दोस्त- हां आ गया और अब तमीज से बात कर। पहला दोस्त- क्यों? दूसरा दोस्त- क्योंकि अब मैं तेरा सीनियर हूं।",
];

const jokesImages = [
  "/joke1.png",
  "/joke2.png",
  "/joke3.png",
  "/joke4.png",
  "/joke5.png",
  "/joke6.png",
];

//===================================================================================================================//


export default function Quotes() {

  const [joke, setJokes] = useState(
    "Q. How does a computer get drunk ? Answer. It takes screenshots"
  );

  const [home, setHome] = useState(null);

  // Function to display App.js component

  const displayHome = () => {
    setHome(<App />);
  };
  const randomLikes = Math.floor(Math.random() * 9999);
  const randomDislikes = Math.floor(Math.random() * 999);
  //   const [like, setLike] = useState(0);
  //   const [dislike, setDislike] = useState(0);
  const [randomImage, setRandomImage] = useState(0);

  const displayRandomJokes = () => {
    let randomIndex, randomImageIndex;

    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
        randomImageIndex = Math.floor(Math.random() * jokesImages.length);
    } while (randomImageIndex === randomImage && jokes[randomIndex]===joke);
    setJokes(jokes[randomIndex]);
    setRandomImage(randomImageIndex);
};

  //   const increment = () => {
  //     setLike(like + 1);
  //   };

  //   const dislikeIncrement = () => {
  //     setDislike(dislike + 1);
  //   };

  useEffect(() => {
    setRandomImage(Math.floor(Math.random() * jokesImages.length));
  }, []);

  
//===================================================================================================================//

  return (
    <div>
      {home ? (
        <App />
      ) : (
        <div className="quote-container">
          <img
            src={jokesImages[randomImage]}
            alt="Logo"
            style={{ width: "50%", height: "40%" }}
          />
          <p id="quote">{joke}</p>

          {jokes.includes(joke) && (
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
          )}
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
              style={{ marginRight: "15px" }}
              onClick={() => displayHome()}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => displayRandomJokes(jokes, randomImage)}
            >
              Next
            </Button>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

