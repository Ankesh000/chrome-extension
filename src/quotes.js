import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import App from "./App";
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words, I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
];

const quotesImages = [
  "/right.png",
  "/creativity.png",
  "/download.jpeg",
  "/download1.jpeg",
  "/download2.jpeg",
  "/download3.jpeg",
  "/download4.jpeg",
  "/victory.png",
  "raise-hand.png",
  "leadership.png",
  "award.png",
  "motivation.png",
];

function Quotes() {
  const [quote, setQuote] = useState(
    "The only way to do great work is to love what you do. - Steve Jobs"
  );
  const [home, setHome] = useState(null);

  // Function to display Quotes component
  const displayHome = () => {
    setHome(<App />);
  };    
  const randomLikes = Math.floor(Math.random() * 9999);
  const randomDislikes = Math.floor(Math.random() * 999);
//   const [like, setLike] = useState(randomLikes);
//   const [dislike, setDislike] = useState(randomDislikes);
  const [randomImage, setRandomImage] = useState(
    Math.floor(Math.random() * quotesImages.length)
  );

  const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setRandomImage(Math.floor(Math.random() * quotesImages.length)); // Change the image when the quote changes
  };
//   const increment = () => {
//     setLike(like + 1);
//   };

//   const dislikeIncrement = () => {
//     setDislike(dislike + 1);
//   };

  useEffect(() => {
    setRandomImage(Math.floor(Math.random() * quotesImages.length));
  }, []);

  return (
    <div>
      {home ? (
        <App />
      ) : (
        <div className="quote-container">
          <img
            src={quotesImages[randomImage]}
            alt="Logo"
            style={{ width: "50%", height: "40%" }}
          />
          <p id="quote">{quote}</p>
          {quotes.includes(quote) && (
            <div
              style={{
                display: "flex",
                direction: "column",
                padding: "5px",
                justifyContent: "space-evenly",
              }}
            >
              <ThumbUpAltIcon  />{" "}
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
              onClick={() => displayRandomQuote(quotes)}
            >
              Next
            </Button>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default Quotes;
