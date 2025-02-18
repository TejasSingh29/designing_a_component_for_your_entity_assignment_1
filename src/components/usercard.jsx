import React from "react";
// import "./components/Usercard.css"; // Ensure you have a CSS file for styling

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, City, Country";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">📧 {email}</p>
      <p className="user-phone">📞 {phone}</p>
      <p className="user-address">📍 {address}</p>
    </div>
  );
};

export default Usercard;
