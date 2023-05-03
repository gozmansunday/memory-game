import { Dispatch, SetStateAction } from "react";

interface Props {
  setGameOn: Dispatch<SetStateAction<boolean>>;
  setScore: Dispatch<SetStateAction<number>>;
}

const PlayAgainSection = ({setGameOn, setScore}: Props) => {
  return (
    <section className="font-clash text-center font-semibold mt-24 xs:mt-40 sm:mt-48 md:mt-64 lg:mt-48">
      <p className="text-4xl mb-4 sm:mb-6 sm:text-5xl md:mb-10 md:text-7xl lg:text-8xl">
        Game Over!
      </p>

      <button
        onClick={() => {
          setGameOn(true);
          setScore(0);
        }}
        className="border-2 border-neutral-300 py-2 px-8 hover:bg-neutral-300 hover:text-neutral-900 transition duration-300 xs:border-[3px] sm:text-xl md:text-3xl md:border-4 md:py-3 md:px-12"
      >
        Play Again
      </button>
    </section>
  );
};

export default PlayAgainSection;