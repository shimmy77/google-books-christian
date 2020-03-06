import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
    changeSelection = (value) => {
        if(value==="all") {
            this.props.handlePrintType(null);
        } else {
            this.props.handlePrintType(value);
        }
    }
    
    render() {
        return (
            <div className="FilterBar">
                <label htmlFor="FilterBar_print">Print Type:</label>
                <select onChange={e => this.changeSelection(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="FilterBar_book">Book Type:</label>
                <select>
                    <option value="no_filter">No filter</option>
                    <option value="all_ebooks">All ebooks</option>
                    <option value="paid-ebooks">Paid ebooks</option>
                    <option value="free-ebook">Free ebooks</option>
                    
                </select>
            </div>
        )
    }
}

export default FilterBar;