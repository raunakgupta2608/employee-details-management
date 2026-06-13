import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { columnDefs, defaultColDef } from "../utils/gridConfig";

export default function EmployeeGrid({ data }: any) {
  const [quickFilter, setQuickFilter] = useState("");

  return (
    <>
      <input
        placeholder="Search..."
        value={quickFilter}
        onChange={(e) => setQuickFilter(e.target.value)}
      />

      <div
        className="ag-theme-quartz"
        style={{
          height: 600,
          marginTop: 20,
        }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          quickFilterText={quickFilter}
          pagination
          paginationPageSize={10}
          animateRows
          enableCellTextSelection
          rowSelection={{
            mode: "multiRow",
          }}
          modules={[ClientSideRowModelModule]}
        />
      </div>
    </>
  );
}
