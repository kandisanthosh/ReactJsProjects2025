import React, { useState } from 'react';

function TitleComponent() {
  const [title, setTitle] = useState('ReaqctJs course begining');

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('Ultimate React Hooks Course')}>
        Change Title
      </button>
    </div>
  );
}

export default TitleComponent;
