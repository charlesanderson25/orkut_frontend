import { SiMicrosoftonenote as IconLogoNotepad } from "react-icons/si";
import ButtonCreateNotepad from "./ButtonCreateNotepad";
import { Link } from "react-router-dom";
import ListNotepads from "./ListNotepads";

const textsBanner = {
  h1: "CharliePad",
  home: "Home",
};

const Banner = () => {
  return (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex bg-darkTheme flex-col md:flex-row justify-between items-center p-6 space-y-4 md:space-y-0 md:space-x-4"
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-16">
          <IconLogoNotepad className="bg-defaultRed text-6xl m-1 " />
          <h1 className="font-bold text-2xl text-white hover:text-defaultRed tracking-wide">
            {textsBanner.h1}
          </h1>
        </Link>
        <Link
          className="text-white text-l font-bold hover:text-defaultRed tracking-wide"
          to="/"
        >
          {textsBanner.home}
        </Link>
        <ListNotepads />
      </div>
      <ButtonCreateNotepad />
    </div>
  );
};

export default Banner;
