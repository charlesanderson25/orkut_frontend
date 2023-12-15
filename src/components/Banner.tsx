import { SiMicrosoftonenote as IconLogoPost } from "react-icons/si";
import ButtonCreatePost from "./ButtonCreatePost";
import { Link } from "react-router-dom";
import ListPosts from "./ListPosts";
import ButtonEntrar from "./ButtonEntrar";
import { useGlobalStore } from "../useGlobalStore";

const textsBanner = {
  h1: "CharliePad",
  home: "Home",
};

const Banner = () => {
  const user = useGlobalStore((state) => state.user);

  return (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex bg-darkTheme flex-col md:flex-row justify-between items-center p-6 space-y-4 md:space-y-0 md:space-x-4"
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-16">
          <IconLogoPost className="bg-defaultRed text-6xl m-1 " />
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
        <ListPosts />
      </div>
      <ButtonEntrar />
      <ButtonCreatePost />
      <div className="flex flex-row items-center gap-8 text-white">
        {user.first_name} {user.last_name}
        <img src={user.avatar} className="w-12 h-12 rounded-full" />
      </div>
    </div>
  );
};

export default Banner;
