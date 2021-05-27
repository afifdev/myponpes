import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../context/UserContext";
import { Header, Profile, AdminNav, SantriNav } from "./moleculs";

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
    <div className="py-9 px-6 lg:py-0 lg:px-0 lg:pt-6 lg:pl-6 mt-2">
      <div className="fixed lg:ring-4 lg:ring-red-500 lg:rounded-lg left-0 right-0 top-0 p-6 lg:p-0 lg:sticky lg:top-8 bg-gray-100">
        <div className="lg:pt-4 lg:pb-12 lg:px-4 lg:overflow-y-auto lg:max-h-screen">
          <Header action={showNav} />
          <div className="w-80"></div>
          <Profile show={show} />
          <div className={`${show ? "block" : "hidden"} lg:block`}>
            {user.level > 1 ? <AdminNav /> : <SantriNav />}
            <a href="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <p
                onClick={handleLogout}
                href="/logout"
                className="cursor-pointer flex-grow border-r-2 pt-1 pl-1"
              >
                Logout
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
