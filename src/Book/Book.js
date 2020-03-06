import React from 'react';
import './Book.css';

class Book extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {        
        console.log('render Book')
        const sale = this.props.book.saleInfo.listPrice
            ? <p>Cost: ${this.props.book.saleInfo.listPrice.amount}</p>
            : <p>Not For Sale</p>
        const search = this.props.book.searchInfo
            ? <p>{this.props.book.searchInfo.textSnippet}</p>
            : ""
        const auth = this.props.book.volumeInfo.authors
            ? <p>Author: {this.props.book.volumeInfo.authors[0]}</p>
            : <p>Magaine Publication</p>
        const title = this.props.book.volumeInfo.title
        return (
            <li className="Book" key={this.props.id} onClick={e => this.props.handleClick(title)}>
                <h2>{this.props.book.volumeInfo.title}</h2>
                <div className="book_info">
                    <div className="book_img">
                        <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="book cover"></img>
                    </div>
                    <div className="book_description">
                        {auth}
                        {sale}
                        {search}
                    </div>
                </div>
                <hr />
            </li>
        )
    }
}

Book.defaultProps = {
    id: 0,
    book: {
        volumeInfo: {
            title: '',
            imageLinks: {
                thumbnail: ''
            },
            authors: []
        },
        saleInfo: {}           
        
    }
}

export default Book;