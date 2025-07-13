import React, { useState } from 'react';

function FormInput() {
  const [name, setName] = useState('');
  console.log(name);

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter a name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    </form>
  );
}

export default FormInput;
