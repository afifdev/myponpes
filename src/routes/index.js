import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

const Routes = () => {
  const [user, setUser] = useState({ token: null, level: -1 });

  const checkUser = () => {
    const token = localStorage.getItem("ponpestoken");
    if (token) {
      const data = jwtDecode(token);
      if (data.username && data.password && data.level) {
        axios
          .post(data.level > 1 ? "admin" : "user", {
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
              {user.level > 1 ? <Admin /> : <div>Homepage user</div>}
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
