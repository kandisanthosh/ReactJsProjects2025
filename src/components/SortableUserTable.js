import { useEffect, useState } from 'react';

export default function SortableUserTable() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    const sorted = [...users].sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortedUsers(sorted);
  }, [sortOrder, users]);

  return (
    <div style={{ padding: '1rem' }}>
      <label>Sort by Name: </label>
      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>

      <table border="1" cellPadding="8" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
