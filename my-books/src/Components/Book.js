import React, {Component} from 'react';
import '../CSS/Book.css';
import PropTypes from 'prop-types';

class Book extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div className="col-3">
                <div className="card card-view">
                    <div className="card-body">
                        <div className="spine">
                            <div className="spine-text">
                                <h4 className="card-title">
                                    {this.props.title}
                                </h4>
                                {this.props.author}
                            </div>
                        </div>
                        <div className="buttons">
                            {this.props.year}<br/>
                            <button className="btn btn-success edit-button">Edit</button><br/>
                            <button className="btn btn-warning delete-button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Book.defaultProps = {
    title: "Title",
    author: "Author",
    year: "Year",
    genre: "Genre"
};

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string
}

export default Book;