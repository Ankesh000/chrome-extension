import React, { useState, useEffect } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import Swal from "sweetalert2";
import backgroundImage from "../src/images/game.jpeg";
import App from "./App";

//====================================================================================================================//

let x = Math.floor(Math.random() * 100);
let initialTries = 7;

//====================================================================================================================//

export default function Game() {
  const [home, setHome] = useState(false);
  const [guessNumber, setGuessNumber] = useState("");
  const [tries, setTries] = useState(initialTries);
  const [isGameOver, setIsGameOver] = useState(false);
  const [counter, setCounter] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);

  const displayHome = () => {
    setHome(true);
  };

  const checkGuess = () => {
    if (isGameOver || !gameStarted) {
      return;
    }

    const userGuess = parseInt(guessNumber, 10);
    if (!isNaN(userGuess)) {
      if (userGuess === x) {
        Swal.fire({
          title: "Congratulations!",
          text: "You guessed the correct number.",
          icon: "success",
        });
        setIsGameOver(true);
      } else if (userGuess < x) {
        Swal.fire({
          text: "Try a higher number.",
          imageHeight: "10px",
          icon: "warning",
        });
        setGuessNumber("");
        setTries(tries - 1);

        setCounter(10);
      } else {
        Swal.fire({
          text: "Try a lower number.",
          imageHeight: "10px",
          icon: "warning",
        });
        setGuessNumber("");
        setTries(tries - 1);
        setCounter(10);
      }

      if (tries === 0) {
        Swal.fire({
          title: "Out of attempts",
          text: `The correct number was ${x}.`,
          icon: "error",
        });
        setIsGameOver(true);
      }

      setCounter(10);
    } else {
      Swal.fire({
        title: "No number received",
        text: "Please guess a number between 1 to 100",
        icon: "error",
      });
    }
  };

  //================================================================================================================//

  const playAgain = () => {
    x = Math.floor(Math.random() * 100);
    setTries(initialTries);
    setIsGameOver(false);
  };

  //=================================================================================================================//

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((time) => (time > 0 ? time - 1 : time));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [counter]);

  useEffect(() => {
    if (counter === 0 && !isGameOver) {
      setTries(tries - 1);
      setCounter(10);
    }
  }, [counter, tries, isGameOver]);

  //===================================================================================================================//

  return (
    <div>
      {home ? (
        <App />
      ) : (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${backgroundImage})`,
            minHeight: "50vh",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Welcome To The Guess Game
          </Typography>
          <Typography variant="h6" gutterBottom>
            Guess the number between 0 to 100
          </Typography>

          {!gameStarted ? (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "70px", borderRadius: "20px" }}
              onClick={() => setGameStarted(true)}
            >
              Start Game
            </Button>
          ) : (
            // Game interface
            <div>
              {isGameOver ? (
                <div>
                  <Typography variant="h6" color="error" gutterBottom>
                    Game Over - Play Again
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={playAgain}
                    style={{ margin: "30px", borderRadius: "20px" }}
                  >
                    Play Again
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    style={{ borderRadius: "20px" }}
                    onClick={() => displayHome()}
                  >
                    Home
                  </Button>
                </div>
              ) : (
                <div>
                  <Box display="flex" flexDirection="row">
                    <Typography margin="5px" color="red">
                      Attempts Left: {tries}
                    </Typography>
                    <Typography margin="5px" color="red">
                      Time Left: seconds <span>{counter}</span>
                    </Typography>
                    <TextField
                      style={{ marginTop: "7px" }}
                      variant="standard"
                      label="Enter your number"
                      value={guessNumber}
                      onChange={(e) => setGuessNumber(e.target.value)}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    color="success"
                    onClick={checkGuess}
                    style={{
                      margin: "30px",
                      marginLeft: "130px",
                      borderRadius: "20px",
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ borderRadius: "20px" }}
                    onClick={() => displayHome()}
                  >
                    Home
                  </Button>
                </div>
              )}
            </div>
          )}
        </Box>
      )}
    </div>
  );
}
