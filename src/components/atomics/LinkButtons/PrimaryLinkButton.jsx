import { Link } from "react-router-dom";

const PrimaryLinkButton = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="sm:px-4 px-2 sm:py-2 py-1 font-medium rounded-md bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-offset-1 focus:ring-red-500 text-white outline-none focus:outline-none"
    >
      {children}
    </Link>
  );
};

export default PrimaryLinkButton;
