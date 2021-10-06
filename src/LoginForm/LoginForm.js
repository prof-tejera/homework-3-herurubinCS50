import { Component } from 'react';
import './LoginForm.css';
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

class LoginForm extends Component {

  render() {
    return (
        <div className={"log-in-area"}>
          <Input
              placeHolderText = {"username"}
              type={"text"}
          />
          <Input
              placeHolderText={"password"}
              type={"password"}
          />
          <Button
              type={"submit"}
              text={"LOGIN"}
          />
        </div>
    )
  }
}

export default LoginForm;
