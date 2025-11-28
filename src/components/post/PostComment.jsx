import { ThumbsUp } from "lucide-react";

const PostComment = ({ comment }) => {
  return (
    <>
      <div className="flex gap-5 mt-8">
        <li className="rounded-full size-14 text-xl flex items-center justify-center bg-orange-500 text-white ml-2 mt-1 min-w-14 max-w-14">
          {comment.user.username[0].toUpperCase()}
        </li>
        <div className="flex flex-col gap-1">
          <li className="font-extrabold">@{comment.user.username}</li>
          <li>{comment.body}</li>
          <div className="flex gap-1.5 items-center">
            <ThumbsUp />
            <li> {comment.likes} </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComment;
