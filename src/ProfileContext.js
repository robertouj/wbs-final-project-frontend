import React, { createContext } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {

  return (
    <ProfileContext.Provider
    value={{}}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
