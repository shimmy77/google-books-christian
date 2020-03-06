import React from 'react';
import './BookList.css';
import Books from '../Books/Books';


class BookList extends React.Component {    
    render() { 
        console.log('render BookList')              
        return (
            <section className="BookList">
                <ul>
                    <Books 
                        books={this.props.books}
                        bookTypeFilter={this.props.bookTypeFilter} 
                        printTypeFilter={this.props.printTypeFilter}
                        selected={this.props.selected} 
                        handleClick={this.props.handleClick}                                                                     
                    />
                </ul>
            </section>
        )
    }
}

export default BookList;