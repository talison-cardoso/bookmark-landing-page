import { LogoBookmark, Hamburger } from "../../icons";

import SideBar from "../SideBar";
import NavBar from "../NavBar";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="w-11/12 m-auto mt-8 ">
      {isOpenMenu ? (
        <>
          <SideBar onClick={() => setIsOpenMenu(!isOpenMenu)} />
          {(document.body.style.overflow = "hidden")}
        </>
      ) : (
        <>
          {(document.body.removeAttribute("style"))}
          <div className="flex justify-between items-center">
            <a href="/">
              <LogoBookmark />
            </a>
            <div className="md:hidden" onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <Hamburger className="" />
            </div>
            <div className="hidden md:block">
              <NavBar />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
