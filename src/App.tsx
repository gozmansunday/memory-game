import Header from "./components/Header";
import CardSection from "./components/CardSection";

const App = () => {
  return (
    <div className="relative">
      {/* Wallpaper and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/backgrounds/bg-img.jpeg')` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Page Content */}
      <div className="relative text-neutral-300">
        <Header />
        <p className="mt-3 font-clash text-center text-sm sm:text-base md:text-xl font-semibold text-neutral-400">
          Choose cards to get points, but do not choose the same card twice.
        </p>
        <CardSection />
      </div>
    </div>
  );
};

export default App;