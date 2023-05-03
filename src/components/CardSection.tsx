import { useState, Dispatch, SetStateAction } from "react";

import Card from "./Card";
import imageUrls from "./images";

interface Props {
  clickedCardArrayState: {
    clickedCardArray: string[];
    setclickedCardArray: Dispatch<SetStateAction<string[]>>;
  };
  scoreState: {
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
  };
  highscoreState: {
    highscore: number;
    setHighscore: Dispatch<SetStateAction<number>>;
  };
  gameOnState: {
    gameOn: boolean;
    setGameOn: Dispatch<SetStateAction<boolean>>;
  };
}

const CardSection = ({ clickedCardArrayState, scoreState, highscoreState, gameOnState }: Props) => {
  const shuffleArray = (array: string[]) => {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const [imageUrlArray, setImageUrlArray] = useState<string[]>(shuffleArray(imageUrls));

  const [clickedCardArray, setclickedCardArray] = [clickedCardArrayState.clickedCardArray, clickedCardArrayState.setclickedCardArray];
  const [score, setScore] = [scoreState.score, scoreState.setScore];
  const [highscore, setHighscore] = [highscoreState.highscore, highscoreState.setHighscore];
  const [gameOn, setGameOn] = [gameOnState.gameOn, gameOnState.setGameOn];

  const handleShuffleArray = () => {
    const array = [...imageUrlArray]
    
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    setImageUrlArray(array);
  };

  const handleSaveclickedCardArray = (imageUrl: string) => {
    setclickedCardArray([...clickedCardArray, imageUrl]);
  };

  const handleCountScore = () => {
    setScore(prevScore => prevScore + 1);

    if (score >= highscore) {
      setHighscore(prevScore => prevScore + 1);
    }
  };

  return (
    <section className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-[90rem] py-8 px-4 mx-auto sm:py-10 md:py-12">
      {imageUrlArray.map((imageUrl) => (
        <div
          key={imageUrl}
          onClick={() => {
            if (!clickedCardArray.includes(imageUrl) && gameOn) {
              handleSaveclickedCardArray(imageUrl);
              handleCountScore();
              handleShuffleArray();
            } else {
              setGameOn(false);
              setclickedCardArray([]);
            }
          }}
        >
          <Card url={imageUrl} /> 
        </div>
      ))}
    </section>
  );
};

export default CardSection;