"use client";
import { FC, useContext } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import AuthContext from "../../../context/authContext";
import { Link } from "react-router-dom";

const MobileNavbar = (allMenus) => {
  const authContext = useContext(AuthContext);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full h-20 bg-white border-t border-gray-200  z-50 ">
      <div className="grid h-full sm:max-w-lg grid-cols-4 mx-auto ">
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className={`w-full h-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group `}
          >
            <FaHome
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
              خانه
            </span>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link
            to={`/site-categories`}
            className="w-full h-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <RxHamburgerMenu
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-center text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
              دسته بندی ها
            </span>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link
            to={`#`}
            className="w-full h-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <FaShoppingCart
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow "
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-center text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
              سبد خرید
            </span>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {authContext.isLoggedIn ? (
            <Link
              to={`/my-account`}
              className="w-full h-full inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <CgProfile
                className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow "
                fill="currentColor"
                aria-hidden="true"
              />

              <span className="text-base text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
                {authContext.userInfos.name}
              </span>
            </Link>
          ) : (
            <Link
              to={`/login`}
              className="w-full h-full inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <CgProfile
                className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow "
                fill="currentColor"
                aria-hidden="true"
              />

              <span className="text-base text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
                پروفایل
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
