import React from "react";
import { CreateAccount } from "./CreateAccount"; 
import Nav from "../components/Nav"; 

const CreateAccountPage: React.FC = () => {
  return (
    <div>
      <Nav /> 
      <CreateAccount /> 
    </div>
  );
};

export default CreateAccountPage;
