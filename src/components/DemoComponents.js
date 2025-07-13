import React from 'react';

export default function DemoComponent(props) {
  console.log(props);
  return (
    <div className="container">
      <h2>
        Hi my name : {props.name}
        and my country: {props.country}
      </h2>
    </div>
  );
}
