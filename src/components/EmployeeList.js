import React from 'react';
import Employee from './Employee';

function EmployeeList() {
  const employeeList = [
    {
      id: '1',
      name: 'Santhosh',
      age: '23',
      country: 'India',
    },
    {
      id: '2',
      name: 'Sathish',
      age: '25',
      country: 'India',
    },
    {
      id: '3',
      name: 'Priya',
      age: '28',
      country: 'India',
    },
    {
      id: '4',
      name: 'Rahul',
      age: '30',
      country: 'India',
    },
    {
      id: '5',
      name: 'Divya',
      age: '22',
      country: 'India',
    },
    {
      id: '6',
      name: 'Karthik',
      age: '26',
      country: 'India',
    },
    {
      id: '7',
      name: 'Meena',
      age: '24',
      country: 'India',
    },
    {
      id: '8',
      name: 'Arun',
      age: '29',
      country: 'India',
    },
    {
      id: '9',
      name: 'Sneha',
      age: '27',
      country: 'India',
    },
    {
      id: '10',
      name: 'Vikram',
      age: '31',
      country: 'India',
    },
  ];

  return (
    <div>
      <h2>Employees List:</h2>
      <Employee employeeList={employeeList} />
    </div>
  );
}

export default EmployeeList;
