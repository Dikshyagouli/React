import React from 'react';
import { useParams } from "react-router-dom";

const UserDetails = () => {
      const params = useParams();
  const { id, username, age } = params; //destructuring
  console.log("name", username);

  return (
    <div className='container mt-4'>
      <h4>This is user detail page</h4>
      <p>user id: {id}</p>
      <p>user name: {username}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default UserDetails;
