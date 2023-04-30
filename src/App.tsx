const App = () => {
  return (  
    <div className="relative">
      {/* Wallpaper and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url('/images/backgrounds/bg-img.jpeg')` }}
      ></div>
      <div className="absolute inset-0 bg-black/25 h-screen"></div>

      {/* Page Content */}
      <div className="relative font-bebas text-center">
        <h1 className="py-3 text-neutral-200 text-5xl">
          Memory Game
        </h1>
      </div>
    </div>
  )
}

export default App;