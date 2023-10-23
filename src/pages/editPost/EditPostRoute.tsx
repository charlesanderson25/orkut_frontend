import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useZorm } from "react-zorm";
import { api } from "../../api";
import { postSchema } from "../../postSchema";
import toast from "react-simple-toasts";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Helmet } from "react-helmet";
import ButtonSubmitForm from "../../components/ButtonSubmitForm";
import { ErrorMessage } from "../../components/ErrorMessage";

const textEditPost = {
  title: "Editar Post",
  editSuccess: "Edição concluída com sucesso",
  editeFailure: "Ocorreu um erro",
  titleEdit: "Editar Post",
};

const textComentarios = {
  title: "Comentários",
  content: "Comentário:",
};

const initialStagePost = {
  id: "0",
  content: "",
  created_at: "",
};

interface Comment {
  id: number;
  message: string;
  created_at: string;
  user_id: number;
  user_first_name: string;
  user_last_name: string;
  user_avatar: string;
}

const initialComments: Comment[] = [];
const initialComment = "";

const EditPostRoute = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [initialStageFormEditPost, setInitialStageFormEditPost] =
    useState(initialStagePost);
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState(initialComment);

  const zo = useZorm("edit-post", postSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
      const response = await api.put(`/posts/${params.id}`, event.data);

      if (response.status === 200) {
        toast(textEditPost.editSuccess);
        navigate("/listar-posts/");
      } else {
        toast(textEditPost.editeFailure);
      }
    },
  });

  async function loadPost() {
    const response = await api.get(`/posts/${params.id}`);
    setInitialStageFormEditPost(response.data);
  }

  async function loadComments() {
    const response = await api.get(`/posts/${params.id}/comments`);
    const comments = response.data;
    setComments(comments);
  }

  async function createComment() {
    const response = await api.post(`/posts/${params.id}/comments`, {
      message: comment,
    });
    console.log(response.data);
  }

  async function onCommentSubmit(event) {
    event.preventDefault();
    await createComment();
    await loadComments();
  }

  useEffect(() => {
    loadPost();
    loadComments();
  }, [params.id]);

  console.log(comments);

  return (
    <>
      <section className="my-20 relative">
        <Helmet>
          <title>{textEditPost.titleEdit}</title>
        </Helmet>
        <div className="form-container inset-x-1/4">
          <form
            className="form bg-darkTheme rounded-2xl py-9 px-16 font-sans"
            ref={zo.ref}
          >
            <div className="text-white pl-3 pb-1">
              <BreadCrumbs
                link={[
                  { href: "/", label: "Home" },
                  {
                    href: "/listar-posts/",
                    label: "Listar Posts",
                  },
                ]}
              />
            </div>
            <h1 className="font-bold text-2xl text-white ml-3">
              {textEditPost.title} {params.id}
            </h1>

            <div className="flex-col">
              <textarea
                className={`bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white ${
                  zo.errors.content(
                    "border-2 border-red-500 focus:border-red-600"
                  )
                    ? "border-red-500"
                    : ""
                }`}
                id=""
                placeholder="Digite seu Texto"
                name={zo.fields.content()}
                defaultValue={initialStageFormEditPost.content}
              ></textarea>
              {zo.errors.content((erro) => (
                <ErrorMessage>{erro.message}</ErrorMessage>
              ))}
            </div>
            <ButtonSubmitForm />
          </form>
        </div>
      </section>

      <section className="mt-4 relative">
        <form
          onSubmit={onCommentSubmit}
          className="form bg-darkTheme rounded-2xl py-9 px-16 font-sans"
        >
          <div className="text-white text-2xl mb-4">
            {textComentarios.title}
          </div>
          <div className="flex-col">
            <label className="block text-white text-sm mb-4">
              {textComentarios.content}
            </label>
            <textarea
              className="bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white"
              id=""
              placeholder="Digite seu Comentário"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
          </div>
          <div className="mt-4">
            {/* <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              type="submit"
            > */}
            <ButtonSubmitForm />
            {/* </button> */}
          </div>
        </form>
        <section>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b py-2 cursor-pointer block"
            >
              <span className="text-sm text-gray-500">
                {new Date(comment.created_at).toLocaleDateString()}
              </span>
              <p>{comment.message}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default EditPostRoute;
