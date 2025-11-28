import PostData from "./PostData";
import Loading from "../Loading";
import FetchError from "../FetchError";

const PostList = ({ users, isLoading, fetchError }) => {
  return (
    <>
      {fetchError && <FetchError />}
      {isLoading && <Loading />}
      {!isLoading && !fetchError && (
        <ul className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {users.map((user) => (
            <PostData key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
