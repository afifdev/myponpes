import { lazy } from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/Navbar";
const AdminHome = lazy(() => import("./admin/Home"));
const Transactions = lazy(() => import("./admin/Transactions"));

const Home = () => {
  return (
    <div className="max-w-screen bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Navbar />
        <div className="flex-grow lg:bg-gray-100 max-w-8xl">
          <div className="bg-white rounded-tl-3xl pt-20 lg:pt-8 px-6 h-full w-full">
            <Switch>
              <Route exact path="/" component={AdminHome} />
              <Route path="/transactions" component={Transactions} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
