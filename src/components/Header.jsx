import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">User</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
        </div>
    );
};

export default Header;