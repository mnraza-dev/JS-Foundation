import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formData } from "../features/user/userSlice.js";

export default function Form() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.value || []);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.password) {
      dispatch(formData(user));
      setUser({ name: "", email: "", password: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form 😍</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {Array.isArray(userData) && userData.length > 0 && (
        <table
          style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          border="1"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
