import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();

  return (
    <div>
      <h1>The Student ID of user is {id}</h1>
    </div>
  );
}

export default Profile;
