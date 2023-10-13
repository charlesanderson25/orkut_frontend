import { FaLongArrowAltRight as ArrowIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

// const textBreadCrumbs = {
//   home: "Home",
//   edit: "Edit",
// };

interface PropsBreadCrumbs {
  link: {
    href: string;
    label: React.ReactNode;
  }[];
}

const BreadCrumbs = ({ link }: PropsBreadCrumbs) => {
  return (
    <div className="flex items-center gap-2">
      <Link className="font-bold hover:text-defaultRed" to={link[0].href}>
        {link[0].label}
      </Link>
      <ArrowIcon />
      <Link className="font-bold hover:text-defaultRed" to={link[1].href}>
        {link[1].label}
      </Link>
    </div>
  );
};

export default BreadCrumbs;
