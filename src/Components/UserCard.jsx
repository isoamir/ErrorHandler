import React from 'react';
import "./UserCard.css"

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>UserName: {user.username}</h3>
      <h3>Name: {user.name}</h3>
      <h3>Phone: {user.phone}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
``