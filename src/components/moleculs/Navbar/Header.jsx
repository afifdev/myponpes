import { BrandSVG, HamburgerSVG } from "../../../assets/icons";
const Header = ({ action }) => {
  return (
    <div className="flex items-center">
      <BrandSVG />
      <p className="pl-4 text-xl font-medium flex-grow">My Ponpes</p>
      <button
        onClick={action}
        className="lg:hidden py-1 px-2 rounded-md bg-gradient-to-r from-red-500 to-yellow-500 text-white"
      >
        <HamburgerSVG />
      </button>
    </div>
  );
};

export default Header;
