import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <>
            <div>Home</div>
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
