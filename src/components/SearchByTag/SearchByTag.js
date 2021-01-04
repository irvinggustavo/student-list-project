import React, { Component } from "react";

class SearchByTag extends Component{
    render() {
        return(
            <>
            <input
                className="searchBar"
                type="text"
                name="searchByTagr"
                placeholder="Search by Tag"
            />
            </>
        )
    }
};

export default SearchByTag;