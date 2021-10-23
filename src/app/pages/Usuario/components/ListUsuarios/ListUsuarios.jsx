import React from "react";
import DataTable from "react-data-table-component";

// Styles
import "./listusuarios.css";

// Table settings
import { columns, tableData } from "./table";

const ListUsuarios = () => {
    return (
        <div className="tableMainContainer">
            <p className="titleTable">
                <b> Usuarios</b>
            </p>

            <DataTable
                title="Datos"
                columns={columns}
                data={tableData}
                responsive={true}
                highlightOnHover={true}
                striped={true}
                // selectableRows={true}
                selectableRowsVisibleOnly={true}
                pointerOnHover={true}
                // progressPending={loadingData}
                // theme='solarized'
                // clearSelectedRows={clearSelectedRows}
                // onRowClicked={handleRowClicked}
                // onSelectedRowsChange={handleRowSelected}
                // contextActions={contextActions}
                pagination={true}
                paginationServer
                // paginationTotalRows={paginationTotalRows}
                paginationRowsPerPageOptions={[10]}
                // onChangePage={(page) => onChangePage(page)}
            />
        </div>
    );
};

export default ListUsuarios;
