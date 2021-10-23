import React from "react";

// Components
import Navbar from "../Products/components/Navbar/Navbar";
import Footer from "../Products/components/Footer/Footer";
import NewUser from "./components/NewUser/NewUser";
import ListUsuarios from "./components/ListUsuarios/ListUsuarios";

// Styles
import "./usuario.css";


const Usuario = () => {
    return (
        <div className="usuariosPage">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="login-card1">
                <NewUser/>
            </div>

            <div className="ListUsuarios">
                <ListUsuarios />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>






    );
};

export default Usuario;
