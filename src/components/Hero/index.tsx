import illustrationHero from "../../assets/images/illustration-hero.svg";

const Hero = () => {
  return (
    <main className="w-10/12 mx-auto min-h-[800px] flex flex-col justify-center lg:max-w-screen-xl lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
      <div className="mb-8 md:mb-0 relative">
        <img src={illustrationHero} alt="" className="m-auto" />
        {/* FIXME */}
        {/* <div className="absolute -z-10 bottom-10 -right-20 bg-blue-700 h-60 max-w-[300px] w-full rounded-s-full"></div> */}
      </div>

      <div className="lg:max-w-[450px]">
        <h1 className="text-3xl font-medium text-center mb-8 lg:text-left lg:text-[2.625rem]">
          A Simple Bookmark Manager
        </h1>
        <p className="text-base text-grayish-blue text-center mb-8 lg:text-left">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex items-center justify-between flex-wrap gap-3 m-auto max-w-[380px] lg:m-0">
          <button
            className="transition duration-300 p-3 bg-soft-blue flex-1 min-w-max text-white rounded-md border-2 border-soft-blue
          hover:text-soft-blue hover:bg-transparent"
          >
            Get it on Chrome
          </button>
          <button className=" transition duration-300 p-3 rounded-md shadow flex-1 min-w-max border-transparent border-2 hover:border-very-dark-blue ">
            Get it on Firefox
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
