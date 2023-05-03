interface Props {
  score: number;
  highscore: number;
}

const Header = ({score, highscore}: Props) => {
  return (
    <header className="header-background-image bg-cover font-bebas sticky top-0 z-50 py-3 border-b border-neutral-300 md:px-1 lg:px-0">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <h1 className="text-3xl text-center sm:text-4xl md:text-5xl">
            Memory Game
        </h1>

        <div className="flex items-center justify-center gap-10 font-clash font-semibold sm:text-lg md:text-xl md:justify-normal">
          <section className="md:pb-0.5 border-b-[3px] border-neutral-300">
            Score: {score}
          </section>

          <section className="md:pb-0.5 border-b-[3px] border-neutral-300">
            Highscore: {highscore}
          </section>
        </div>
      </div>
    </header>
  )
};

export default Header;