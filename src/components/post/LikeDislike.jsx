import { ThumbsUp } from "lucide-react";
import { ThumbsDown } from "lucide-react";
import { formatNumber } from "../../utils";

const LikeDislike = ({ user }) => {
  return (
    <div className="border w-40 border-gray-400 rounded-3xl flex flex-row items-center justify-center gap-2 pr-3 pl-2.5 py-2">
      <ThumbsUp />
      <li className="font-bold">{formatNumber(user.reactions.likes)}</li>

      <ThumbsDown />
      <li className="font-bold">{formatNumber(user.reactions.dislikes)}</li>
    </div>
  );
};

export default LikeDislike;
