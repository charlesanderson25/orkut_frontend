import styled from "styled-components";
import ButtonSubmitForm from "../../components/ButtonSubmitForm";
import { ErrorMessage } from "../../components/ErrorMessage";
import { api } from "../../api";
import { notepadSchema } from "../../postSchema";
import { useZorm } from "react-zorm";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-simple-toasts";
import { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Helmet } from "react-helmet";

interface StyledLabelProps {
  titulo: string;
  subtitulo: string;
  texto: string;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const textEditNotepad = {
  title: "Editar Notepad",
  editSuccess: "Edição concluída com sucesso",
  editeFailure: "Ocorreu um erro ",
  titleEdit: "Editar Notepad",
};

const initialStageNotepad = {
  id: "0",
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

const EditNotepadRoute = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [initialStageFormEditNotepad, setInitialStageFormEditNotepad] =
    useState(initialStageNotepad);

  const zo = useZorm("edit-notepad", notepadSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
      const response = await api.put(`/notepads/${params.id}`, event.data);
      console.log(response.data);

      if (response.status == 200) {
        console.log(response.data);

        toast(textEditNotepad.editSuccess);
        navigate("/listar-notepads/");
      } else {
        toast(textEditNotepad.editeFailure);
      }
    },
  });

  async function loadNotepad() {
    const response = await api.get(`/notepads/${params.id}`);
    setInitialStageFormEditNotepad(response.data);
  }

  useEffect(() => {
    loadNotepad();
  }, [params.id]);

  return (
    <section className="my-20 relative min-h-screen">
      <Helmet>
        <title>{textEditNotepad.titleEdit}</title>
      </Helmet>
      <div className="form-container absolute inset-x-1/4">
        <form
          className="form bg-darkTheme rounded-2xl py-9 px-16 font-sans"
          ref={zo.ref}
        >
          <div className="text-white pl-3 pb-1">
            <BreadCrumbs
              link={[
                { href: "/", label: "Home" },
                {
                  href: "/listar-notepads/",
                  label: "Listar Notepads",
                },
              ]}
            />
          </div>
          <h1 className="font-bold text-2xl text-white ml-3">
            {textEditNotepad.title} {params.id}
          </h1>

          <div className="flex-col">
            <StyledLabel
              titulo="Título"
              subtitulo="Subtítulo"
              texto="Texto"
            ></StyledLabel>
            <input
              className={`bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white ${zo.errors.title(
                "border-2 border-red-500 focus:border-red-600"
              )} `}
              type="text"
              placeholder="Digite seu Título"
              name={zo.fields.title()}
              defaultValue={initialStageFormEditNotepad.title}
            />
            {zo.errors.title((erro) => (
              <ErrorMessage>{erro.message}</ErrorMessage>
            ))}
          </div>

          <div className="flex-col">
            <StyledLabel
              titulo="Título"
              subtitulo="Subtítulo"
              texto="Texto"
            ></StyledLabel>

            <input
              className={`bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white ${zo.errors.subtitle(
                "border-2 border-red-500 focus:border-red-600"
              )} `}
              type="text"
              placeholder="Digite o Subtítulo"
              name={zo.fields.subtitle()}
              defaultValue={initialStageFormEditNotepad.subtitle}
            />

            {zo.errors.subtitle((erro) => (
              <ErrorMessage>{erro.message}</ErrorMessage>
            ))}
          </div>

          <div className="flex-col">
            <StyledLabel
              titulo="Título"
              subtitulo="Subtítulo"
              texto="Texto"
            ></StyledLabel>
            <textarea
              className={`bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white ${zo.errors.content(
                "border-2 border-red-500 focus:border-red-600"
              )} `}
              id=""
              placeholder="Digite seu Texto"
              name={zo.fields.content()}
              defaultValue={initialStageFormEditNotepad.content}
            ></textarea>

            {zo.errors.content((erro) => (
              <ErrorMessage>{erro.message}</ErrorMessage>
            ))}
          </div>
          <ButtonSubmitForm />
        </form>
      </div>
    </section>
  );
};

export default EditNotepadRoute;
