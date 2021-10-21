export const columns = [
    {
        name: "Nombre",
        selector: (row) => row.nombre,
        sortable: true
    },
    {
        name: "Precio",
        selector: (row) => row.precio,
        sortable: true
    },
    {
        name: "Descripcion",
        selector: (row) => row.descripcion,
        sortable: true
    },
    {
        name: "Cantidad",
        selector: (row) => row.cantidad,
        sortable: true
    },
    {
        name: "Estado",
        selector: (row) => row.disponible,
        sortable: true
    }
];

export const tableData = [
    {
        nombre: "Camisa",
        precio: 120,
        descripcion: "Des...",
        cantidad: 24,
        disponible: "No"
    },
    {
        nombre: "Corbata",
        precio: 20,
        descripcion: "Des...",
        cantidad: 45,
        disponible: "No"
    },
    {
        nombre: "Zapatos",
        precio: 460,
        descripcion: "Des...",
        cantidad: 1,
        disponible: "Si"
    },
    { nombre: "Gafas", precio: 753, descripcion: "Des...", cantidad: 12, disponible: "No" },
    {
        nombre: "Pantalon",
        precio: 830,
        descripcion: "Des...",
        cantidad: 2,
        disponible: "Si"
    }
];
