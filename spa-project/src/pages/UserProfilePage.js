import React from 'react';
import JasmineImage from '../images/Jasmine.jpg'; // Adjusted path

const UserProfilePage = ({ likedItems }) => {
  console.log("Liked Items on Profile: ", likedItems); // Check if liked items are passed

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Jasmine Pieterson </h2>
      <img src={JasmineImage} alt="Jasmine Pieterson" width={200} height={200}/> 
      <p><strong>Liked Items:</strong></p>
      {likedItems && likedItems.length > 0 ? (
        <ul>
          {likedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>You haven't liked any items yet.</p>
      )}
    </div>
  );
};

export default UserProfilePage;
