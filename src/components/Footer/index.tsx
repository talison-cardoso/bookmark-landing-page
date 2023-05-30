import { FormEvent, useState } from "react";
import { Alert, LogoBookmark, Facebook, Twitter } from "../../icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: FormEvent<HTMLInputElement>): void => {
    const email = event.currentTarget.value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(email);
  };

  return (
    <footer className="">
      <section className="bg-soft-blue py-20">
        <div className="w-10/12 mx-auto">
          <p className="text-white text-center tracking-[.3rem] uppercase text-sm mb-4 lg:mb-6">
            35,000+ already joined
          </p>
          <h2 className="text-2xl text-center text-white font-medium max-w-[420px] mx-auto md:text-3xl">
            Stay up-to-date with what we&#8217;re doing
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-11 flex flex-col items-center justify-center gap-4 md:flex-row"
          >
            <div
              className={`w-full md:mb-0 md:max-w-[400px] relative ${
                error ? "rounded bg-soft-red p-[3px]" : ""
              }`}
            >
              <input
                type="text"
                value={email}
                spellCheck="false"
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full h-12 rounded pl-3"
              />

              {error && (
                <>
                  <Alert className="absolute right-4 top-4" />
                  <p className="italic text-white bg-soft-red rounded-b text-xs font-medium pl-2 py-1">
                    {error}
                  </p>
                </>
              )}
            </div>
            <button className="self-start transition bg-soft-red  w-full text-white h-12 rounded border-soft-red border-2 md:max-w-[125px] hover:bg-white hover:text-soft-red">
              Contact Us
            </button>
          </form>
        </div>
      </section>

      <section className="bg-very-dark-blue py-8 md:py-9">
        <div className="max-w-screen-xl w-10/12 mx-auto grid items-center justify-center md:grid-cols-[200px_1fr_100px]">
          <LogoBookmark className="mx-auto md:mx-0 " color="#FFF" />
          <ul className="flex flex-col items-center justify-center gap-4 md:gap-12 my-10 md:my-0 md:flex-row md:justify-start">
            <li>
              <a
                href="#features"
                className="uppercase text-white tracking-wider block text-center hover:text-soft-red"
              >
                features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase text-white tracking-wider block text-center hover:text-soft-red"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase text-white tracking-wider block text-center hover:text-soft-red"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-10 mx-auto md:mr-0 md:ml-auto">
            <Facebook className="hover:fill-soft-red fill-white cursor-pointer" />
            <Twitter className="hover:fill-soft-red fill-white cursor-pointer" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
