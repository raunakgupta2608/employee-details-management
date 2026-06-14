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
    pinned: "left",
    lockPinned: true,
    cellStyle: {
      fontWeight: 700,
    },
  },

  {
    headerName: "Employee",
    valueGetter: (params) => `${params.data.firstName} ${params.data.lastName}`,
    filter: true,
  },
  {
    field: "email",
    filter: true,
  },
  {
    field: "department",
    filter: "agTextColumnFilter",
    rowGroup: true,
  },
  {
    field: "position",
    filter: true,
  },
  {
    field: "salary",
    valueFormatter: (params) => `$${params.value.toLocaleString()}`,
    filter: "agNumberColumnFilter",
  },
  {
    field: "hireDate",
    filter: true,
  },
  {
    field: "age",
    filter: "agNumberColumnFilter",
  },
  {
    field: "location",
    filter: true,
  },
  {
    field: "performanceRating",
    filter: "agNumberColumnFilter",
  },
  {
    field: "projectsCompleted",
    filter: "agNumberColumnFilter",
  },
  {
    field: "isActive",
    cellRenderer: (params: ICellRendererParams) =>
      params.value ? "Active" : "Inactive",
    filter: "agTextColumnFilter",
    valueFormatter: (params) => (params.value ? "Active" : "Inactive"),
  },
  {
    field: "skills",
    valueFormatter: (params) => params.value.join(", "),
    minWidth: 260,
    tooltipValueGetter: (params) => params.value.join(", "),
    filter: true,
  },
  {
    field: "manager",
    minWidth: 180,
    filter: true,
  },
];
