import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { BgLogin } from "../assets/images";
import { UserContext } from "../context/UserContext";
const Login = () => {
  const [roleAdmin, setRoleAdmin] = useState(0);
  const [showRole, setShowRole] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleRoleChange = (e) => {
    setRoleAdmin(e ? e : 0);
    setShowRole(!showRole);
  };

  const handleShowRole = (e) => {
    setShowRole(!showRole);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    setError(0);
    const data = await axios.post(roleAdmin ? "admin" : "user", {
      username,
      password,
    });
    if (data.data.message === "Error") {
      setError(1);
    } else {
      const { token } = data.data.data;
      setUser({
        token,
        level: data.data.data.level,
      });
      localStorage.setItem("ponpestoken", token);
      history.push("/");
    }
  };

  return (
    <div className="flex">
      <div className="px-16 pt-16 w-100">
        <p className="text-4xl font-medium">Login to your account</p>
        <p className="whitespace-nowrap text-lg pt-2">
          Please enter your username and password to proceed
        </p>
        <div className="py-8 space-y-4">
          {error ? (
            <div className="py-1 px-4 rounded-md bg-red-500 text-white">
              Error
            </div>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              value={username}
              onChange={handleUsername}
              name="username"
              className="py-1 px-4 rounded-md border-2 bg-gray-50 focus:border-red-500 outline-none"
              placeholder="Your Username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              name="password"
              className="py-1 px-4 rounded-md border-2 bg-gray-50 focus:border-red-500 outline-none"
              placeholder="Your Password"
            />
          </div>
          <button
            onClick={handleShowRole}
            className="py-1 px-4 rounded-md border-2 focus:border-red-500 outline-none focus:outline-none inline-flex items-center"
          >
            {roleAdmin ? "Admin" : "Santri"}
            <span className="pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            className={`${
              showRole ? "visible" : "invisible"
            } flex flex-col rounded-md border-2 w-min px-1`}
          >
            <button
              onClick={() => handleRoleChange(0)}
              className="py-1 px-4 rounded-md my-1 hover:text-white bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 focus:outline-none"
            >
              Santri
            </button>
            <button
              onClick={() => handleRoleChange(1)}
              className="py-1 px-4 rounded-md my-1 hover:text-white bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 focus:outline-none"
            >
              Admin
            </button>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="py-1 px-6 rounded-md bg-gradient-to-r from-red-500 to-yellow-500 outline-none focus:outline-none text-white"
        >
          Login
        </button>
      </div>
      <div
        className="w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${BgLogin})` }}
      ></div>
    </div>
  );
};

export default Login;
