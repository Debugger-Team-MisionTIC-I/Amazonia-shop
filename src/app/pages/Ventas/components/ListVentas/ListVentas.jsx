import React from "react";
import DataTable from "react-data-table-component";


// Table settings
import { columns, tableData } from "./table";

const SpanishTable = {
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

const ListVentas = () => {
    return (
        <div className="tableMainContainer">
            <p className="titleTable">
                <b>Servicios solicitados</b>
            </p>

            <DataTable
                title="Servicios"
                columns={columns}
                data={tableData}
                responsive={true}
                highlightOnHover={true}
                striped={true}
                fixedHeader
                fixedHeaderScrollHeight="600px"
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
                paginationComponentOptions={SpanishTable}
                // onChangePage={(page) => onChangePage(page)}
            />
        </div>
    );
};


export default ListVentas;
