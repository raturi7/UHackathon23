import React from "react";
import { Input, Spacer, Button } from "@nextui-org/react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container pt-5 py-5 text-white">
      <div className="pt-5 login_form text-white flex flex-col">
        <Input clearable bordered labelPlaceholder="Name" initialValue="NextUI" />
        <Spacer y={2.5} />
        <Input.Password clearable bordered labelPlaceholder="Password" initialValue="Password" />
        <Spacer y={2.5} />
        <Button auto>Submit</Button>
      </div>
    </div>
  );
};

export default Login;
