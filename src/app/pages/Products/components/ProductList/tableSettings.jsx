
export const columns = [
    {
        name: "ID",
        selector: (row) => row.id,
        sortable: true
    },
    {
        name: "Nombre",
        selector: (row) => row.nombre,
        sortable: true
    },
    {
        name: "Servicio",
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
    }
];

var N = 200;

export const tableData = [
    {
        id: N=N+1,
        nombre: "Pedro",
        servicio: "Jardinero",
        correo: "pedrofake@gmail.com",
        tarifa: "100.000",
    },
    {
        id: N=N+1,
        nombre: "Juan",
        servicio: "Mecanico",
        correo: "juanfake@gmail.com",
        tarifa: "200.000",
    },
    {
        id: N=N+1,
        nombre: "Luis",
        servicio: "Camarografo",
        correo: "luisfake@gmail.com",
        tarifa: "300.000"
    },
    { 
        id: N=N+1,
        nombre: "Carlos",
        servicio: "Tutor",
        correo: "carlosfake@gmail.com",
        tarifa: "200.000"
    },
    {
        id: N=N+1,
        nombre: "Marco",
        servicio: "Entrenador",
        correo: "marcofake@gmail.com",
        tarifa: "350.000"
    }
];
