import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import jwt from "jsonwebtoken";
import useUsersFetch from "./hooks/useUsersFetch";
import useFormData from "./hooks/useFormData";

export const ProfileContext = createContext();

const initialFormData = {
  username: "",
  email: "",
  password: "",
  bio: "",
};

const ProfileContextProvider = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  const idUser = jwt.decode(authToken).id;
  const [user, fetchUser, updateUser] = useUsersFetch();
  const [formData, setFormData, handleChange] = useFormData(initialFormData);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    fetchUser(idUser, authToken, setIsLoaded, setFormData);
  };

  const onSave = () => {
    updateUser(idUser, authToken, formData);
  }

  return (
    <ProfileContext.Provider
      value={{
        handleChange,
        user,
        formData,
        onSave
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;

/*
async function exists(url) {
  const result = await fetch(url, { method: 'HEAD' });
  return result.ok;
}

*/
