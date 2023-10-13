import { Helmet } from "react-helmet";

const textWelcome = {
  h2: "Bem vindo ao",
  span: "CharliePad",
  p: "Faça suas anotações, relate seus pensamentos, tome notas. . .",
  title: "Home | CharliePad",
};

const Welcome = () => {
  return (
    <div className="p-20">
      <Helmet>
        <title>{textWelcome.title}</title>
      </Helmet>
      <h2
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
        className="text-white text-5xl font-extrabold tracking-wide"
      >
        {textWelcome.h2}{" "}
        <span className="text-defaultRed"> {textWelcome.span} </span>
      </h2>
      <p className="text-white font-bold tracking-wide pl-1 pt-2">
        {textWelcome.p}
      </p>
    </div>
  );
};

export default Welcome;
