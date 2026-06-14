import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  DateFilterModule,
  NumberFilterModule,
  QuickFilterModule,
  TextFilterModule,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { columnDefs, defaultColDef } from "../utils/gridConfig";
import "../App.css";

function EmployeeGrid({ data }: any) {
  return (
    <section className="grid-panel">
      <div className="grid-toolbar">
        <div>
          <p className="eyebrow">Directory</p>
          <h2>Employee Records</h2>
        </div>
      </div>

      <div className="ag-theme-quartz employee-grid">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination
          paginationPageSize={10}
          animateRows
          enableCellTextSelection
          rowSelection={{
            mode: "multiRow",
          }}
          modules={[
            ClientSideRowModelModule,
            ColumnAutoSizeModule,
            DateFilterModule,
            NumberFilterModule,
            QuickFilterModule,
            TextFilterModule,
          ]}
        />
      </div>
    </section>
  );
}

export default EmployeeGrid;
