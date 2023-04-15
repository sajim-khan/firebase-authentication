import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
    //console.log("google sign in");
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleGoogleSignOut}>sign out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in</button>
      )}

      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
        </div>
      )}
    </div>
  );
};

export default Login;
