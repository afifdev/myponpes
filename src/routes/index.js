import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
  const [user, setUser] = useState({ token: null, level: -1 });

  const checkUser = () => {
    const token = localStorage.getItem("ponpestoken");
    if (token) {
      const data = jwtDecode(token);
      if (data.username && data.password && data.level > -1) {
        axios
          .post(data.level < 2 ? "user" : "admin", {
            username: data.username,
            password: data.password,
          })
          .then((res) => {
            setUser({
              token: res.data.data.token,
              level: res.data.data.level,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          {user.level > -1 ? (
            <Route exact path="/">
              <Home />
            </Route>
          ) : (
            <Route exact path="/">
              <Login />
            </Route>
          )}
          <Route path="*">
            <div>Not Found</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Routes;
