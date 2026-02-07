import { useState } from "react";
import "../styles/Profile.css";

function Profile() {
  const [name,setName]=useState("");
  const [Editable,setEditable]=useState(true);
  function UpdateProfile(){
    setEditable(false)
}
  function SaveUpdate(){
    setEditable(true)
  }
  return (
    <div className="profile-page">

      {/* Top Profile Card */}
      <div className="profile-header">
        <div className="avatar">N</div>

        <div className="profile-meta">
          <h2>{name}</h2>
          <p className="email">nithinhere1980@gmail.com</p>
          <p className="joined">📅 Member since 2/4/2026</p>
        </div>

        <button className="edit-btn" onClick={UpdateProfile}>✏️ Edit Profile</button>
      </div>

      {/* Bottom Grid */}
      <div className="profile-grid">

        {/* Profile Info */}
        <div className="profile-card">
          <h3>👤 Profile Information</h3>

          <div className="info-row">
            <span>Full Name</span>
            <input type="text"  className="profile-input" placeholder="Enter Your Full Name" value={name} readOnly={Editable} onChange={(e)=>setName(e.target.value)}/> 
          </div>

        <div className="info-row">
          <span>Favorite Genre</span>
          <select className="profile-select" disabled={Editable}>
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Romance</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
          </select>
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
      {!Editable&&
      <div class="profile-save-wrapper">
        <button class="profile-save-btn" onClick={SaveUpdate} >Save Changes</button>
     </div>
      }
    </div>
  );
}


export default Profile;
