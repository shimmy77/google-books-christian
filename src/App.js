import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';
import BookList from './BookList/BookList';

const url = 'https://www.googleapis.com/books/v1/volumes'
const key = 'AIzaSyCbgxwYNQS_GIb7ofgXuDwacktNVO7sh1E'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: "henry",
      bookTypeFilter: null,
      printTypeFilter: null,
      selected: null    
    }
  }
  
  componentDidMount = () => {
    console.log('component mounted')
    this.getBooks()
    // const bookFilter = this.state.bookTypeFilter
    //   ? `&filter=${this.state.bookTypeFilter}`
    //   : ""
    // const printFilter = this.state.printTypeFilter
    //   ? `&printType=${this.state.printTypeFilter}`
    //   : ""
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
  }

  getBooks = () => {
    const bookFilter = this.state.bookTypeFilter
      ? `&filter=${this.state.bookTypeFilter}`
      : ""
    const printFilter = this.state.printTypeFilter
      ? `&printType=${this.state.printTypeFilter}`
      : ""
      console.log(printFilter)
    const fetchUrl = url + '?q=' + this.state.searchTerm + bookFilter + printFilter
    
    
    fetch(fetchUrl)
      .then(response => {
        console.log(fetchUrl)
        if (response.ok) {
          return response.json()
        }
        throw new Error('Something went wrong');
      })
      .then(responseJson => {
        this.setState({
          books: responseJson.items
        })
        console.log(this.state.books)
      })  
      .catch()
  }

  changePrintType = (printTypeFilter) => {
    console.log('change print Type')
    this.setState({
      printTypeFilter
    })
  }

  searchTermChanged = (newSearchTerm) => {
    this.setState({
        searchTerm: newSearchTerm
    })
  }

  newSearch = (e) => {
    e.preventDefault();
    this.getBooks();   
  }
  
  showDetails = (selected) => {
    console.log('details')
    const showing = this.state.selected !== selected
      ? selected
      : null    
    this.setState({ selected: showing })
  }

  render() {
    console.log('rendered app')
    return (
    <main className="App">
      <Header />
      <SearchBar 
        searchTerm={this.state.searchTerm}
        handleSearch={this.newSearch}
        handleNewTerm={this.searchTermChanged}
        handleSubmit={this.newSearch}
      />
      <FilterBar 
        bookTypeFilter={this.state.bookTypeFilter} 
        printTypeFilter={this.state.printTypeFilter}
        handleFilter={this.changeFilter}
        handlePrintType={this.changePrintType}
      />
      <BookList 
        books={this.state.books}
        bookTypeFilter={this.state.bookTypeFilter} 
        printTypeFilter={this.state.printTypeFilter}
        selected={this.state.selected}
        handleClick={this.showDetails}
      /> 
    </main>
    );
  }
}


export default App;
