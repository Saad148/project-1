import SearchItems from "../SearchItems";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import PostList from "./PostList";
import { Link } from "react-router-dom";

const Post = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts`);
        setUsers(response.data.posts);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  const fetchSearchData = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/posts/search?q=${value}`);
      setUsers(response.data.posts);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchSearchData(value);
  };
  return (
    <>
      <Link className="fixed top-0" to="/">
        Home
      </Link>

      <SearchItems
        isLoading={isLoading}
        users={users}
        handleChange={handleChange}
        input={input}
      />
      <PostList users={users} isLoading={isLoading} fetchError={fetchError} />
    </>
  );
};

export default Post;
