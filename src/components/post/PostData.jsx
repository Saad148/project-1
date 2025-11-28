import { NavLink } from "react-router-dom";
import LikeDislike from "./LikeDislike";
import { formatNumber } from "../../utils";

const PostData = ({ user }) => {
  const { id } = user;

  return (
    <div className="px-6 pt-6 pb-3 flex flex-col border border-gray-300 bg-blue-100 rounded-lg justify-between">
      <div className="flex flex-col justify-center gap-4 font-[poppins]">
        <li className="text-2xl">
          <span className="text-3xl font-bold">
            Title: <br />
          </span>
          "{user.title}"
        </li>
        <li className="text-start text-xl pb-10">{user.body}</li>
      </div>
      <div className="font-[poppins] flex flex-row justify-between items-center">
        <div className="flex flex-col gap-3">
          <div>
            <li className="font-bold text-xl pl-1">
              {formatNumber(user.views)} views
            </li>
          </div>
          <div>
            <LikeDislike user={user} />
          </div>
        </div>
        <div className="">
          <NavLink to={`/post/${id}`}>
            <button className="mt-5 cursor-pointer p-2 bg-indigo-600 hover:bg-indigo-400 text-white rounded-xl px-4 py-3">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default PostData;
