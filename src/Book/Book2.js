import React from 'react';
import './Book.css';

class Book extends React.Component {
    render() {
        
        return (
            <li className="Book" key={this.props.id}>
                <h2>{this.props.book.volumeInfo.title}</h2>
                <div className="book_info">
                    <div className="book_img">
                        <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="book cover"></img>
                    </div>
                    <div className="book_description">
                        <p>Author: {this.props.book.volumeInfo.authors[0]}</p>
                        {sale}
                        {search}
                    </div>
                </div>
                <hr />
            </li>
        )
    }
}

export default Book;