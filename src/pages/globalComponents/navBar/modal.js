import React from "react";
import styled from "styled-components";
import ynalogo from "../../../assets/ynalogo.png"
import { NavLink } from "react-router-dom";

const ModalOverlay = styled.div`
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
    background-color: #fbd542;
    margin: 0;
    padding: 0;
    border: 1px solid #888;
    width: 100%;
    height: 18rem;
    position: absolute;
    top: ${({ open }) => (open ? "0" : "-100%")};
    transition: top 0.3s ease-out;
`;

const CloseButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fbd542;
    padding: 5px;
    margin-top: 5px;
`;
const CloseButtonContainer = styled.div`
    background-color: #fbd542;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
`;

const CloseButton = styled.span`
    position: absolute;
    top: 0;
    right: 21px;
    color: black;
    font-size: 60px;
    line-height: 25px;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;

const TextPlaceholder = styled.span`
    font-size: 15px;
    color: black;
    font-weight: bold;
    padding: 3px 0 0 15px;
`;

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuItem = styled.li`
    margin: 6px 0;
    width: 100%;
    .link {
        display: block;
        font-weight: bold;
        font-size: 18px;
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Modal = ({ open, onClose }) => {
    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    let activeStyle = {
        background: "white",
    };

    return (
        <ModalOverlay open={open} onClick={handleClickOutside}>
            <ModalContent open={open}>
                <CloseButtonRow>
                    <TextPlaceholder> <img src={ynalogo} alt="yna logo" /></TextPlaceholder>
                    <CloseButtonContainer onClick={onClose}>
                        <CloseButton>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="39"
                                height="25"
                                viewBox="0 0 29 29"
                                fill="none"
                                stroke="#a08626"
                                stroke-width="6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-menu"
                            >
                                <line x1="1" y1="25" x2="29" y2="4"></line>

                                <line x1="1" y1="4" x2="29" y2="25"></line>
                            </svg>
                        </CloseButton>
                    </CloseButtonContainer>
                </CloseButtonRow>
                <MenuList>
                    <MenuItem>
                        <NavLink
                            onClick={onClose}
                            className="link"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/"
                            end
                        >
                            Home
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            onClick={onClose}
                            className="link"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/about-us"
                        >
                            About
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            onClick={onClose}
                            className="link"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/members"
                        >
                            Members
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            onClick={onClose}
                            className="link"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/join-us"
                        >
                            Join
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            onClick={onClose}
                            className="link"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/contact-us"
                        >
                            Contact
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            onClick={onClose}
                            className="link"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </MenuItem>
                </MenuList>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
