import React from "react";
import Discussion from "./Discussion";
import discussions from "../data/data.json";

interface PropTypes {
  className?: string;
}
const DiscussionForum: React.FC<PropTypes> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1 className="hidden md:block w-fit text-red-600 bg-zinc-200 md:text-2xl lg:text-4xl p-1 font-semibold m-auto my-2">
        DISCUSSION FORUM
      </h1>
      <div className="space-y-10">
        {discussions.map((disc, i) => (
          <Discussion disc={disc} key={i} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
