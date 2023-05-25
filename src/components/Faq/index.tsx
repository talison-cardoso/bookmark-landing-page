import { useState } from "react";
import iconArrow from "../../assets/images/icon-arrow.svg";
import { faq } from "../../data/data";

interface IFaq {
  title: string;
  desc: string;
}

const Faq = () => {
  return (
    <section className="w-10/12 mx-auto mb-40">
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-8">
        Frequently Asked Questions
      </h2>
      <p className="text-base text-center m-auto max-w-[540px] text-grayish-blue ">
        Here are some of our FAQs. If you have any other questions you&#8217;d
        like answered please feel free to email us.
      </p>
      <div className="mt-8 md:border-t border-gray-300 max-w-[545px] mx-auto">
        {faq.map((f: IFaq) => (
          <Dropdown title={f.title} desc={f.desc} />
        ))}
      </div>
      <button className="mt-12 block mx-auto bg-soft-blue text-white py-3 px-6 rounded ">
        More Info
      </button>
    </section>
  );
};

const Dropdown = ({ title, desc }: IFaq) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:pr-5 py-5 flex items-center justify-between gap-3 hover:text-soft-red"
      >
        <p className="text-lg text-left">{title}</p>
        <img
          src={iconArrow}
          alt="Icon ArrowDown"
          className={`duration-300 transition-all ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <p className={`text-gray-500 pb-5 ${isOpen ? "block" : "hidden"}`}>
        {desc}
      </p>
    </div>
  );
};

export default Faq;
