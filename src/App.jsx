import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Feed from "./components/home/Feed";
import Header from "./components/home/Header";
import AllPosts from "./components/posts/AllPosts";
import Post from "./components/posts/Post";
import CreatePost from "./components/posts/CreatePost";
import UpdatePost from "./components/posts/UpdatePost";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-posts" element={<AllPosts />} />
          <Route path="/post" element={<Post />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post" element={<UpdatePost />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
