import { useEffect, useState } from 'react';

export default function LiveUserTable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers(); // Fetch initially

    const intervalId = setInterval(() => {
      fetchUsers(); // Refresh every 5s
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Live User Data (Refreshes every 5s)</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
