import { Route, Routes } from "react-router-dom";
import User from "./components/user/User";
import Post from "./components/post/Post";
import PostDetails from "./components/post/PostDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/post/:postId" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
