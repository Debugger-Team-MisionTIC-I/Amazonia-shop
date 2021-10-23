import React from "react";
import { Input, Button} from "antd";

// Styles
import "./newProduct.css";


const NewProduct = () => {
    return (
        <div className="mainContainer">
            <div>
                <p className="title">
                    <b>Agregar servicio</b>
                </p>

                <div>
                    <p>Nombre Completo:</p>
                    <Input placeholder="Nombre" />
                </div>

                <div className="productInput">
                    <p>Servicio:</p>
                    <Input placeholder="Servicio" />
                </div>

                <div className="productInput">
                    <p>Correo Electronico:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput">
                    <p>Tarifa por hora:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput1">
                    <Button type="primary">Añadir servicio</Button>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
