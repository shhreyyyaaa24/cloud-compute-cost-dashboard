import { useState } from "react";
import CloudCard from "./CloudCard";
import { cloudData } from "../data/cloudData";

const tabs = ["GCP", "AWS", "Azure"];

function Dashboard() {
  const [activeTab, setActiveTab] = useState("GCP");

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="dashboard-grid">
        {cloudData[activeTab].map((item, index) => (
          <CloudCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
