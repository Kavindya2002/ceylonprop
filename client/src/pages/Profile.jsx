import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <Link to="/create-listing" className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition">
        Create Listing
      </Link>
    </div>
  );
};

export default Profile;
