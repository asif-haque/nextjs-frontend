import React from "react";
import MarketStoryCard from "./MarketStoryCard";
import stories from "../data/stories.json";

interface PropTypes {
  className?: string;
}

const MarketStories: React.FC<PropTypes> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1 className="hidden md:block w-fit text-red-600 bg-zinc-200 lg:text-2xl p-1 font-semibold m-auto my-2">
        MARKET STORIES
      </h1>
      {stories.map((story, i) => (
        <MarketStoryCard story={story} key={i} />
      ))}
    </div>
  );
};

export default MarketStories;
