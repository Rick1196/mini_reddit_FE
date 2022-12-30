import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Logo from "../../icons/logo";
import HamburguerOpenIcon from "../../icons/HamburguerOpenIcon";
import HamburguerClosedIcon from "../../icons/HamburguerCloseIcon";

import LogoutButton from "../authentication/LogoutButton";

const Navbar = ({ props }) => {
  const authUser = useAuthUser();
  return (
    <Disclosure
      as="nav"
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      {({ open }) => (
        <>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/login" className="flex items-center gap-2">
              <Logo />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Mini-reddit
              </span>
            </Link>
            <Disclosure.Button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {open ? <HamburguerOpenIcon /> : <HamburguerClosedIcon />}
            </Disclosure.Button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              {authUser.email ? <LogoutButton authUser={authUser} /> : null}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default withAuthUser()(Navbar);
