import React, { Component } from 'react'
class SearchBar extends Component{
  handleUpdate=(events)=>{
    this.props.searchFunction(event.target.value);;

  }
  render(){
    return(
      <input type="text" className="form-controm form-search"
      onUpdate={this.handleUpdate}/>
      );
  }

}

export default SearchBar;
