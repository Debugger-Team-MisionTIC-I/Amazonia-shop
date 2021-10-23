import { Select} from "antd";

//Styles
import "./listventas.css";

const { Option } = Select;

const Disponibilidad = () => {
    return (
            <Select className="disPon" placeholder="Disponibiidad">
                <Option value="Process">En proceso</Option>
                <Option value="Cancel">Cancelada</Option>
                <Option value="Clear">Realizada</Option>
            </Select>
        
    );
};

export const columns = [
    {
        name: "ID",
        selector: (row) => row.id,
        sortable: true
    },
    {
        name: "Cliente",
        selector: (row) => row.cliente,
        sortable: true
    },
    {
        name: "ID Servicio",
        selector: (row) => row.servicio,
        sortable: true
    },
    {
        name: "Correo",
        selector: (row) => row.correo,
        sortable: true
    },
    {
        name: "Tarifa",
        selector: (row) => row.tarifa,
        sortable: true
    },
    {
        name: "Fecha-Venta",
        selector: (row) => row.tarifa,
        sortable: true
    },
    {
        name: "Fecha-Programada",
        selector: (row) => row.tarifa,
        sortable: true
    },
    {
        name: "Direccion-Servicio",
        selector: (row) => row.tarifa,
        sortable: true
    },
    {
        name: "Horas",
        selector: (row) => row.tarifa,
        sortable: true
    },
    {
        name: "Estado",
        selector: (row) => row.estado,
        sortable: true,
        grow: 2
    },
    {
        name: "Total",
        selector: (row) => row.tarifa,
        sortable: true
    },
    
];

var N = 200;

export const tableData = [
    {
        id: N=N+1,
        cliente: "Pedro",
        servicio: "Jardinero",
        correo: "pedrofake@gmail.com",
        estado: <Disponibilidad/>,
        tarifa: "100.000"
    },
    {
        id: N=N+1,
        cliente: "Juan",
        servicio: "Mecanico",
        correo: "juanfake@gmail.com",
        estado: <Disponibilidad/>,
        tarifa: "200.000",
    },
    {
        id: N=N+1,
        cliente: "Luis",
        servicio: "Camarografo",
        correo: "luisfake@gmail.com",
        estado: <Disponibilidad/>,
        tarifa: "300.000"
    },
    { 
        id: N=N+1,
        cliente: "Carlos",
        servicio: "Tutor",
        correo: "carlosfake@gmail.com",
        estado: <Disponibilidad/>,
        tarifa: "200.000"
    },
    {
        id: N=N+1,
        cliente: "Marco",
        servicio: "Entrenador",
        correo: "marcofake@gmail.com",
        estado: <Disponibilidad/>,
        tarifa: "350.000"
    }
];
