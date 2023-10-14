import { Link } from "react-router-dom";

const textListPosts = {
  button: "Listar Posts",
};

const ListPosts = () => {
  return (
    <div>
      <Link to="/listar-posts" className="pl-12">
        <button className="text-white text-l font-bold hover:text-defaultRed tracking-wide">
          {textListPosts.button}
        </button>
      </Link>
    </div>
  );
};

export default ListPosts;
