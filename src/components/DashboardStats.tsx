type DashboardStatsProps = {
  stats: {
    totalEmployees: number;
    activeEmployees: number;
    avgSalary: number;
    avgPerformance: string;
  };
};

function DashboardStats({ stats }: DashboardStatsProps) {
  const { totalEmployees, activeEmployees, avgSalary } = stats;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 16,
      }}
    >
      <Card title="Employees" value={totalEmployees} />
      <Card title="Active" value={activeEmployees} />
      <Card title="Avg Salary" value={`$${avgSalary.toLocaleString()}`} />
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div
      style={{
        padding: 20,
        background: "white",
        borderRadius: 12,
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default DashboardStats;
