import { lazy, useContext, useState } from "react";
import { useHistory } from "react-router";
import { LogoutSVG } from "../../../assets/icons";
import { UserContext } from "../../../context/UserContext";
const Header = lazy(() => import("./Header"));
const Profile = lazy(() => import("./Profile"));
const AdminNav = lazy(() => import("./AdminNav"));
const SantriNav = lazy(() => import("./SantriNav"));

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const history = useHistory();
  const showNav = () => {
    setShow(!show);
  };
  const handleLogout = () => {
    localStorage.removeItem("ponpestoken");
    return history.push("/");
  };
  return (
    <div className="bg-gray-100">
      <div className="fixed bg-gray-100 left-0 right-0 top-0 px-6 py-3 lg:p-0 lg:sticky">
        <div className="lg:pt-8 lg:pl-6 lg:overflow-y-auto lg:max-h-screen">
          <Header action={showNav} />
          <div className="w-64"></div>
          <Profile show={show} />
          <div className={`${show ? "block" : "hidden"} lg:block`}>
            {user.level > 1 ? <AdminNav /> : <SantriNav />}
            <a href="/" className="flex items-center" onClick={handleLogout}>
              <LogoutSVG />
              <p className="cursor-pointer flex-grow pt-1 pl-1">Logout</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
