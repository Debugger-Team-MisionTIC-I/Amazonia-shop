import React from "react";
import { Input, Button, Select } from "antd";

// Styles
import "./newProduct.css";

const { Option } = Select;

const NewProduct = () => {
    return (
        <div className="mainContainer">
            <div>
                <p className="title">
                    <b>Nuevo producto</b>
                </p>

                <div>
                    <p>Nombre del producto:</p>
                    <Input placeholder="Nombre" />
                </div>

                <div className="productInput">
                    <p>Precio del producto:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput">
                    <p>Descripción del producto:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput">
                    <p>Cantidad:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput">
                    <p>Disponibilidad</p>
                    <Select placeholder="¿Esta disponible?">
                        <Option value="si">Sí</Option>
                        <Option value="no">No</Option>
                    </Select>
                </div>

                <div className="productInput">
                    <Button type="primary">Añadir a la tienda</Button>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
