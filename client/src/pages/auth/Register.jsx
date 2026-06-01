import RegisterCard from "../../components/auth/RegisterCard";
import Footer from "../../components/footer";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <div className="flex-grow flex justify-center items-center px-4 py-10">
        <RegisterCard />
      </div>

      <Footer />
    </div>
  );
};

export default Register;