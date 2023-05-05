import { useState } from "react";

import Header from "./components/Header";
import CardSection from "./components/CardSection";
import PlayAgainSection from "./components/PlayAgainSection";

const App = () => {
  const [clickedCardArray, setclickedCardArray] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [gameOn, setGameOn] = useState(true);

  const clickedCardArrayState = { clickedCardArray, setclickedCardArray };
  const scoreState = { score, setScore };
  const highscoreState = { highscore, setHighscore };
  const gameOnState = { gameOn, setGameOn };

  return (
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
  );
};

export default App;