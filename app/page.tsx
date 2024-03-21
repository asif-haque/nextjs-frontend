"use client";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import DiscussionForum from "./components/DiscussionForum";
import MarketStories from "./components/MarketStories";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import MobileTopNav from "./components/MobileTopNav";

export default function Home() {
  const [active, setActive] = useState({ discForum: true, mktStories: false });

  return (
    <div className="md:flex">
      <Navbar />
      <MobileTopNav active={active} setActive={setActive} />
      <DiscussionForum
        className={`flex-1 ${!active.discForum && `hidden md:block`}`}
      />
      <MarketStories
        className={`flex-[0.5] ${!active.mktStories && `hidden md:block`}`}
      />
    </div>
  );
}
