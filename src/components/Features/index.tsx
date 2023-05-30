import { useState } from "react";
import { features } from "../../data/data";

interface ITab {
  tab: string;
  source_image: string;
  title: string;
  description: string;
}

const Features = () => {
  const [tabSelected, setTabSelected] = useState(features[0]);
  const { description, source_image, title } = tabSelected;

  return (
    <section
      id="features"
      className="w-10/12 max-w-screen-xl mx-auto mb-24 md:mb-44"
    >
      <h2 className="text-center text-2xl sm:text-3xl font-medium mb-8">
        Features
      </h2>
      <p className="text-center m-auto max-w-[520px] text-grayish-blue">
        Our aim is to make it quick and easy for you to access your favorite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <nav className="mt-8 mb-16 border-t md:border-t-0 md:flex md:justify-center md:mx-auto max-w-[730px]">
        {features.map((tab: ITab) => {
          return (
            <button
              key={tab.title}
              onClick={() => setTabSelected(tab)}
              className={`border-b py-5 text-center min-w-[200px] w-full relative md:after:w-full hover:text-soft-red
             ${
            tab.tab === tabSelected.tab
              ? "after:content after:absolute after:bottom-0 after:left-2/4 after:-translate-x-2/4 after:block after:h-1 after:w-[130px] after:bg-soft-red"
              : ""
            }`}
            >
              {tab.tab}
            </button>
          );
        })}
      </nav>
      <article className="flex flex-col items-center justify-center gap-14 max-w-[1100px] mx-auto lg:flex-row lg:justify-between">
        <div className="relative mb-6 sm:mb-16 lg:mb-0 ">
          <img src={source_image} alt="" className="" />
          {/* <div className="absolute -z-10 -bottom-20 -left-[20%] lg:-left-[40%] bg-soft-blue max-w-[90%] max-h-[70%] w-full h-full rounded-e-full"></div> */}
          <div className="absolute -z-10 -bottom-10 lg:-bottom-16 -left-10 md:-left-24 bg-soft-blue max-h-[180px] sm:max-h-[350px] w-full h-full rounded-e-full"></div>
        </div>
        <div className="max-w-[450px] w-full ">
          <h3 className="text-2xl md:text-3xl text-center font-medium mb-6 lg:text-left">
            {title}
          </h3>
          <p className="text-center text-grayish-blue lg:text-left mb-8">
            {description}
          </p>
          <button className="hidden whitespace-nowrap md:block max-w-xs w-full mx-auto bg-soft-blue text-white py-3 px-6 rounded lg:mx-0 lg:max-w-min">
            More Info
          </button>
        </div>
      </article>
    </section>
  );
};

export default Features;
