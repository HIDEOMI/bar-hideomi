import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Login successful!");
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
};

export default Login;
