import React from "react";

export default function Form() {
  return (
    <form>
      <h1>Form 😍</h1>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
