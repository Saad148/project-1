import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import PostDetailsList from "./PostDetailsList";
import { BASE_URL } from "../../constants";
import Loading from "../Loading";
import FetchError from "../FetchError";

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/post/${postId}`);
        setPostDetail(response.data);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/users/${postDetail.userId} `
        );
        setUser(response.data);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (postDetail?.userId) fetchUser();
  }, [postDetail?.userId]);

  return (
    <>
      {fetchError && <FetchError />}
      {isLoading && <Loading />}
      {!fetchError && !isLoading && user && postDetail && (
        <PostDetailsList
          postDetail={postDetail}
          isLoading={isLoading}
          postId={postId}
          user={user}
        />
      )}
    </>
  );
};

export default PostDetails;
