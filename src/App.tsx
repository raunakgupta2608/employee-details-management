import data from "../src/data/dummyData.json";
import DashboardStats from "./components/DashboardStats";
import EmployeeGrid from "./components/EmployeeGrid";

import { useEmployees } from "./hooks/useEmployees";

function App() {
  const { employees, stats, departmentData } = useEmployees(data.employees);
  const maxDepartmentCount = Math.max(
    ...departmentData.map((department) => department.value),
  );

  return (
    <>
      <DashboardStats stats={stats} />

      <section style={{ marginTop: 24 }}>
        <h3>Departments</h3>

        <div
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          {departmentData.map((department) => (
            <div key={department.name}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span>{department.name}</span>
                <strong>{department.value}</strong>
              </div>

              <div
                style={{
                  height: 8,
                  background: "#e5e7eb",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${(department.value / maxDepartmentCount) * 100}%`,
                    height: "100%",
                    background: "#2563eb",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <EmployeeGrid data={employees} />
    </>
  );
}

export default App;
