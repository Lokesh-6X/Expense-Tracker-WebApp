import React, { useState } from "react";
import RegisterCard from '../../components/auth/RegisterCard';
import AlertCard from "../../components/ui/AlertCard";

const Register = () => {
  const [alert, setAlert] = useState(null);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AlertCard 
        message={alert}
        onClose={() => setAlert(null)}/>
      <RegisterCard setAlert={setAlert}/>
    </div>
  )
}

export default Register;