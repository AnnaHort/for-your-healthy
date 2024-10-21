import { NavLink } from "react-router-dom";
import UserIcon from "../assets/svg/UserIcon";
import BodyParametersPage from "../Pages/BodyParametersPage";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-black2 py-4 px-2 md:py-9 md:px-4 lg:px-8">
        <NavLink
          to="/"
          className="font-bold text-grey aria-[current=page]:text-liteGreen md:text-[22px]"
        >
          HealthyHub
        </NavLink>
        <div className="flex gap-1.5 items-center">
          <ul className="flex gap-1 items-center">
            <li className="">
              <NavLink
                to="/signin"
                className="text-white font-normal text-xs aria-[current=page]:text-liteGreen md:text-sm"
              >
                Sign in
              </NavLink>
            </li>
            <li className="text-white text-xs md:text-sm">
              <span className="text-white">/</span>
            </li>

            <li className="">
              <NavLink
                to="/signup"
                className="text-white font-normal text-xs	aria-[current=page]:text-liteGreen md:text-sm"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
          <UserIcon />
        </div>
      </div>
      <div className="py-6 px-2.5 md:py-10 md:px-0">
        <BodyParametersPage />
        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default Header;
