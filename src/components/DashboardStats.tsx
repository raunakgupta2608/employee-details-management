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
      <Card title="Employees" value={totalEmployees} icon={"👥"} />
      <Card title="Active" value={activeEmployees} icon={"🟢"} />
      <Card
        title="Avg Salary"
        value={`$${avgSalary.toLocaleString()}`}
        icon={"💰"}
      />
      <Card title="Avg Performance" value={avgPerformance} icon={"⭐"} />
    </section>
  );
}

type CardProps = {
  title: string;
  value: number | string;
  icon?: any;
};

function Card({ title, value, icon }: CardProps) {
  return (
    <article className="stat-card">
      <h4>
        <i>{icon}</i> {title}
      </h4>
      <h2>{value}</h2>
    </article>
  );
}

export default DashboardStats;
