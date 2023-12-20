import { useState } from "react";

const useToken = () => {
  const tokenString = localStorage.getItem("password");
  const tokenString2 = localStorage.getItem("text");
  const userToken = JSON.parse(tokenString);
  const userToken2 = JSON.parse(tokenString2);

  const [token, setToken] = useState(userToken?.token || '');
  const [tokene, setTokene] = useState(userToken2?.tokene || '');

  const handlePasswordChange = (event) => {
    setToken(event.target.value);
  };

  const handleTextChange = (event) => {
    setTokene(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('Token:', handlePasswordChange);
    localStorage.setItem('Tokene:', handleTextChange);
  };

  return {
    token,
    tokene,
    handlePasswordChange,
    handleTextChange,
    handleSubmit,
  };
};

export default useToken;

