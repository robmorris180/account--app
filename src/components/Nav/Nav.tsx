import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Quote History</Link>
      <Link to="/account-details">Account Details</Link>
    </nav>
  );
};

export default Nav;
