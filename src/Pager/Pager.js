import { Component } from 'react';
import Button from "../components/Button/Button";
import './Pager.css';

class Pager extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    // Don't call this.setState() here!
    // this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
    this.state={
      currentPage : 1
    }
  }

  pages = 0; //this will be calculated based on total items


  setActivePage = (value)=>{

    this.setState({
      currentPage : value
    });

    setTimeout(()=>{
      console.log("current: " + this.state.currentPage);
    }, 500)


  }

  setActiveStyle = (btnVal)=>{
    if(btnVal === this.state.currentPage){
      return "active";
    }else{
      return "inactive";
    }
  }

  getPagination = ()=>{
    let pageBtns = [];

    let remainder = this.props.pageItems % this.props.itemsPerPage;

    if (remainder === 0){
      this.pages = this.props.pageItems / this.props.itemsPerPage;
    }else{
      this.pages = (this.props.pageItems - remainder) / this.props.itemsPerPage + 1;
    }

    //check the buttons to show
    // if(this.props.maxBtnCount < this.pages){
    //   //if the dev wants 10 pages to be something like 1, 2 ... 9, 10
    //   let leftSide = 0;
    //   let rightSide = 0;
    //   let sides = 0;
    //
    //   //we will try to make the num of btns on each side evn, if not modulus to split
    //   if(this.props.maxBtnCount % 2 > 0){
    //    sides = Math.floor(this.props.maxBtnCount/2);
    //    leftSide = sides + 1;
    //    rightSide = sides;
    //   }else{
    //     leftSide = this.props.maxBtnCount/2 + 1;
    //     rightSide = this.props.maxBtnCount/2;
    //   }
    //
    //   //create buttons for the first set of pagination links
    //   for(let i=1; i < leftSide+1; i++){
    //     let label = 1;
    //     if(this.state.currentPage <= leftSide){
    //       label = i;
    //     }else if(this.state.currentPage >= leftSide){
    //       label = this.state.currentPage + i - 1;
    //     }
    //
    //     if( this.state.currentPage > this.pages - (rightSide) ){
    //       label = this.pages - (rightSide + leftSide + 1) + i;
    //     }
    //
    //
    //
    //     pageBtns.push(<Button btnClass={this.setActiveStyle(label)} action={()=>this.setActivePage(label)} key={`${i}p`} text={label} />)
    //   }
    //
    //   //this will create the dead area between buttons
    //   pageBtns.push(<div key={`${leftSide+1}p`}>. . .</div>)
    //
    //   //trailing buttons
    //   for(let j=this.pages-rightSide; j < this.pages+1; j++){
    //     pageBtns.push(<Button btnClass={this.setActiveStyle(j)} action={()=>this.setActivePage(j)} key={`${j+1}p`} text={j} />)
    //   }
    //
    //
    // }else{
    //   for(let i=0; i < this.pages; i++){
    //     pageBtns.push(<Button key={`${i}p`} text={i} />)
    //   }
    // }

    for(let i=1; i < this.pages+1; i++){
      pageBtns.push(<Button btnClass={this.setActiveStyle(i)} action={()=>this.setActivePage(i)} key={`${i}p`} text={i} />)
    }

    return ( <>{pageBtns}</> );
  }


  paginationStep = (stepDir)=>{

    switch (stepDir.toLowerCase()){
      case "next":
        if(this.state.currentPage < this.pages){
         return this.state.currentPage + 1;
        }else{
          return this.state.currentPage;
        }
        break;
      case "previous":
        if(this.state.currentPage > 1){
         return this.state.currentPage - 1
        }else{
          return this.state.currentPage;
        }

      default:
        return this.state.currentPage;

    }

  }

  render() {
    return (
        <div className={`pagination-area ${this.props.classes}`}>
          <Button action={()=>this.setActivePage(1)} text={"First"}/>
          <Button action={()=>this.setActivePage(this.paginationStep("Previous") )} text={"Previous"}/>
          {this.getPagination()}
          <Button action={()=>this.setActivePage( this.paginationStep("Next") )} text={"Next"}/>
          <Button action={()=>this.setActivePage(this.pages)} text={"Last"}/>
        </div>);
  }
}

export default Pager;
