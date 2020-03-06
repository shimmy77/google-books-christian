import React from 'react';
import './Books.css';
import Book from '../Book/Book'
import Details from '../Details/Details'

class Books extends React.Component {
    render() {
        console.log('render Books')
        const books = this.props.books.map((book, i) => {            
            return   this.props.selected === book.volumeInfo.title
                ? <Details book={book} key={i} id={i}/>
                : <Book book={book} key={i} id={i} handleClick={this.props.handleClick}/>
        })
        console.log(books)
     return books;
    }
}

export default Books