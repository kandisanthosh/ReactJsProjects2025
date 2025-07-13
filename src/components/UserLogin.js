import React, { useState } from 'react';

function UserLogin() {
  const [userAccess, setUserAccess] = useState(false); // default to false

  return (
    <div>
      <h1>UserLogin</h1>
      {userAccess ? (
        <h1>Welcome to the new project</h1>
      ) : (
        <h2>You don't have access to this project</h2>
      )}
      <button onClick={() => setUserAccess(true)}>Check the access</button>
    </div>
  );
}

export default UserLogin;
