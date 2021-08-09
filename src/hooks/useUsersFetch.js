import { useState, useEffect } from "react";
import axios from "axios";

function useUsersFetch() {
  const API_URL = "http://localhost:5000";
  const [user, setUser] = useState([]);

  const fetchUser = (id, userToken, setIsLoaded, setFormData) => {
    const authStr = `Bearer ${userToken}`;
    axios
      .get(`${API_URL}/users/${id}`, { headers: { Authorization: authStr } })
      .then((response) => {
        setIsLoaded(true);
        setUser(response.data.data);
        setFormData({
          username: response.data.data.username,
          email: response.data.data.email,
          password: response.data.data.password,
          bio: response.data.data.bio,
        });        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUser = (id, userToken, formData) => {
    const authStr = `Bearer ${userToken}`;

    axios
      .put(
        `${API_URL}/users/${id}`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          bio: formData.bio,
        },
        { headers: { Authorization: authStr } })
      .then((response) => {
        setUser(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [user, fetchUser, updateUser];
}

export default useUsersFetch;
