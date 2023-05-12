const NavBar = () => {
  return (
    <nav className="flex justify-end gap-6 w-full">
      <ul className="flex justify-between items-center gap-6">
        <li className="transition cursor-pointer hover:text-soft-red">FEATURES</li>
        <li className="transition cursor-pointer hover:text-soft-red">PRICING</li>
        <li className="transition cursor-pointer hover:text-soft-red">CONTACT</li>
      </ul>
      <button
        className="transition duration-200 bg-soft-red border-2 border-soft-red rounded text-white text-sm leading-[13px] tracking-widest py-3 px-7
      hover:bg-transparent hover:text-soft-red"
        type="button"
      >
        LOGIN
      </button>
    </nav>
  );
};

export default NavBar;
