import React from "react";
import { CiShare2 } from "react-icons/ci";
import {
  FaRegCommentAlt,
  FaRegEye,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";

interface DiscussionPropTypes {
  disc: discType;
}
interface discType {
  name: string;
  sector: number;
  postedAgo: string;
  content: string;
  like: string;
  views: string;
  comments: string;
}

const Discussion: React.FC<DiscussionPropTypes> = ({ disc }) => {
  return (
    <div className="flex gap-1 sm:gap-2 px-1 sm:px-5 py-2 shadow-lg">
      <div className="size-[50px] min-w-[50px] rounded-full overflow-hidden">
        <img className="object-cover size-full" src="/dp.jpg" alt="" />
      </div>
      <div className="w-full">
        <div className="flex mb-2">
          <div className="font-bold">{disc.name}</div>
          <div className="bg-blue-800 px-2 rounded-xl text-white text-xs flex items-center ml-3">
            Sector {disc.sector}
          </div>
          <div className="ml-auto text-sm text-blue-400">{disc.postedAgo}</div>
        </div>
        <div className="">{disc.content}</div>
        <div className="flex my-1 font-semibold text-xs">
          <div className="w-full flex items-center gap-1">
            <a href="">
              <FaRegHeart className="text-lg" />
            </a>
            {disc.like}
          </div>
          <div className="w-full flex items-center gap-1">
            <a href="">
              <FaRegEye className="text-lg" />
            </a>
            {disc.views}
          </div>
          <div className="w-[200%] lg:w-full flex items-center gap-1">
            <a href="">
              <FaRegCommentAlt className="text-lg" />
            </a>
            {disc.comments} Comments
          </div>
          <div className="w-full flex items-center gap-1">
            <a href="">
              <FaShareAlt className="text-lg" />
            </a>
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
