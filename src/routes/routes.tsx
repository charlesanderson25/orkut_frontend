import { Route, Routes } from "react-router-dom";
import BackGroundImage from "../components/BackGroundImage";
import { NotFoundTwo } from "../pages/notFound/NotFoundTwo";
import Welcome from "../pages/welcome/Welcome";
import CreatePostRoute from "../pages/createPostRoute/CreatePostRoute";
import EditPostRoute from "../pages/editPost/EditPostRoute";
import PostListMain from "../pages/PostListMain/PostListMain";
import { SignIn } from "../components/SignIn";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/listar-posts" element={<PostListMain />} />
      <Route path="/criar-Post" element={<CreatePostRoute />} />
      <Route path="image" element={<BackGroundImage />} />
      <Route path="/editar-post/:id" element={<EditPostRoute />} />
      <Route path="/entrar" element={<SignIn />} />

      <Route path="*" element={<NotFoundTwo />} />
    </Routes>
  );
};

export default RoutesApp;
