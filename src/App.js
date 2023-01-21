import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import SignUp from "./pages/SignUp";
import SinglePostPage from "./pages/SinglePostPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:postID/:inActive" element={<SinglePostPage />} />
        <Route path="/:userID" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
