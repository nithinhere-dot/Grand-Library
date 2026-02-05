import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      {/* Top Profile Card */}
      <div className="profile-header">
        <div className="avatar">N</div>

        <div className="profile-meta">
          <h2>Nithin Kumar M</h2>
          <p className="email">nithinhere1980@gmail.com</p>
          <p className="joined">📅 Member since 2/4/2026</p>
        </div>

        <button className="edit-btn">✏️ Edit Profile</button>
      </div>

      {/* Bottom Grid */}
      <div className="profile-grid">

        {/* Profile Info */}
        <div className="profile-card">
          <h3>👤 Profile Information</h3>

          <div className="info-row">
            <span>Full Name</span>
            <p>Nithin Kumar M</p>
          </div>

          <div className="info-row">
            <span>Favorite Genre</span>
            <p>Fantasy</p>
          </div>
        </div>

        {/* Reading Stats */}
        <div className="profile-card">
          <h3>📚 Reading Statistics</h3>

          <div className="stats">
            <div className="stat-box light">
              <h2>0</h2>
              <span>Books Read</span>
            </div>

            <div className="stat-box dark">
              <h2>0</h2>
              <span>Currently Borrowed</span>
            </div>
          </div>

          <div className="info-note">
            Visit our library to borrow books and track your reading journey!
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
