import React, {Component} from 'react';
import '../CSS/Book.css';
import PropTypes from 'prop-types';

const GENERIC_NOTE_TITLE = "Title", GENERIC_NOTE_AUTHOR = "Author";
const GENERIC_NOTE_YEAR = "0000", GENERIC_NOTE_GENRE = "Genre";
class Book extends Component {
    constructor() {
        super();
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        this.state = {
            title: GENERIC_NOTE_TITLE,
            author: GENERIC_NOTE_AUTHOR,
            year: GENERIC_NOTE_YEAR,
            genre: GENERIC_NOTE_GENRE,
            editMode: false
        }
    }
    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
        }));
      }
    handleEdit(){
        this.setState({
            editMode: true
        })
    }

    handleSave(){
        this.setState({
            title: this.refs.titleContent.value,
            author: this.refs.authorContent.value,
            year: this.refs.yearContent.value,
            editMode: false
        })
    }
    handleDelete(){
        this.props.deleteHandler(this.props.id);
    }
    render(){
        let titleElement, authorElement, yearElement, buttonArea
        if(this.state.editMode){
            titleElement = <textarea ref="titleContent"  defaultValue={this.state.title}/>
            authorElement = <textarea ref="authorContent"  defaultValue={this.state.author}/>
            yearElement = <textarea ref="yearContent"  defaultValue={this.state.year}/>
            buttonArea = <div>
                <button className="btn save" onClick={this.handleSave.bind(this)}>Save</button>
            </div>
        } else {
            titleElement = <span>{this.state.title}</span>
            authorElement = <span>{this.state.author}</span>
            yearElement = <span>{this.state.year}</span>
            buttonArea = <div>
                <button className="btn edit" onClick={this.handleEdit.bind(this)}>Edit</button>
                <button className="btn delete" onClick={this.handleDelete.bind(this)}>Delete</button>
                <button className={this.state.isToggleOn ? "btn read" : "btn unread"} onClick={this.handleClick}>{this.state.isToggleOn ? 'Read' : 'Unread'}</button>
            </div>
        }
        
        return (
                    <div className={`${this.props.color} book`}>
                        <div className="text">
                                <h4>
                                    {titleElement}
                                </h4>
                                {authorElement}
                        </div>
                        <div className="buttons">
                            {yearElement}<br/>
                            {buttonArea}
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