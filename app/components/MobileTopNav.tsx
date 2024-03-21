"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface MobileTopNavTypes {
  active: {
    discForum: boolean;
    mktStories: boolean;
  };
  setActive: Dispatch<
    SetStateAction<{
      discForum: boolean;
      mktStories: boolean;
    }>
  >;
}

const MobileTopNav: React.FC<MobileTopNavTypes> = ({ active, setActive }) => {
  return (
    <div className="flex bg-blue-950 mb-3 md:hidden">
      <div
        className={`flex-1 flex justify-center py-1 text-white ${
          active.discForum &&
          `bg-[rgba(0,0,0,0.4)] border-b-4 border-b-orange-600`
        }`}
        onClick={() => setActive({ discForum: true, mktStories: false })}
      >
        Discussion Forum
      </div>
      <div
        className={`flex-1 flex justify-center py-1 text-white ${
          active.mktStories &&
          `bg-[rgba(0,0,0,0.4)] border-b-4 border-b-orange-600`
        }`}
        onClick={() => setActive({ discForum: false, mktStories: true })}
      >
        Market Stories
      </div>
    </div>
  );
};

export default MobileTopNav;
