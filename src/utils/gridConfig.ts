import { type ColDef, type ICellRendererParams } from "ag-grid-community";

export const defaultColDef: ColDef = {
  filter: true,
  floatingFilter: true,
  resizable: true,
  sortable: true,
};

export const columnDefs: ColDef[] = [
  {
    field: "id",
    maxWidth: 100,
    sortable: true,
    filter: true,
    width: 90,
  },
  {
    headerName: "Employee",
    valueGetter: (params) => `${params.data.firstName} ${params.data.lastName}`,
  },
  {
    field: "email",
  },
  {
    field: "department",
    filter: "agSetColumnFilter",
  },
  {
    field: "position",
  },
  {
    field: "salary",
    valueFormatter: (params) => `$${params.value.toLocaleString()}`,
  },
  {
    field: "hireDate",
  },
  {
    field: "age",
  },
  {
    field: "location",
  },
  {
    field: "performanceRating",
  },
  {
    field: "projectsCompleted",
  },
  {
    field: "isActive",
    cellRenderer: (params: ICellRendererParams) => (params.value ? "🟢" : "🔴"),
  },
  {
    field: "skills",
    valueFormatter: (params) => params.value.join(", "),
  },
  {
    field: "manager",
  },
];
