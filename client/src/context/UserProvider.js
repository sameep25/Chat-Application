import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const initial = {
    name: "",
    googleId: "",
    imageUrl: "",
  };

  const [person, setPerson] = useState(initial);

  return (
    <UserContext.Provider
      value={{
        person,
        setPerson,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
