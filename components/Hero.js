import Typed from "react-typed";
function Hero() {
  return (
    <div className="container text-center text-white  -mt-24 w-full h-screen mx-auto flex flex-col justify-center px-4">
      <p className="text-lightBluishGreen font-bold p-2">
        GROWING WITH DATA ANALYTICS
      </p>
      <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6">
        Grow with data.
      </h1>
      <div className="font-bold text-xl sm:text-4xl  md:p-2 flex items-center justify-center flex-nowrap">
        <p className="pr-2">Fast, flexible financing for </p>
        <Typed
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={200}
          backSpeed={90}
          loop
        />
      </div>
      <p className="font-bold text-xl  text-gray-500 py-4 md:text-2xl ">
        Monitor your data analytics to inscrease revenue for BTB, BTC & SASS
        platforms.
      </p>
      <button className="bg-lightBluishGreen w-52 rounded-md font-medium my-6 mx-auto py-3 text-black">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
