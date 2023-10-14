import { Route, Routes } from "react-router-dom";
import BackGroundImage from "../components/BackGroundImage";
import { NotFoundTwo } from "../pages/notFound/NotFoundTwo";
import Welcome from "../pages/welcome/Welcome";
import CreateNotepadRoute from "../pages/createPostRoute/CreatePostRoute";
import EditNotepadRoute from "../pages/editPost/EditPostRoute";
import NotepadListMain from "../pages/PostListMain/PostListMain";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/listar-notepads" element={<NotepadListMain />} />
      <Route path="/criar-Notepad" element={<CreateNotepadRoute />} />
      <Route path="image" element={<BackGroundImage />} />
      <Route path="/editar-notepad/:id" element={<EditNotepadRoute />} />

      <Route path="*" element={<NotFoundTwo />} />
    </Routes>
  );
};

export default RoutesApp;
