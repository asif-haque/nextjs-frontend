"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaCommentAlt, FaCommentDollar, FaUserCircle } from "react-icons/fa";
import {
  GoTriangleDown,
  GoTriangleLeft,
  GoTriangleRight,
} from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = "User";
  const navItems = [
    {
      icon: <FaCommentAlt className="text-xl" />,
      text: "Discussion Forum",
      active: true,
    },
    { icon: <FaCommentDollar className="text-xl" />, text: "Market Stories" },
    { text: "Sentiment" },
    { text: "Market" },
    { text: "Sector" },
    { text: "Watchlist" },
    { text: "Events" },
    { text: "News/Interview" },
  ];

  return (
    <>
      {open && (
        <div className="fixed h-[100vh] text-white lg:text-lg bg-blue-950 w-[60%] sm:w-[25%]">
          <div className="flex justify-between px-2 lg:px-6 py-5 items-center border-b mb-3">
            <div className="flex gap-2 items-center">
              <FaUserCircle className="text-4xl" />
              <p>Hello, {user}</p>
            </div>
            <IoIosNotifications className="text-3xl" />
          </div>
          {navItems.map((item) => (
            <div
              key={item.text}
              className={`px-2 lg:px-6 py-3 ${
                item.active && `bg-[rgba(0,0,0,0.6)]`
              }`}
            >
              <div className="flex gap-3 items-center">
                <div className="w-4">{item.icon && item.icon}</div>
                <Link href="#">{item.text}</Link>
                {item.active && <GoTriangleDown className="ml-auto" />}
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-1/2 ${
          open ? `left-[60%] sm:left-[25%]` : `left-0`
        } -translate-y-1/2 bg-blue-950 h-24 text-white rounded-r-xl`}
      >
        {open ? <GoTriangleLeft /> : <GoTriangleRight />}
      </button>
      {/* As the navbar is fixed, i am using another div to slide the contents right */}
      {open && <div className="md:w-[25%]" />}
    </>
  );
}
