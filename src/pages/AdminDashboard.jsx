import { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-title">Admin Panel</h2>

        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>

        <button
          className={activeTab === "books" ? "active" : ""}
          onClick={() => setActiveTab("books")}
        >
          Books
        </button>

        <button
          className={activeTab === "borrowings" ? "active" : ""}
          onClick={() => setActiveTab("borrowings")}
        >
          Borrowings
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        {activeTab === "overview" && <Overview />}
        {activeTab === "users" && <Users />}
        {activeTab === "books" && <Books />}
        {activeTab === "borrowings" && <Borrowings />}
      </main>
    </div>
  );
}

/* ----- Dummy sections (logic focus) ----- */

function Overview() {
  return (
    <>
      <h1>Library Overview</h1>
      <p>Total users, books, and active borrowings.</p>
    </>
  );
}

function Users() {
  return <h1>User Management</h1>;
}

function Books() {
  return <h1>Book Management</h1>;
}

function Borrowings() {
  return <h1>Borrowing Records</h1>;
}

export default AdminDashboard;
