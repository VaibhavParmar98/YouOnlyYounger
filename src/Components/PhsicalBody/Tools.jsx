import React from "react";

const images = [
  {
    src: "./62.png",
    classNames: "h-16 py-1 px-1.5 rounded-full border-4 border-[#9698F8]",
  },
  {
    src: "./63.png",
    classNames: "h-16 py-1 px-1.5 rounded-full border-4 border-[#7779EC]",
  },
  {
    src: "./64.png",
    classNames: "h-16 py-1 px-1.5 rounded-full border-4 border-[#403491]",
  },
  {
    src: "./65.png",
    classNames: "h-16 py-1 px-1.5 rounded-full border-4 border-[#F1BA40]",
  },
  {
    src: "./66.png",
    classNames: "h-16 py-1 px-1.5 rounded-full border-4 border-[#EF8534]",
  },
  {
    src: "./67.png",
    classNames: "h-16 py-1 px-1.5 rounded-full border-4 border-[#EB4026]",
  },
  {
    src: "./68.png",
    classNames: "", // Center image
  },
];

const Tools = () => {
  return (
    <div className="relative font-inter overflow-hidden">
      {/* 🔵 Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="./69.png"
          alt="Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔵 Background Color Layer */}
      <div className="bg-[#400186] relative z-10">
        <div className="max-w-7xl mx-auto flex justify-center items-center min-h-screen relative px-4">
          {/* 🔵 Center Text */}
          <div className="absolute top-20 text-center z-20 max-w-3xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-marcellous text-white">
              Tools & Therapies We Use
            </h1>
            <p className="text-white mt-4 text-sm sm:text-base md:text-lg">
              To restore and rebalance your Physical Body, we use a combination
              of advanced diagnostics and natural therapies. These methods work
              together to support healing, reduce symptoms, and strengthen your
              body’s core systems.
            </p>
          </div>

          {/* 🔵 Left Cards */}
          <div className="hidden md:flex xl:mt-16 lg:mt-24 absolute left-0 top-1/2 transform -translate-y-1/2 w-72 md:w-80 z-20 text-white flex-col gap-6 pl-4">
            <div>
              <h1 className="text-xl md:text-2xl">
                Functional Testing
                <span className="ml-4 bg-[#9698F8] px-3 rounded-full">1</span>
              </h1>
              <p className="text-sm mt-1">
                We use detailed lab panels to uncover hidden imbalances in your
                gut, hormones, nutrients, and overall body systems.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl">
                Movement Rehab
                <span className="ml-4 bg-[#EB4026] px-2 rounded-full">6</span>
              </h1>
              <p className="text-sm mt-1">
                Personalized movement, stretching, and recovery plans that
                restore strength, flexibility, and physical comfort over time.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl">
                Gentle Detox
                <span className="ml-4 bg-[#EF8534] px-2 rounded-full">5</span>
              </h1>
              <p className="text-sm mt-1">
                Safe, non-invasive methods to clear toxins, reduce inflammation,
                and enhance your body’s natural cleansing abilities.
              </p>
            </div>
          </div>

          {/* 🔵 Right Cards */}
          <div className="hidden md:flex xl:mt-16 lg:mt-24  absolute right-0 top-1/2 transform -translate-y-1/2 w-72 md:w-80 z-20 text-white flex-col gap-6 pr-4">
            <div>
              <h1 className="text-xl md:text-2xl">
                <span className="mr-4 bg-[#7779EC] px-3 rounded-full">2</span>
                Functional Testing
              </h1>
              <p className="text-sm mt-1">
                We use detailed lab panels to uncover hidden imbalances in your
                gut, hormones, nutrients, and overall body systems.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl">
                <span className="mr-4 bg-[#403491] px-2 rounded-full">3</span>
                Movement Rehab
              </h1>
              <p className="text-sm mt-1">
                Personalized movement, stretching, and recovery plans that
                restore strength, flexibility, and physical comfort over time.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl">
                <span className="mr-4 bg-[#F1BA40] px-2 rounded-full">4</span>
                Gentle Detox
              </h1>
              <p className="text-sm mt-1">
                Safe, non-invasive methods to clear toxins, reduce inflammation,
                and enhance your body’s natural cleansing abilities.
              </p>
            </div>
          </div>

          {/* 🔵 Rotating Center */}
          <div className="relative w-60 h-60 xl:mt-16 lg:mt-44 mt-72 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full flex justify-center items-center z-20">
            {/* Center Image */}
            <div className="flex justify-center items-center">
              <img
                src={images[6].src}
                alt="center"
                className="absolute w-16 h-16"
              />
            </div>

            {/* Rotating Images */}
            <div className="absolute w-full h-full rounded-full animate-rotate flex justify-center items-center">
              {images.slice(0, 6).map((image, index) => {
                const angle = (360 / 6) * index;
                return (
                  <div
                    key={index}
                    className="absolute w-16 h-16 flex justify-center items-center"
                    style={{
                      transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`img-${index}`}
                      className={`${image.classNames}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
