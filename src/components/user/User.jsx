import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import SearchItems from "../SearchItems";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users`);
        setUsers(response.data.users);
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
      const response = await axios.get(`${BASE_URL}/users/search?q=${value}`);
      setUsers(response.data.users);
    } catch (err) {
      console.log(err.message);
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
      <Link className="fixed top-0" to="/posts">
        Posts
      </Link>
      <SearchItems
        isLoading={isLoading}
        users={users}
        handleChange={handleChange}
        input={input}
      />
      <UserList users={users} isLoading={isLoading} fetchError={fetchError} />
    </>
  );
};

export default User;
