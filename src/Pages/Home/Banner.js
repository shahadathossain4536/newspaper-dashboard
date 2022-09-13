import React from "react";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello World!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
