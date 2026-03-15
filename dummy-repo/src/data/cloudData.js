const gcpProjects = [
  { project: "AI - Common Components", owner: "Shreya Tiwari", environment: "prod" },
  { project: "Data Analytics Pipeline", owner: "Sarah Chen", environment: "prod" },
  { project: "ML Training Infrastructure", owner: "Shreya Tiwari", environment: "prod" },
  { project: "Customer Insights Platform", owner: "Emily Rodriguez", environment: "prod" },
  { project: "Real-time Processing Engine", owner: "David Kim", environment: "prod" },
  { project: "E-commerce Backend", owner: "Jessica Liu", environment: "prod" },
  { project: "User Authentication Service", owner: "Shreya Tiwari", environment: "prod" },
  { project: "Content Delivery Network", owner: "Amanda Walsh", environment: "prod" },
  { project: "Payment Processing System", owner: "Chris Martinez", environment: "prod" },
  { project: "Inventory Management", owner: "Lisa Anderson", environment: "prod" },
  { project: "Recommendation Engine", owner: "James Wilson", environment: "prod" },
  { project: "Log Analytics Platform", owner: "Maria Garcia", environment: "prod" },
  { project: "API Gateway Services", owner: "Robert Taylor", environment: "prod" },
  { project: "Mobile Backend Services", owner: "Jennifer Brown", environment: "prod" },
  { project: "DevTest Environment", owner: "William Davis", environment: "dev" }
];

const awsProjects = [
  { project: "EKS Production Cluster", owner: "Kevin Thompson", environment: "prod" },
  { project: "Batch Processing Jobs", owner: "Shreya Tiwari", environment: "prod" },
  { project: "Lambda Functions Suite", owner: "Daniel Harris", environment: "prod" },
  { project: "RDS Database Cluster", owner: "Michelle Clark", environment: "prod" },
  { project: "ElasticSearch Platform", owner: "Brian Lewis", environment: "prod" },
  { project: "Redis Cache Layer", owner: "Shreya Tiwari", environment: "prod" },
  { project: "S3 Storage Services", owner: "Matthew Hall", environment: "prod" },
  { project: "CloudFront CDN", owner: "Sophia Allen", environment: "prod" },
  { project: "API Management", owner: "Joshua Young", environment: "prod" },
  { project: "Message Queue System", owner: "Olivia King", environment: "prod" },
  { project: "Container Registry", owner: "Shreya Tiwari", environment: "prod" },
  { project: "Aurora Database", owner: "Emma Scott", environment: "prod" },
  { project: "Machine Learning Pipeline", owner: "Ethan Green", environment: "prod" },
  { project: "IoT Core Services", owner: "Isabella Baker", environment: "prod" },
  { project: "Data Warehouse", owner: "Alexander Adams", environment: "prod" }
];

const azureProjects = [
  { project: "Web Apps Cluster", owner: "Megan Nelson", environment: "prod" },
  { project: "Database Services", owner: "Shreya Tiwari", environment: "prod" },
  { project: "AKS Production", owner: "Chloe Mitchell", environment: "prod" },
  { project: "Function Apps Platform", owner: "Nathan Perez", environment: "prod" },
  { project: "SQL Database Pool", owner: "Grace Roberts", environment: "prod" },
  { project: "Cosmos DB Cluster", owner: "Shreya Tiwari", environment: "prod" },
  { project: "Application Gateway", owner: "Lily Phillips", environment: "prod" },
  { project: "Virtual Network", owner: "Luke Campbell", environment: "prod" },
  { project: "Storage Accounts", owner: "Zoe Parker", environment: "prod" },
  { project: "CDN Profile", owner: "Owen Evans", environment: "prod" },
  { project: "DevTest Labs", owner: "Mia Edwards", environment: "dev" },
  { project: "Machine Learning Studio", owner: "Jack Collins", environment: "prod" },
  { project: "Data Factory Pipeline", owner: "Shreya Tiwari", environment: "prod" },
  { project: "Synapse Analytics", owner: "Gabriel Sanchez", environment: "prod" },
  { project: "Azure Purview", owner: "Penelope Morris", environment: "prod" }
];

const generateProjectData = (projects) => {
  return projects.map(item => {
    const random = Math.random();
    let overBudget;
    
    if (random < 0.3) {
      // 30% chance of being on budget
      overBudget = "$0";
    } else if (random < 0.6) {
      // 30% chance of being medium overbudget ($1-$500)
      overBudget = `$${Math.floor(Math.random() * 500) + 1}`;
    } else {
      // 40% chance of being high overbudget ($501-$2000)
      overBudget = `$${Math.floor(Math.random() * 1500) + 501}`;
    }
    
    return {
      ...item,
      cpuUsage: Math.floor(Math.random() * 100),
      activeCpus: Math.floor(Math.random() * 200),
      vmInstances: Math.floor(Math.random() * 50),
      k8Instances: Math.floor(Math.random() * 10),
      overBudget
    };
  });
};

export const cloudData = {
  GCP: generateProjectData(gcpProjects),
  AWS: generateProjectData(awsProjects),
  Azure: generateProjectData(azureProjects)
};
