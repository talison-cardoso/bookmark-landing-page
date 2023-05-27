import { DotsHorizontal, Chrome, Firefox, Opera } from "../../icons";
import { FC } from "react";

interface ICard {
  Logo: FC;
  browser: string;
  version: string;
}

const Downloads = () => {
  return (
    <section className="w-10/12 max-w-screen-xl mx-auto mb-40 ">
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-8">
        Download the extension
      </h2>
      <p className="text-center m-auto max-w-[525px] text-grayish-blue ">
        We&#8217;ve got more browsers in the pipeline. Please do let us know if
        you&#8217;ve got a favorite you&#8217;d like us to prioritize.
      </p>
      <div className="flex gap-9 flex-wrap items-start justify-center mt-14 min-h-[450px]">
        <Card
          Logo={() => <Chrome className="mx-auto mb-8" />}
          browser="Chrome"
          version="62"
        />
        <Card
          Logo={() => <Firefox className="mx-auto mb-8" />}
          browser="Firefox"
          version="55"
        />
        <Card
          Logo={() => <Opera className="mx-auto mb-8" />}
          browser="Opera"
          version="46"
        />
      </div>
    </section>
  );
};

const Card = ({ Logo, browser, version }: ICard) => {
  return (
    <div
      className={`shadow-md rounded-2xl w-72 p-8 text-center relative ${
        browser === "Firefox"
          ? "self-center"
          : browser === "Opera"
            ? "self-end"
            : ""
      }`}
    >
      <Logo />
      <p>
        <strong className="font-medium text-xl">Add to {browser}</strong>
      </p>
      <p className="mt-2 text-grayish-blue">Minimum version {version}</p>
      <DotsHorizontal className="absolute left-0 bottom-28" />
      <button
        className="transition w-full mx-auto bg-soft-blue text-white border-soft-blue border-2 p-3 rounded mt-14
        hover:bg-transparent hover:text-soft-blue"
      >
        Add & Install Extension
      </button>
    </div>
  );
};

export default Downloads;
