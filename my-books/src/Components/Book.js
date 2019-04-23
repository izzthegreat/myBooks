import React, {Component} from 'react';
import '../CSS/Book.css';
import PropTypes from 'prop-types';

const GENERIC_NOTE_TITLE = "New Note Title", GENERIC_NOTE_AUTHOR = "New Note Body";
const GENERIC_NOTE_YEAR = "New", GENERIC_NOTE_GENRE = "";
class Book extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.state = {
            title: GENERIC_NOTE_TITLE,
            body: GENERIC_NOTE_AUTHOR,
            editMode: false
        }
    }

    handleEdit(){
        this.setState({
            editMode: true
        })
    }

    handleSave(){
        this.setState({
            title: this.refs.titleContent.value,
            body: this.refs.bodyContent.value,
            editMode: false
        })
    }
    handleDelete(){
        this.props.deleteHandler(this.props.id);
    }
    render(){
        let titleElement, authorElement, yearElement, genreElement, buttonArea;
        if(this.state.editMode){
            titleElement = <textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title}/>
            authorElement = <textarea ref="authorContent" className="author-textarea" defaultValue={this.state.author}/>
            yearElement = <textarea ref="yearContent" className="year-textarea" defaultValue={this.state.year}/>
            genreElement = <textarea ref="genreContent" className="genre-textarea" defaultValue={this.state.genre}/>
            buttonArea = <div><button className="btn btn-info" onClick={this.handleSave.bind(this)}>Save</button></div>
        } else {
            titleElement = <h5>{this.state.title}</h5>
            authorElement = <h5>{this.state.author}</h5>
            yearElement = <h5>{this.state.year}</h5>
            genreElement = <h5>{this.state.genre}</h5>
            buttonArea = <div><button className="btn btn-warning" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>

        }

        return (
            <div className="col-sm-3">
            <div className="card card-view">
            <div className="card-body">
            <h5 className="card-title">
            {titleElement}
            {authorElement}
            {yearElement}
            {genreElement}
            {buttonArea}
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