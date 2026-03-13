import GaugeChart from "./GaugeChart";

function getBudgetColor(value) {
  const num = parseInt(value.replace("$",""));

  if (num === 0) return "#16a34a"; // green
  if (num <= 500) return "#d97706"; // yellow/amber
  return "#dc2626"; // red
}

function CloudCard({ data }) {
  return (
    <div className="cloud-card">
      <div className="card-header">
        <h3>{data.project}</h3>
        <span className="env">{data.environment}</span>
      </div>

      <div className="owner">
        Owner: {data.owner}
      </div>

      <div className="cpu-title">
        CPU Usage - Avg Month to Date
      </div>

      <GaugeChart value={data.cpuUsage} />

      <div className="metrics">
        <div className="metric">
          <span>Active CPUs</span>
          <strong>{data.activeCpus}</strong>
        </div>

        <div className="metric">
          <span>VM Instances</span>
          <strong>{data.vmInstances}</strong>
        </div>

        <div className="metric">
          <span>K8 Instances</span>
          <strong>{data.k8Instances}</strong>
        </div>
      </div>

      <div className="disk">
        Disk Information ▼
      </div>

      <div
        className="budget"
        style={{ color: getBudgetColor(data.overBudget) }}
      >
        Overbudget Projection {data.overBudget}
      </div>
    </div>
  );
}

export default CloudCard;
