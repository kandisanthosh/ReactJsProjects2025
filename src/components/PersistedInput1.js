import { useEffect, useState } from 'react';

function PersistedInput1() {
  const [name, setName] = useState(() => localStorage.getItem('name') || '');

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}
export default PersistedInput1;
