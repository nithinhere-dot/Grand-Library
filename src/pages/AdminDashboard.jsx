
import "../styles/AdminDashboard.css";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2 className="logo">PROCORNER</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Total Books</li>
          <li>Add Books</li>
          <li>Issue Books</li>
          <li>Members</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="dashboard-main">

        <h1>Welcome to Dashboard</h1>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card yellow">Logged in users 10</div>
          <div className="stat-card red">Total Books 232</div>
          <div className="stat-card green">Members 1234</div>
          <div className="stat-card blue">Returned 5</div>
        </div>

        {/* Graph Section */}
        <div className="graph-section">
          <h3>Reports</h3>
          <div className="fake-graph"></div>
        </div>

        {/* Tables */}
        <div className="tables-section">

          <div className="table-card">
            <h3>New Members</h3>
            <ul>
              <li>Ramya Kumar</li>
              <li>Vasant Chauhan</li>
              <li>Dilip Reddy</li>
              <li>Kamal Patel</li>
            </ul>
          </div>

          <div className="table-card">
            <h3>New Books</h3>
            <ul>
              <li>Book Name 1</li>
              <li>Book Name 2</li>
              <li>Book Name 3</li>
              <li>Book Name 4</li>
            </ul>
          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;
