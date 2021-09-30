import { Component } from 'react';
import './Pager.css';

class Pager extends Component {
  pageItems;
  itemsPerPage;


  getPagination = ()=>{
    let bla = [];

    let pages = 0;

    let remainder = this.pageItems % this.itemsPerPage;

    if (remainder == 0){
      this.pages = this.pageItems / this.itemsPerPage;
    }else{
      this.pages = (this.pageItems - remainder) / this.itemsPerPage + 1;
    }

    for(let i=0; i < this.pages; i++){

    }

    return (<div>{{}}</div>);
  }

  render() {
    return null;
  }
}

export default Pager;
