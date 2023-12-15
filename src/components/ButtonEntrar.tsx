import { Link } from "react-router-dom";
import { useGlobalStore } from "../useGlobalStore";

const textButtonEntrar = {
  button: "Entrar",
};

const ButtonEntrar = () => {
  const user = useGlobalStore((state) => state.user);
  const isAuthorized = useGlobalStore((state) => state.isAuthorized);

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
    </div>
  ) : null;
};

export default ButtonEntrar;
