import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const handleSubmit = () => {
    updateUser(newName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
