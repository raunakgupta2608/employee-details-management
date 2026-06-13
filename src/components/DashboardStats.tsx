type DashboardStatsProps = {
  stats: {
    totalEmployees: number;
    activeEmployees: number;
    avgSalary: number;
    avgPerformance: string;
  };
};

function DashboardStats({ stats }: DashboardStatsProps) {
  const { totalEmployees, activeEmployees, avgSalary, avgPerformance } = stats;

  return (
    <section className="stats-grid">
      <Card title="Employees" value={totalEmployees} />
      <Card title="Active" value={activeEmployees} />
      <Card title="Avg Salary" value={`$${avgSalary.toLocaleString()}`} />
      <Card title="Avg Performance" value={avgPerformance} />
    </section>
  );
}

type CardProps = {
  title: string;
  value: number | string;
};

function Card({ title, value }: CardProps) {
  return (
    <article className="stat-card">
      <h4>{title}</h4>
      <h2>{value}</h2>
    </article>
  );
}

export default DashboardStats;
