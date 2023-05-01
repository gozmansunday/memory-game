const Header = () => {
  return (
    <header className="container mx-auto font-bebas md:px-1 lg:px-0 md:flex md:items-center md:justify-between">
      <h1 className="pt-1 text-3xl text-center sm:text-4xl sm:pt-2 md:text-5xl md:py-2">
          Memory Game
      </h1>

      <div className="flex items-center justify-center gap-10 font-clash font-semibold sm:text-lg md:text-xl md:justify-normal">
        <section className="md:pb-0.5 border-b-[3px] border-neutral-300">
          Score: 0
        </section>

        <section className="md:pb-0.5 border-b-[3px] border-neutral-300">
          Highscore: 20
        </section>
      </div>
    </header>
  )
};

export default Header;