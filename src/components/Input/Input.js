import { Component } from 'react';
import "./Input.css"

class Input extends Component {
  inputType;
  placeHolderText;

  render() {
    return <input
        inputMode={this.props.inputMode}
        placeholder={this.props.placeHolderText}
        type={this.props.inputType}
    />;
  }
}

export default Input;
