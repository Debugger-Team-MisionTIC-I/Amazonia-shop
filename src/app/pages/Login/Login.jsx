import React from "react";
import { Input, Button } from "antd";

// Styles
import "./login.css";

const Login = () => {
    return (
        <div className="main-container">
            <div className="login-card">
                <h1 style={{ marginTop: "3rem" }}>Login</h1>

                <div className="input-login">
                    <p>Correo de usuario:</p>
                    <Input placeholder="Correo" />
                </div>

                <div className="input-login2">
                    <p>Contraseña de usuario:</p>
                    <Input.Password placeholder="contraseña" />
                </div>

                <div className="input-login3">
                    <Button type="primary">Iniciar sesion</Button>
                </div>

                <p className="crear-cuenta">
                    ¿No tienes cuenta? <a href="/">Crear cuenta</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
