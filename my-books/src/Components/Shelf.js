import React, {Component} from 'react'
import "../CSS/Shelf.css"
import Book from './Book';

class Shelf extends Component{
    constructor(){
        super();
        this.state = {
            books: [
                {
                    title: "Player's Handbook",
                    author: "Dave Arneson/Gary Gygax",
                    year: "1974",
                    genre: "RPG"
                },
                {
                    title: "Dungeon Master's Guide",
                    author: "Dave Arneson/Gary Gygax",
                    year: "1974",
                    genre: "RPG"
                },
                {
                    title: "Monster Manual",
                    author: "Dave Arneson/Gary Gygax",
                    year: "1974",
                    genre: "GRPG"
                }
            ]
        }
    }
    addBook() {
        this.state.books.push({
            title: "Title",
            author: "Author",
            year: "Year",
            genre: "Genre"
        });
        this.setState({
            books: this.state.books
        }
        );
    }
    render() {
        return (
            <div>
                <div className="shelf">
                    <div className="row">
                    {
                        this.state.books.map(book => {
                            return <Book title={book.title} author={book.author} year={book.year} genre= {book.genre}/>
                        })
                    }
                    </div>
                </div>        
                <div className="button1"><button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add Book</button> </div>
            </div>
        )
    };
}

export default Shelf;
