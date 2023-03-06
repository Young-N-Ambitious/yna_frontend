import { Link, NavLink } from "react-router-dom";
import { NavStyle } from "./NavBar.style";

function NavBar() {
    let activeStyle = {
        background: "white",
    };
    return (
        <NavStyle>
            <section>
                <div className="navcontainer">
                    <Link className="linkstyle" to="/">
                        YNA LOGO
                    </Link>
                    <div className="navlinks">
                        <NavLink
                            className="linkpadding linkstyle"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/"
                            end
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="linkpadding linkstyle"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/about-us"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="linkpadding linkstyle"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/members"
                        >
                            Members
                        </NavLink>
                        <NavLink
                            className="linkpadding linkstyle"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/contact-us"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            className="linkpadding linkstyle"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/join-us"
                        >
                            Join
                        </NavLink>
                        <NavLink
                            className="linkpadding linkstyle"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </section>
        </NavStyle>
    );
}

export default NavBar;
