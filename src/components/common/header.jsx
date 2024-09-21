"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { imageUrlConstant } from "@/constants";
import { motion } from "framer-motion";

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Header = ({isSticky = true}) => {
  const router = useRouter();

  const navigation = (data) => {
    router.push(data || "/");
  };
  return (
    <nav className={isSticky ? "bg-[#248de4] sticky top-0 z-20" : "bg-[#248de4] z-20" }>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-[#248de4] from-[#248de4] to-[#0c5397] shadow-lg max-w-[1920px] mx-auto ">
        <Link href={"/"} className="mr-6 flex items-center" prefetch={false}>
          <img
            loading="lazy"
            src={imageUrlConstant?.logoUrl}
            alt="logo"
            className="min-w-[100px]"
          />
        </Link>

        <div className="flex justify-start items-center w-full">
          <div className=" items-center flex-1  bg-white-10 mx-10 rounded-full px-3 hidden sm:flex">
            <SearchIcon className="animate-spin" />
            <input
              className="pl-2 w-full h-10 min-w-[100px] rounded-lg bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none transition-colors duration-300 ease-in-out"
              placeholder="Search courses, resources, and more..."
              type="text"
            />
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="items-center gap-10 text-white-10 cursor-pointer hidden lg:flex">
              <motion.button whileTap={{ scale: 0.85 }} onClick={()=> navigation("/courses") }>
                <span className="whitespace-nowrap text-ellipsis">Courses</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => navigation("/about")}
              >
                <span className="whitespace-nowrap text-ellipsis">About</span>
              </motion.button>

              <motion.button
                onClick={() => navigation("/contact-us")}
                whileTap={{ scale: 0.85 }}
              >
                <span className="whitespace-nowrap text-ellipsis">
                  Contact Us
                </span>
              </motion.button>
            </div>
            <div className="ml-5 flex items-center gap-2">
              <button
                onClick={() => navigation("/login")}
                className="text-white-10 hover:bg-linear-grad-yellow-10  whitespace-nowrap text-ellipsis cursor-pointer bg-black-10 h-10 px-3 rounded-sm"
              >
                Login
              </button>
              <button
                onClick={() => navigation("/sign-up")}
                className="hover:bg-linear-grad-yellow-10 text-black whitespace-nowrap text-ellipsis cursor-pointer bg-white-10 px-3 h-10 text-center grid place-items-center rounded-sm"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Header;
