import { Link } from "react-router-dom";
import { useGlobalStore } from "../useGlobalStore";
import { TokenStorage } from "../tokenStorage";
import toast from "react-simple-toasts";
import ButtonLogout from "./ButtonLogout";

const textButtonEntrar = {
  button: "Entrar",
};

const ButtonEntrar = () => {
  const user = useGlobalStore((state) => state.user);
  const isAuthorized = useGlobalStore((state) => state.isAuthorized);

  const logout = () => {
    TokenStorage.removeToken();
    toast(`Até mais, ${user.first_name}`);
  };

  return !isAuthorized ? (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex ml-4 mt-4 md:mt-0"
    >
      <Link to="/entrar">
        <button className="rounded-lg bg-defaultRed font-bold text-lg p-3 border-none cursor-pointer text-white hover:text-hoverdefaultRed tracking-wide">
          {textButtonEntrar.button}
        </button>
      </Link>
      <ButtonLogout onClick={logout} />
    </div>
  ) : null;
};

export default ButtonEntrar;
