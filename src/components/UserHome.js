import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export function UserHome() {
  const [users, setUsers] = useState([]);
  const loggedInUserEmail = JSON.parse(localStorage.getItem("userInfo")).email;

  useEffect(() => {
    axios.get("http://localhost:9002/users")
      .then(res => {
        const updatedUsers = res.data.map(user => ({
          ...user,
          active: user.email === loggedInUserEmail
        }));
        setUsers(updatedUsers);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
      });
  }, [loggedInUserEmail]);


  
  return (
    <div style={{backgroundImage:`url(https://i.pinimg.com/originals/61/27/a9/6127a938effbc840092bb44fc4b56095.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
    <h1>User Information</h1>
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Email</th>
          <th className="text-center">Date of Birth</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td className="text-center">{user.name}</td>
            <td className="text-center">{user.email}</td>
            <td className="text-center">{user.bdate}</td>
            <td className="text-center">{user.active ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
}
