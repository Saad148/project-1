import { MoveLeft, ThumbsDown, ThumbsUp } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import PostComment from "./PostComment";
import { BASE_URL } from "../../constants";
import Loading from "../Loading";
import Modal from "../Modal";
import PostInfo from "./PostInfo";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils";

const PostDetailsList = ({ postDetail, postId, user }) => {
  const [postComments, setPostComments] = useState([]);
  const [openComment, setOpenComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  const fetchPostcomments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/comments/post/${postId}`);
      setPostComments(response.data.comments);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  // }, []);

  const handleclick = () => {
    fetchPostcomments();
    setOpenComment(!openComment);
  };

  return (
    <>
      <Link className="fixed top-0 flex gap-1" to="/posts">
        <MoveLeft />
        Go back
      </Link>
      <div className="font-[poppins] container gap-4 mx-auto p-6 pb-3 flex flex-col border border-gray-400 bg-blue-100 rounded-lg justify-between">
        <div className="border border-gray-400 rounded-2xl px-1 py-2 gap-4 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="rounded-full size-14 text-xl flex items-center justify-center bg-orange-500 text-white ml-2 mt-1 min-w-14 max-w-14">
              {user.firstName[0].toUpperCase()}
            </div>
            <div className="flex flex-col">
              <div>
                <div className="text-2xl font-bold">
                  {user.firstName} {user.lastName}
                </div>
              </div>
              <div>
                <button
                  onClick={() => setOpen(true)}
                  className="cursor-pointer hover:scale-105 hover:text-blue-900 hover:underline text-blue-500"
                >
                  Contact info
                </button>
              </div>
            </div>
          </div>
          <div className="font-extralight text-sm flex items-center flex-wrap md:pr-5 ">
            {postDetail.tags.map((tag) => (
              <div
                className="bg-gray-800 text-white border px-5 py-2 flex rounded-2xl"
                key={tag}
              >
                # {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="text-2xl">
            <span className="text-3xl font-bold">
              Title: <br />
            </span>
            "{postDetail.title}"
          </div>
          <div className="text-start text-xl pb-10">{postDetail.body}</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-3">
            <div>
              <div className="font-bold text-xl pl-1">
                {formatNumber(postDetail.views)} views
              </div>
            </div>
            <div className="border w-40 border-gray-400 rounded-3xl flex flex-row items-center justify-center gap-2 pr-3 pl-2.5 py-2">
              <ThumbsUp />
              <div className="font-bold">
                {formatNumber(postDetail.reactions.likes)}
              </div>

              <ThumbsDown />
              <div className="font-bold">
                {formatNumber(postDetail.reactions.dislikes)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Comment" className="mt-2 font-[poppins] container mx-auto">
        <button
          onClick={handleclick}
          className="flex items-center justify-between w-full px-4 py-3 bg-blue-200 hover:bg-blue-300 rounded-xl font-semibold"
        >
          <span className="">Comments</span>

          {openComment && <ChevronUp />}
          {!openComment && <ChevronDown />}
        </button>
        {isLoading && openComment && <Loading />}
        {!isLoading && openComment && (
          <ul className="">
            {postComments.map((comment) => (
              <PostComment key={comment.id} comment={comment} />
            ))}
          </ul>
        )}
      </div>
      {postComments.length === 0 && openComment && !isLoading && (
        <p className="text-2xl font-[poppins] container mx-auto mt-6">
          No comments on this post.
        </p>
      )}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <>
          <PostInfo user={user} />
        </>
      </Modal>
    </>
  );
};

export default PostDetailsList;
