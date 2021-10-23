import React from "react";
import { Input, Button } from "antd";

// Components
import Navbar from "../Products/components/Navbar/Navbar";

import Footer from "../Products/components/Footer/Footer";
// Styles
import "./usuario.css";
import ListUsuarios from "./components/ListUsuarios/ListUsuarios";

const Usuario = () => {
    return (
        <div className="usuariosPage">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="login-card">
                <h1 style={{ marginTop: "3rem" }}>Usuario Maestro</h1>

                <div className="input-login">
                    <p>Usuario:</p>
                    <Input placeholder="Nombre" />
                </div>

                <div className="input-login2">
                    <p>ID:</p>
                    <Input placeholder="ID" />
                </div>

                <div className="input-login4">
                    <p>Tipo de Usuario:</p>
                    <select>
                        <option value="Administrador">Administrador</option>
                        <option value="Vendedor">Vendedor</option>
                        <Input placeholder="Tipo de Usuario" />
                    </select>
                </div>
                <div className="input-login5">
                    <p>Estado de usuario:</p>
                    <select>
                        <option value="pendiente">Pendiente</option>
                        <option value="Autorizado">Autorizado</option>
                        <option value="No Autorizado">No Autorizado</option>
                        <Input placeholder="Tipo de Usuario" />
                    </select>
                </div>

                <div className="input-login3">
                    <Button type="primary">GUARDAR</Button>
                </div>
                

                

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
