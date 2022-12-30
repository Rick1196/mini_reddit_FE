import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
const UseSessionListener = () => {
  const [session, setSession] = useState({ data: null, loading: true });
  useEffect(() => {
    const idAuthListener = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setSession({ loading: false, data: user });
      } else {
        // User is signed out
        setSession({ loading: false, data: null });
      }
    });
    return () => idAuthListener();
  }, []);
  return [session];
};

export default UseSessionListener;
