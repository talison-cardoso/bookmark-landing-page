import iconLogo from "../../assets/images/logo-bookmark.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";

// import SideBar from "../SideBar";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className="w-11/12 m-auto mt-8 ">
      <div className="flex justify-between items-center">
        <a href="/">
          <img className="" src={iconLogo} alt="" />
        </a>
        <img src={iconHamburger} alt="" className="md:hidden" />
        <div className="hidden md:block">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
