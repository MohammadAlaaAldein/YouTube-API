import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"

class Search extends Component {
    state = { 
        term: "Defult text"
     }

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() { 
        return (
            <div className="search-bar ul segment ">
                <form onSubmit={this.handleSubmit} className="ul form">
                    <div className="field"> 
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} type="text" name="video-search" value={this.state.term} />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Search;
