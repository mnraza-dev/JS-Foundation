import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formData } from "../features/user/userSlice.js";
export default function Form() {
  const userData = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formData(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form 😍</h1>
      <label htmlFor="name">Name</label>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        placeholder="Name"
        id="name"
      />
      <label htmlFor="email">Email</label>
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="email"
        placeholder="Email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="Password"
        id="password"
      />
      <button type="submit">Submit</button>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </form>
  );
}
