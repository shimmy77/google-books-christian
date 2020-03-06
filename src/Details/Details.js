import React from 'react';
import './Details.css'

class Details extends React.Component {
    render() {
        const sale = this.props.book.saleInfo.listPrice
            ? <p>Cost: ${this.props.book.saleInfo.listPrice.amount}</p>
            : <p>Not For Sale</p>
        const search = this.props.book.searchInfo
            ? <p>{this.props.book.searchInfo.textSnippet}</p>
            : ""
        return (
            <li className="Book" key={this.props.id}>
                    <h2>{this.props.book.volumeInfo.title}</h2>
                    <div className="book_info">
                        <div className="book_img">
                            <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"></img>
                        </div>
                        <div className="book_description">
                            <p>Author: {this.props.book.volumeInfo.authors[0]}</p>
                            {sale}
                            {search}
                            <p>{this.props.book.volumeInfo.categories[0]}</p>
                            <p>{this.props.book.volumeInfo.description}</p>
                            <p>{this.props.book.volumeInfo.previewLink}</p>

                        </div>
                    </div>
                    <hr />
                </li>
        )
    }
}

export default Details