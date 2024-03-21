import React from "react";

interface MarketStoryCardPropType {
  story: { heading: string; Content: string };
}
const MarketStoryCard: React.FC<MarketStoryCardPropType> = ({ story }) => {
  return (
    <a href="">
      <div className="w-[90%] shadow mb-5 pb-3 m-auto">
        <img src="/sundown.jpg" alt="" />
        <p className="font-semibold text-sm px-3 py-2">{story.heading}</p>
        <p className="text-xs px-3">{story.Content}</p>
      </div>
    </a>
  );
};

export default MarketStoryCard;
