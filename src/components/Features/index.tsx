import { useState } from "react";

interface ITab {
  tab: string;
  source_image: string;
  title: string;
  description: string;
}

const itens: Array<ITab> = [
  {
    tab: "Simple Bookmarking",
    source_image: "src/assets/images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage you favorite sites.",
  },
  {
    tab: "Speedy Searching",
    source_image: "src/assets/images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no times at all. No need to trawl through all of your bookmarks.",
  },
  {
    tab: "Easy Sharing",
    source_image: "src/assets/images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const Features = () => {
  const [tabSelected, setTabSelected] = useState(itens[0]);
  const { description, source_image, title } = tabSelected;

  return (
    <section className="w-10/12 max-w-screen-xl mx-auto mb-32">
      <h1 className="text-center text-3xl font-medium mb-8">Features</h1>
      <p className="text-center m-auto max-w-[500px] text-grayish-blue ">
        Our aim is to make it quick and easy for you to access your favorite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <nav className="mt-8 mb-16 border-t md:border-t-0 md:flex md:justify-center md:mx-auto max-w-[730px]">
        {itens.map((tab: ITab) => {
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
      <article className="flex flex-col items-center justify-center gap-12 max-w-[1100px] mx-auto lg:flex-row lg:justify-between">
        <div className="mb-8 lg:mb-0 ">
          <img src={source_image} alt="" />
        </div>
        <div className="max-w-[430px] w-full flex-1">
          <h3 className="text-2xl text-center font-medium mb-6 lg:text-left">
            {title}
          </h3>
          <p className="text-center lg:text-left mb-8">{description}</p>
          <button className="hidden whitespace-nowrap md:block max-w-xs w-full mx-auto bg-soft-blue text-white py-3 px-6 rounded lg:mx-0 lg:max-w-min">
            More Info
          </button>
        </div>
      </article>
    </section>
  );
};

export default Features;
