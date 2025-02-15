"use client";

import { useState } from 'react'
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai";

// ข้อมูลสำหรับเมนู (ปรับได้ตามต้องการ)
const menuData = {
  engagement: [
    { name: "About", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  resources: [
    { name: "Community", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Webinars", href: "#" },
  ],
  articles: [
    {
      title: "Boost your conversion rate",
      date: "Mar 16, 2023",
      category: "Marketing",
      description: "Et dolore officia quas nostrum esse odit cum iure de esse.",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1600195077070-04e54a58f8d8?auto=format&fit=crop&w=300&h=200&q=80",
    },
    {
      title: "How to use search engine optimization to drive sales",
      date: "Mar 10, 2023",
      category: "Marketing",
      description:
        "Optio cum necessitatibus dolor voluptatem provident commodi et.",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019397-1c51437aa727?auto=format&fit=crop&w=300&h=200&q=80",
    },
  ],
};

export default function MegaMenu() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-purple-400 to-red-400 text-white ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
                {/* โลโก้หรือชื่อเว็บ */}
        {/* <div className="text-lg font-bold">MyWebsite</div> */}

        {/* ใช้ Popover สำหรับเมนู */}
        <Popover className=" z-50">
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

          <PopoverPanel className="absolute  bg-gradient-to-r from-purple-400 to-red-400 text-white shadow-lg left-1/2 transform -translate-x-1/2 w-screen max-w-full mt-2 overflow-hidden">
                <div className="container mx-auto p-6">
                <div className="flex justify-between  mx-auto  ">
              <div className="flex flex-row justify-between w-full">
                {/* คอลัมน์ซ้าย: Engagement */}
                <div>
                  <h3 className="text-base font-semibold mb-2">Engagement</h3>
                  <ul className="space-y-1">
                    {menuData.engagement.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* คอลัมน์กลาง: Resources */}
                <div>
                  <h3 className="text-base font-semibold mb-2">Resources</h3>
                  <ul className="space-y-1">
                    {menuData.resources.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* คอลัมน์ขวา: บทความ/ข่าวสาร */}
                <div>
                  {menuData.articles.map((article) => (
                    <div key={article.title} className="mb-4 flex gap-4">
                      {/* รูปภาพบทความ */}
                      <img
                        src={article.imageUrl}
                        alt={article.title}
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
              </div>
            </div>
                </div>
          </PopoverPanel>
        </Popover>
        {/* โลโก้หรือชื่อเว็บ */}
        <h1 className="text-lg font-semibold">Affix Tech</h1>

                {/* Search Icon */}
                <AiOutlineSearch
                  className={`w-6 h-6  ${isOpen ? "text-black" : "text-white"}`}
                />
        </div>

      </div>
    </nav>
  );
}
