import React from "react";
import GoogleAuthentication from "../components/authentication/GoogleAuthentication";

const Login = () => {
  return (
    <div className="flex h-screen p-2">
      <div className="flex flex-col m-auto overflow-hidden bg-white shadow sm:rounded-lg w-96 h-48 p-5 gap-5">
        <div className="flex items-center justify-center">
          <p>Login with</p>
        </div>
        <GoogleAuthentication />
      </div>
    </div>
  );
};
export default Login;
