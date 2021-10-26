import React from "react";
import { UserOutlined } from "@ant-design/icons";

// Styles
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <p className="titleNavbar">
                <b>AMAZONIA SHOP</b>
            </p>

            <div className="userIcon">
                <UserOutlined />
            </div>
        </div>
    );
};

export default Navbar;
