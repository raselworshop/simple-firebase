import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
           <NavLink style={{'marginRight':'20px'}} to={'/'}>Home</NavLink>
           <NavLink to={'/login'}>Log In</NavLink>
        </div>
    );
};

export default Header;