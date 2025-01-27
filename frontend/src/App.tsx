import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publish" element={<Publish />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
