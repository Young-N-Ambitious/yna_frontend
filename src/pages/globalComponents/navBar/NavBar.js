import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavStyle } from "./NavBar.style";
import ynalogo from "../../assets/ynalogo.png"
import Modal from "./modal";

function NavBar() {
    let activeStyle = {
        background: "white",
    };

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <NavStyle>
            <section>
                <div className="navcontainer">
                    <Link className="linkstyle" to="/">
                        <img src={ynalogo} alt="yna logo" />
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
                    <div className="mobileLinks">
                        <a href="#menu" onClick={handleOpenModal}>
                            {/* //svg icon rounded hamburger menu with color #B49F55*/}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="39"
                                height="28"
                                viewBox="0 0 29 28"
                                fill="none"
                                stroke="#a08626"
                                stroke-width="6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-menu"
                            >
                                <line x1="1" y1="4" x2="29" y2="4"></line>
                                <line x1="1" y1="13" x2="29" y2="13"></line>
                                <line x1="1" y1="22" x2="29" y2="22"></line>
                            </svg>
                        </a>
                    </div>
                    <Modal open={modalOpen} onClose={handleCloseModal} />
                </div>
            </section>
        </NavStyle>
    );
}

export default NavBar;
