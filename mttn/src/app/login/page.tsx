import React from "react";
import { Login } from "./Login";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const LoginPage: React.FC = () => {
  return (
    <div>
      <Nav isLoggedIn={false}/> 
      <Login /> 
      <Footer />
    </div>
  );
};

export default LoginPage;






