import React from "react";
import { CreateAccount } from "./CreateAccount"; 
import Nav from "../components/Nav"; 
import Footer from "../components/Footer";

const CreateAccountPage: React.FC = () => {
  return (
    <div>
      <Nav /> 
      <CreateAccount /> 
      <Footer />
    </div>
  );
};

export default CreateAccountPage;
