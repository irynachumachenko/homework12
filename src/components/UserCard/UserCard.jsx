import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => (
    <div className='user-box'>
        <h2>User {user.id}:</h2>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name} - {user.company.catchPhrase}</p>
    </div>
);

export default UserCard;
