import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit as EditIcon } from "react-icons/fa";

interface PropsEditButton {
  id: string;
}

const texts = {
  titleEditNotepad: "Editar Notepad",
};

const EditButton = ({ id }: PropsEditButton) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex">
      <span className="flex">
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          to={`/editar-notepad/${id}`}
          className="font-bold text-4xl hover:text-defaultRed"
        >
          <EditIcon />
        </Link>
        {isHovered && (
          <p
            className="text-defaultRed flex items-center justify-center"
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            {texts.titleEditNotepad} {id}
          </p>
        )}
      </span>
    </div>
  );
};

export default EditButton;
