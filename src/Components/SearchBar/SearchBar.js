import React from "react"
import "./SearchBar.css"



class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.Search = this.Search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.state ={
      term: ""
    }
  }
  Search(){
    this.props.onSearch(this.state.term)
  }
  handleTermChange(e){
    this.setState({
      term: e.target.value
    })
  }



        render(){
            

            return(
                <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton" onClick={this.Search}>SEARCH</button>
              </div>
            );


        }

}
export default SearchBar ;