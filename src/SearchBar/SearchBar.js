import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    

    // handleSubmit(e) {
    //     e.preventDefault();

    //     const bookFilter = this.state.bookTypeFilter
    //         ? `&filter=${this.state.bookTypeFilter}`
    //         : ""
    //     const printFilter = this.state.printTypeFilter
    //         ? `&printType=${this.state.printTypeFilter}`
    //         : ""
    //   console.log(printFilter)
    // const fetchUrl = url + '?q=' + this.state.searchTerm + bookFilter + printFilter
    
    
    // fetch(fetchUrl)
    //   .then(response => {
    //     console.log(fetchUrl)
    //     if (response.ok) {
    //       return response.json()
    //     }
    //     throw new Error('Something went wrong');
    //   })
    //   .then(responseJson => {
    //     this.setState({
    //       books: responseJson.items
    //     })
    //     console.log(this.state.books)
    //   })  
    //   .catch()
    // }
    
    render() {
        return (
            <form className="searchBar" onSubmit={e => this.props.handleSubmit(e)}>
                <legend>Search:
                    <input id="searchBox" defaultValue="henry" onChange={e => this.props.handleNewTerm(e.target.value)}></input>
                    <button type="submit">Search</button>
                </legend> 
            </form>
        )
    }
}

export default SearchBar;