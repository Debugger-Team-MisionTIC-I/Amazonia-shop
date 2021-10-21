import React from "react";
import { Input, Button, Select, Space, DatePicker } from "antd";

// Styles
import "./newVenta.css";

const { Option } = Select;

const NewVenta = () => {
    return (
        <div className="mainContainer">
            <div>
                <p className="title">
                    <b>Nueva venta</b>
                </p>

                <div>
                    <p>ID de la venta:</p>
                    <Input placeholder="Nombre" />
                </div>

                <div className="productInput">
                    <p>Valor de la venta:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput">
                    <p>ID del producto:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput">
                    <p>Cantidad:</p>
                    <Input placeholder="Precio" />
                </div>

                <div className="productInput">
                    <p>Precio unitario:</p>
                    <Input placeholder="Precio" />
                </div>

                {/* <Select placeholder="¿Esta disponible?">
                        <Option value="si">Sí</Option>
                        <Option value="no">No</Option>
                    </Select> */}

                {/* Revisar */}
                <div className="productInput">
                    <p>Fecha de venta:</p>
                    {/* <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </Space>, document.getElementById('container'), */}
                    <Input placeholder="Fecha YYYY/MM/DD" />
                </div>

                <div className="productInput">
                    <p>Documento de identidad:</p>
                    {/* <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </Space>, document.getElementById('container'), */}
                    <Input placeholder="Documento de identidad" />
                </div>

                <div className="productInput">
                    <p>Cliente:</p>
                    {/* <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </Space>, document.getElementById('container'), */}
                    <Input placeholder="Cliente" />
                </div>

                <div className="productInput">
                    <p>Vendedor:</p>
                    {/* <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </Space>, document.getElementById('container'), */}
                    <Input placeholder="Vendedor" />
                </div>


                <div className="productInput">
                    <Button type="primary">Añadir venta</Button>
                </div>
            </div>
        </div>
    );
};

export default NewVenta;