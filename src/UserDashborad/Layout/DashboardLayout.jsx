import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import SideNav from "../Sidebar";
// import Loader from "../Components/Loader";

const UserDashboardLayout = () => {
  return (
    <div className="flex flex-col mx-auto min-w-screen max-w-[1600px]">
      {/* <Suspense fallback={<Loader />}> */}
        <SideNav />

        {/* MAIN CONTENT */}
        <div className="Gregular p-4 h-fit mt-24 ml-64 tablet:ml-0">
          <div className="px-8 tablet:p-0 rounded-lg">
            <Outlet />
          </div>
        </div>
      {/* </Suspense> */}
    </div>
  );
};

export default UserDashboardLayout;
