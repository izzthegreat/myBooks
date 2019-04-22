import React, {Component} from 'react';
import '../CSS/Book.css';
import PropTypes from 'prop-types';

class Book extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div className="col-sm-3">
            <div className="card card-view">
            <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.author}</p>
            <p>{this.props.year}</p>
            <p>{this.props.genre}</p>
            <div><button className="btn btn-success edit-button">Edit</button> </div>
            <div><button className="btn btn-warning delete-button">Delete</button> </div>
            </div>
            </div>
            </div>
        )
    }
}

Book.defaultProps = {
    title: "Title:",
    author: "Author:",
    year: "Year:",
    genre: "Genre:"
};

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string
}

export default Book;