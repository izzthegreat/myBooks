import React, {Component} from 'react'
import "../CSS/Book.css"
import Book from './Book';

class Bookshelf extends Component{
    constructor(){
        super();
        this.state = {
            books: [
                {
                    title: "Title:",
                    author: "Author:",
                    year: "Year:",
                    genre: "Genre:"
                },
                {
                    title: "Title:",
                    author: "Author:",
                    year: "Year:",
                    genre: "Genre:"
                },
                {
                    title: "Title:",
                    author: "Author:",
                    year: "Year:",
                    genre: "Genre:"
                }
            ]
        }
    }
    addBook() {
        this.state.books.push({
            title: "Title:",
            author: "Author:",
            year: "Year:",
            genre: "Genre:"
        });
        this.setState({
            books: this.state.books
        }
        );
    }
    render() {
        return (
            <div>
                <div className="div-bookshelf">
                    <div className="row">
                    {
                    this.state.books.map(book => {
                         return <Book title={book.title} author={book.author} year={book.year} genre= {book.genre}/>
                    })
                    }
                    </div>
                </div>        
                <div className="button1"><button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button> </div>
            </div>
        )
    };
}

export default Bookshelf;
