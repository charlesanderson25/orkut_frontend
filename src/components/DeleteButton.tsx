import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";
import toast from "react-simple-toasts";
import { api } from "../api";

const textDeleteButton = {
  p: "Excluir Post?",
};

interface PropsDeleteButton {
  id: string;
}

const DeleteButton = ({ id }: PropsDeleteButton) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  async function deletePost() {
    const response = await api.delete(`/posts/${id}`);
    console.log(response.status);
    if (response.status === 200) {
      toast(`Ohh Não, #${id}Fui Deletado!`);
    } else {
      toast("Houve um erro ao excluir esse post!");
    }

    navigate("/");
  }

  return (
    <span className="flex">
      <button
        onClick={deletePost}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <DeleteIcon className="font-bold text-4xl hover:text-defaultRed" />
      </button>
      {isHovered && (
        <p
          className="text-defaultRed flex items-center"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          {textDeleteButton.p}
        </p>
      )}
    </span>
  );
};

export default DeleteButton;
