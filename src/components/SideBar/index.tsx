import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconLogoNegative from "../../assets/images/logo-bookmark-negative.svg";
import iconClose from "../../assets/images/icon-close.svg";

const SideBar = () => {
  return (
    <section className="min-h-screen bg-very-dark-blue font-sans">
      <nav className="w-10/12 m-auto">
        <div className="flex justify-between items-center py-10">
          <img src={iconLogoNegative} alt="" className="" />
          <img src={iconClose} alt="" />
        </div>
        <ul className="flex flex-col items-center w-full text-white text-base">
          <li className="border-y border-gray-500 w-full text-center py-5">
            FEATURES
          </li>
          <li className="w-full text-center py-5">PRICING</li>
          <li className="border-y border-gray-500 w-full text-center py-5">
            CONTACT
          </li>
        </ul>
        <button
          className="border-2 w-full py-4 text-white text-base font-semibold tracking-[.2rem] rounded-md mt-6"
          type="button"
        >
          LOGIN
        </button>
      </nav>
      <div className="flex justify-between items-center m-auto absolute bottom-10 left-1/2 -translate-x-1/2 w-28">
        <a href="#">
          <img src={iconFacebook} alt="" className="w-8 h-full" />
        </a>
        <a href="#">
          <img src={iconTwitter} alt="" className="w-8 h-full" />
        </a>
      </div>
    </section>
  );
};

export default SideBar;
