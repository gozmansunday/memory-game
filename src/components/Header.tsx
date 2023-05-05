interface Props {
  score: number;
  highscore: number;
}

const Header = ({score, highscore}: Props) => {
  return (
    <header className="header-background-image bg-cover font-bebas sticky top-0 z-50 py-1 px-3 border-b border-neutral-900 shadow-xl md:px-1 lg:px-0">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl text-center sm:text-4xl md:text-5xl">
            Memory Game
        </h1>

        <div className="flex flex-col items-center justify-center gap-1 font-clash font-semibold text-xs sm:text-sm md:flex-row md:gap-6 md:text-base md:justify-normal">
          <section className="border-b-[3px] border-neutral-300">
            Score: {score}
          </section>

          <section className="border-b-[3px] border-neutral-300">
            Highscore: {highscore}
          </section>
        </div>
      </div>
    </header>
  )
};

export default Header;