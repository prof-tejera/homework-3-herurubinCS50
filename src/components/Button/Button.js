import { Component } from 'react';
import './Button.css';

class Button extends Component {
  btnClass; //allow dev to add additional styling for more specificity
  constructor(props) {
    super(props);

  }


  render() {
    return <button onClick={this.props.action}
                   type={this.props.type}
                   className={ `Default-button ${this.props.btnClass}`}>{this.props.text}</button>;
  }
}

export default Button;
