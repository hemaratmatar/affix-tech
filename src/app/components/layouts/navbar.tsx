"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" 
      className={`relative transition-all duration-500 ease-in-out animate-fade ${
        isOpen
          ? "bg-gradient-to-r from-purple-400 to-red-400 text-black"
          : "bg-transparent text-white"
      }  w-full`}
      
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-[90px] max-w-screen-lg">
        {/* Hamburger Menu (static skeleton) */}
        <MenuButton className="relative group" onClick={() => setIsOpen(!isOpen)}>
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-red-400 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[16px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden pr-[24px]">
            <span
                className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></span>
            </div>
          </div>
        </MenuButton>

        {/* Title */}
        <h1 className="text-lg font-semibold">Affix Tech</h1>

        {/* Search Icon */}
        <AiOutlineSearch className="w-6 h-6 text-black" />
      </div>

      {/* Mobile Menu (static always open) */}
      <div className={`fixed top-[90px] left-0 w-full bg-gradient-to-r from-purple-400 to-red-400 text-black shadow-md transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen py-4" : "max-h-0 bg-transparent"}`}>
        <MenuItems className="flex flex-col items-center space-y-2">
          {["Home", "Destinations", "Blog", "Contact"].map((item, index) => (
            <MenuItem key={index}>
              <a href="#" className="w-full text-center py-2 ">
                {item}
              </a>
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </Menu>
  );
};

export default Navbar;
