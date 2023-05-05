import { useState, useEffect } from "react";

import Header from "./components/Header";
import CardSection from "./components/CardSection";
import PlayAgainSection from "./components/PlayAgainSection";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [clickedCardArray, setclickedCardArray] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [gameOn, setGameOn] = useState(true);

  const clickedCardArrayState = { clickedCardArray, setclickedCardArray };
  const scoreState = { score, setScore };
  const highscoreState = { highscore, setHighscore };
  const gameOnState = { gameOn, setGameOn };

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      const handler = () => setLoaded(true);
      window.addEventListener("load", handler);
      return () => window.removeEventListener("load", handler);
    }
  }, [loaded]);

  return (
    <div>
      {loaded ? (

        <div className="relative">
          {/* Wallpaper and Overlay */}
          <div className={`background-image absolute inset-0 bg-fixed bg-center ${!gameOn && "h-screen"}`}></div>

          {/* Page Content */}
          <div className="relative text-neutral-300">
            <Header
              score={score}
              highscore={highscore}
            />

            {gameOn && <p className="mt-6 px-2 font-clash text-center text-sm font-semibold text-neutral-800 sm:text-base md:text-xl">
              Choose cards to get points, but do not choose the same card twice.
            </p>}

            {gameOn && <CardSection
              clickedCardArrayState={clickedCardArrayState}
              scoreState={scoreState}
              highscoreState={highscoreState}
              gameOnState={gameOnState}
            />}

            {!gameOn && <PlayAgainSection
              setGameOn={setGameOn}
              setScore={setScore}
            />}
          </div>
        </div>

      ) : (
          
          <div className="bg-neutral-800 text-neutral-300 h-screen flex items-center font-bebas">
            <div className="mx-auto max-w-6xl text-6xl flex flex-col gap-8 items-center">
              <p className="animate-pulse">Memory Game</p>
              <div className="border-[12px] border-neutral-500 border-t-neutral-300 rounded-full animate-spin border-600 w-20 h-20"></div>
            </div>
          </div>
          
      )}
    </div>
  );
};

export default App;