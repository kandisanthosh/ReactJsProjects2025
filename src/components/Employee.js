import React from 'react';

function Employee({ employeeList }) {
  return (
    <div>
      <h2>Employees List (From Employee Component):</h2>

      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
