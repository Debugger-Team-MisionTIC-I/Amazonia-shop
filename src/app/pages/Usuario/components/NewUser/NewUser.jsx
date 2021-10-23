import React from "react";
import { Input, Button, Select} from "antd";

// Styles
import "./newUser.css";

const { Option } = Select;

const NewUser = () => {
    return (
            <div className="login-card1">
                <h1 style={{ marginTop: "3rem" }}>Usuario Maestro</h1>

                <div className="input-vent">
                    <p>Usuario:</p>
                    <Input placeholder="Nombre" />
                </div>

                <div className="input-vent">
                    <p>ID:</p>
                    <Input placeholder="ID" />
                </div>

                <div className="input-vent">
                    <p>Tipo de Usuario:</p>
                    <Select placeholder="Tipo de Usuario">
                        <Option value="Administrador">Administrador</Option>
                        <Option value="Vendedor">Vendedor</Option>
                    </Select>
                </div>

                <div className="input-vent">
                    <p>Estado de usuario:</p>
                    <Select placeholder="Tipo de Usuario">
                        <Option value="pendiente">Pendiente</Option>
                        <Option value="Autorizado">Autorizado</Option>
                        <Option value="No Autorizado">No Autorizado</Option>
                    </Select>
                </div>

                <div className="input-vent1">
                    <Button type="primary">GUARDAR</Button>
                </div>

            </div>

    );
};

export default NewUser;