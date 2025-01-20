import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  return <div>UpdateUser</div>;
};

export default UpdateUser;
