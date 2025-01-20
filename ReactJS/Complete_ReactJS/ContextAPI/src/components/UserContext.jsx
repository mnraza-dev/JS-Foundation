import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
  });

  const updateUser = (newName) => {
    setUser({
      name: newUpdatedName,
      age: user.age,
    });
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
