import { Link, useLocation } from "react-router-dom";
import {
  SantriSVG,
  TransactionsSVG,
  SettingsSVG,
  HomeSVG,
} from "../../assets/icons";

const AdminNav = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Link
        to="/"
        className={`flex items-center my-6 ${
          pathname === "/" ? "text-red-500 lg:border-r-2 lg:border-red-500" : ""
        }`}
      >
        <HomeSVG />
        <p className="cursor-pointer flex-grow pt-1 pl-2">Home</p>
      </Link>
      <Link
        to="/transactions"
        className={`flex items-center my-6 ${
          pathname.includes("transactions")
            ? "text-red-500 lg:border-r-2 lg:border-red-500"
            : ""
        }`}
      >
        <TransactionsSVG />
        <p className="cursor-pointer flex-grow pt-1 pl-2">Transactions</p>
      </Link>
      <Link
        to="/santri"
        className={`flex items-center my-6 ${
          pathname.includes("santri")
            ? "text-red-500 lg:border-r-2 lg:border-red-500"
            : ""
        }`}
      >
        <SantriSVG />
        <p className="cursor-pointer flex-grow pt-1 pl-2">Santri</p>
      </Link>
      <Link
        to="/settings"
        className={`flex items center my-6 ${
          pathname.includes("settings")
            ? "text-red-500 lg:border-r-2 lg:border-red-500"
            : ""
        }`}
      >
        <SettingsSVG />
        <p className="cursor-pointer flex-grow pl-2">Settings</p>
      </Link>
    </>
  );
};

export default AdminNav;
