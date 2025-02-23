"use client";

import { useState } from 'react'
import Image from "next/image";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from 'next/link';
// import { AiOutlineSearch } from "react-icons/ai";

// ข้อมูลสำหรับเมนู (ปรับได้ตามต้องการ)
const menuData = {
  affixtech: [
    { name: "About", href: "/about" },
    // { name: "Customers", href: "#" },
    // { name: "Press", href: "#" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Contact Us", href: "/contact" },
  ],
  users: [
    { name: "General", href: "/general" },
    { name: "PC & Laptop", href: "/pc-labtop" },
    { name: "Website", href: "/website" },
    { name: "Mobile", href: "/mobile" },
    { name: "Gadget", href: "/gadget" },
  ],
  developments: [
    { name: "Dev", href: "/developer" },
    { name: "Website", href: "/website" },
    { name: "Mobile", href: "/mobile-dev" },
    { name: "AI", href: "/artificial-intelligence" },
    { name: "Security", href: "/security" },
  ],
  articles: [
    {
      title: "Boost your conversion rate",
      date: "Mar 16, 2023",
      category: "Marketing",
      description: "Et dolore officia quas nostrum esse odit cum iure de esse.",
      href: "#",
      imageUrl:
        "https://fastly.picsum.photos/id/4/200/200.jpg?hmac=ozRrjh7SMobdmKcOU0f5sWYszFW9Or1c90qeq7uqtuw",
    },
    {
      title: "How to use search engine optimization to drive sales",
      date: "Mar 10, 2023",
      category: "Marketing",
      description:
        "Optio cum necessitatibus dolor voluptatem provident commodi et.",
      href: "#",
      imageUrl:
        "https://fastly.picsum.photos/id/4/200/200.jpg?hmac=ozRrjh7SMobdmKcOU0f5sWYszFW9Or1c90qeq7uqtuw",
    },
  ],
};

export default function MegaMenu() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-purple-400 to-red-400 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
                {/* โลโก้หรือชื่อเว็บ */}
        {/* <div className="text-lg font-bold">MyWebsite</div> */}

        {/* ใช้ Popover สำหรับเมนู */}
        <div className="flex md:mx-auto order-2 md:order-1">
        <Popover className=" z-10">
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-medium"
          onClick={() => setIsOpen(!isOpen)}
          >
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
          </PopoverButton>

          <PopoverPanel className="absolute  bg-gradient-to-r from-purple-400 to-red-400 text-white shadow-lg left-1/2 transform -translate-x-1/2 w-screen max-w-full mt-2 overflow-hidden h-screen md:h-auto z-10 ">
                <div className="container mx-auto p-6">
                <div className="flex justify-between  mx-auto  ">
              <div className="flex flex-col md:flex-row justify-between w-full">
                {/* คอลัมน์ซ้าย: affixtech */}
                <div className='hidden md:block'>
                  <h3 className=" font-semibold mb-2">Affix Tech</h3>
                  <ul className="space-y-1">
                  {menuData.affixtech.map((item) => (
                    <li key={item.name}>
                    <a href={item.href} className="transition-colors">
                      {item.name}
                    </a>
                    </li>
                  ))}
                  </ul>
                </div>
                <div className="md:hidden">
                  {/* <h3 className="text-base font-semibold mb-2">Menu</h3> */}
                  <ul className="space-y-1">
                  {Object.keys(menuData).map((key) => (
                    <li key={key}>
                    <Popover className="relative">
                      <PopoverButton className="font-medium py-2 px-2">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      </PopoverButton>
                      <PopoverPanel className="relative z-99 bg-white text-black p-4 mt-2 rounded shadow-lg">
                      <ul className="space-y-1">
                        {menuData[key as keyof typeof menuData].map((item: { name?: string; title?: string; href: string }) => (
                        <li key={item.name || item.title}>
                          <a href={item.href} className="transition-colors">
                          {item.name || item.title}
                          </a>
                        </li>
                        ))}
                      </ul>
                      </PopoverPanel>
                    </Popover>
                    </li>
                  ))}
                  </ul>
                </div>

                {/* คอลัมน์กลาง: users */}
                <div className='hidden md:block'>
                  <h3 className="text-base font-semibold mb-2">Category</h3>
                  <ul className="space-y-1">
                    {menuData.users.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* คอลัมน์กลาง: developments */}
                <div className='hidden md:block'>
                  <h3 className="text-base font-semibold mb-2">Category</h3>
                  <ul className="space-y-1">
                    {menuData.developments.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* คอลัมน์ขวา: บทความ/ข่าวสาร */}
                <div className='hidden md:block'>
                  {menuData.articles.map((article) => (
                    <div key={article.title} className="mb-4 flex gap-4">
                      {/* รูปภาพบทความ */}
                      
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        width={200}
                        height={200}
                        className="h-20 w-28 rounded object-cover"
                      />
                      <div>
                        <p className="text-xs text-gray-300">
                          {article.date} | {article.category}
                        </p>
                        <a
                          href={article.href}
                          className="mt-1 block text-sm font-semibold hover:text-indigo-600"
                        >
                          {article.title}
                        </a>
                        <p className="text-xs text-gray-300 mt-1">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-right md:hidden mt-4">
                  <button className='rounded-full mx-2 bg-purple-500 px-4 py-2'>Sign In</button>
                  <button className='rounded-full mx-2 bg-purple-500 px-4 py-2'> Get started</button>
                </div>
              </div>
            </div>
                </div>
          </PopoverPanel>
        </Popover>
        </div>
        {/* โลโก้หรือชื่อเว็บ */}
        <div className="flex mx-auto order-1 md:order-2">
          <h1 className="text-lg font-semibold">Affix Tech</h1>
        </div>
        <div className="hidden md:flex md:flex-row mx-auto order-3">

                  <Link className='rounded-full mx-2 bg-purple-500 px-4 py-2' href='/signin'>Sign In</Link>
                  <button className='rounded-full mx-2 bg-purple-500 px-4 py-2'> Get started</button>
        </div>
                {/* Search Icon */}
                {/* <AiOutlineSearch
                  className={`w-6 h-6  ${isOpen ? "text-black" : "text-white"}`}
                /> */}
        </div>

      </div>
    </nav>
  );
}
