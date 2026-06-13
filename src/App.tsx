import data from "../src/data/dummyData.json";
import DashboardStats from "./components/DashboardStats";
import EmployeeGrid from "./components/EmployeeGrid";

import { useEmployees } from "./hooks/useEmployees";
import type { EmployeeData } from "./types/EmployeeType";

const employeeData = data as EmployeeData;

function App() {
  const { employees, stats, departmentData } = useEmployees(
    employeeData.employees,
  );
  const maxDepartmentCount = Math.max(
    ...departmentData.map((department) => department.value),
  );

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Employee Management</p>
          <h1>Workforce Dashboard</h1>
        </div>
        <span className="status-pill">{stats.activeEmployees} active</span>
      </header>

      <DashboardStats stats={stats} />

      <section className="department-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Teams</p>
            <h2>Department Breakdown</h2>
          </div>
          <span>{departmentData.length} departments</span>
        </div>

        <div className="department-list">
          {departmentData.map((department) => (
            <div className="department-row" key={department.name}>
              <div className="department-meta">
                <span>{department.name}</span>
                <strong>{department.value}</strong>
              </div>

              <div className="department-track">
                <div
                  className="department-fill"
                  style={{
                    width: `${(department.value / maxDepartmentCount) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <EmployeeGrid data={employees} />
    </main>
  );
}

export default App;
