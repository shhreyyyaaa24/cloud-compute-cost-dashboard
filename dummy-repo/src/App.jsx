import Dashboard from "./components/Dashboard";
import NoticeBanner from "./components/NoticeBanner";

function App() {
  return (
    <div className="main-container">
      <NoticeBanner />

      <h1 className="dashboard-title">
        Cloud Cost Control Dashboard
      </h1>

      <Dashboard />
    </div>
  );
}

export default App;
