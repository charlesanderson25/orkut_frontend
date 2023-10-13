import { Link } from "react-router-dom";

const textButtonCreateNotepad = {
  button: "Criar Notepad", 
}

const ButtonCreateNotepad = () => {
  return (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex ml-4 mt-4 md:mt-0"
    >
      <Link to="/Criar-Notepad">
      <button className="rounded-lg bg-defaultRed font-bold text-lg p-3 border-none cursor-pointer text-white hover:text-hoverdefaultRed tracking-wide">
        {textButtonCreateNotepad.button}
      </button>
      
      </Link>
    </div>
  );
};

export default ButtonCreateNotepad;
