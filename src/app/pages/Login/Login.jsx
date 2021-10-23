import React from "react";
import { Input, Button, Checkbox} from "antd";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

// Styles
import "./login.css";

const Login = () => {
    return (
        <div className="main-container">
            <div className="login-card">
                <h1 style={{ marginTop: "3rem" }}>Login</h1>

                <div className="input-login">
                    <p>Correo de usuario:</p>
                    <Input placeholder="Correo" prefix={<UserOutlined />} />
                </div>

                <div className="input-login2">
                    <p>Contraseña de usuario:</p>
                    <Input.Password placeholder="Contraseña" 
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                </div>

                <div className="Check">
                    <Checkbox>Recuerdame</Checkbox>
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
