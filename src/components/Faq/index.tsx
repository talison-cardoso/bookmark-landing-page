import { useState } from "react";
import { faq } from "../../data/data";
import { ArrowDown } from "../../icons";

interface IFaq {
  title: string;
  content: string;
}

const Faq = () => {
  return (
    <section className="w-10/12 mx-auto mb-40">
      <h2 className="text-center text-3xl font-medium mb-8">
        Frequently Asked Questions
      </h2>
      <p className="text-base text-center m-auto max-w-[540px] text-grayish-blue ">
        Here are some of our FAQs. If you have any other questions you&#8217;d
        like answered please feel free to email us.
      </p>
      <div className="mt-8 md:border-t border-gray-300 max-w-[545px] mx-auto">
        {faq.map((f: IFaq) => (
          <Accordion key={f.title} title={f.title} content={f.content} />
        ))}
      </div>
      <button className="mt-12 block mx-auto bg-soft-blue text-white py-3 px-6 rounded ">
        More Info
      </button>
    </section>
  );
};

const Accordion = ({ title, content }: IFaq) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full lg:pr-5 py-5 flex items-center justify-between gap-3 hover:text-soft-red"
      >
        <p className="text-lg text-left">{title}</p>
        <ArrowDown
          className={`duration-300 transition-all ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`text-gray-500 leading-8 grid ${
          open ? "openAccordion pb-5" : "closeAccordion"
        }`}
      >
        <p className="overflow-hidden">{content}</p>
      </div>
    </div>
  );
};

export default Faq;
