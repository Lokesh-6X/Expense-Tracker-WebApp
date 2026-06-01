import React, { useState } from "react";
import LoginCard from "../../components/auth/LoginCard";
import AlertCard from "../../components/ui/AlertCard";

const Login = () => {

  const [alert, setAlert] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AlertCard 
        message={alert}
        onClose={() => setAlert(null)}/>
      <LoginCard setAlert={setAlert}/>
    </div>
  );
};

export default Login;