import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/moleculs/Navbar";
const AdminHome = lazy(() => import("./admin/AdminHome"));
const Transactions = lazy(() => import("./admin/Transactions"));

const Home = () => {
  return (
    <div className="max-w-screen bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Navbar />
        <div className="flex-grow lg:bg-gray-100 max-w-8xl">
          <div className="bg-white lg:rounded-tl-3xl pt-20 lg:pt-8 px-6 h-full w-full">
            <Switch>
              <Suspense fallback={<div>Loading... </div>}>
                <Route exact path="/" component={AdminHome} />
              </Suspense>
              <Suspense fallback={<div>Loading... </div>}>
                <Route path="/transactions" component={Transactions} />
              </Suspense>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
