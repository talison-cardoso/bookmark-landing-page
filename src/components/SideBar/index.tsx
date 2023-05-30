import { LogoBookmark, Close, Twitter, Facebook } from "../../icons";
import { Props } from "../../types";

const SideBar = ({ onCloseMenu }: Props) => {
  return (
    <section className="absolute inset-0 z-10 min-h-screen bg-very-dark-blue bg-opacity-90 select-none">
      <div className="w-10/12 m-auto">
        <div className="flex justify-between items-center py-10">
          <LogoBookmark color="#fff" bg="#000" icon="#fff" />
          <button onClick={onCloseMenu}>
            <Close />
          </button>
        </div>
        <nav onClick={onCloseMenu}>
          <ul className="flex flex-col items-center w-full text-white text-base">
            <li
              className="border-y border-gray-500 w-full py-5 text-center"

            >
              <a href="#features" className="tracking-[0.25rem]">
                FEATURES
              </a>
            </li>
            <li className="w-full text-center py-5">
              <a href="#" className="tracking-[0.25rem]">
                PRICING
              </a>
            </li>
            <li className="border-y border-gray-500 w-full text-center py-5">
              <a href="#" className="tracking-[0.25rem]">
                CONTACT
              </a>
            </li>
          </ul>
          <button
            className="border-2 w-full py-4 text-white text-base font-semibold tracking-[.2rem] rounded-md mt-6"
            type="button"
          >
            LOGIN
          </button>
        </nav>
      </div>
      <div className="flex justify-between items-center gap-10 m-auto absolute bottom-10 left-1/2 -translate-x-1/2 ">
        <a href="#">
          <Facebook className="fill-white" />
        </a>
        <a href="#">
          <Twitter className="fill-white" />
        </a>
      </div>
    </section>
  );
};

export default SideBar;
