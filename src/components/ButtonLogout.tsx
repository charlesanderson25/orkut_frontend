import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGlobalStore } from "../useGlobalStore";
import { TokenStorage } from "../tokenStorage";
import toast from "react-simple-toasts";

const textButtonLogout = {
  button: "Sair",
};

interface ButtonLogoutProps {
  onClick?: () => void;
}

const ButtonLogout: React.FC<ButtonLogoutProps> = ({ onClick }) => {
  const user = useGlobalStore((state) => state.user);
  const isAuthorized = useGlobalStore((state) => state.isAuthorized);
  //   const navigate = useNavigate();

  function logout() {
    TokenStorage.removeToken();
    toast(`Até mais, ${user.first_name}`);
    if (onClick) {
      onClick();
    }
  }

  return !isAuthorized ? (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex ml-4 mt-4 md:mt-0"
    >
      <Link to="/entrar">
        <button
          onClick={logout}
          className="rounded-lg bg-defaultRed font-bold text-lg p-3 border-none cursor-pointer text-white hover:text-hoverdefaultRed tracking-wide"
        >
          {textButtonLogout.button}
        </button>
      </Link>
    </div>
  ) : null;
};

export default ButtonLogout;
