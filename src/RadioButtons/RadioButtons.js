import { Component } from 'react';
import Button from "../components/Button/Button";
import './RadioButtons.css';

class RadioButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {currenSelection : 0}
  }

  select = (selectedIndex)=>{
    this.setState({currentSelection : selectedIndex})
  }

  setSelectedClass =(val)=>{
    if(val === this.state.currentSelection){
      return "active";
    }else{
      return "inactive";
    }
  }

  buttons = ()=>{
    let btns = [];
    for(let i=0; i<this.props.buttons.length; i++ ){
      btns.push(<Button text={this.props.buttons[i]} action={()=>this.select(i)} btnClass={this.setSelectedClass(i)} />)
    }

    return btns
  }

  render() {
    return (<div className={"radio-btns-area"}>{this.buttons()}</div>);
  }
}

export default RadioButtons;
