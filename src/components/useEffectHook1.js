import React, { useEffect, useState } from 'react';

function useEffectHook1() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <div>useEffectHook1</div>
      {user.map((uesr) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export default useEffectHook1;
