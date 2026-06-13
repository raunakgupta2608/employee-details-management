import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { columnDefs, defaultColDef } from "../utils/gridConfig";

function EmployeeGrid({ data }: any) {
  const [quickFilter, setQuickFilter] = useState("");

  return (
    <section className="grid-panel">
      <div className="grid-toolbar">
        <div>
          <p className="eyebrow">Directory</p>
          <h2>Employee Records</h2>
        </div>

        <input
          className="search-input"
          placeholder="Search employees"
          value={quickFilter}
          onChange={(e) => setQuickFilter(e.target.value)}
        />
      </div>

      <div
        className="ag-theme-quartz-dark employee-grid"
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
    </section>
  );
}

export default EmployeeGrid;
