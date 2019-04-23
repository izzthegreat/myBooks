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
          id: Date.now()
        });
        this.setState({
          books: this.state.books
        });
      }
    deleteBook(id) {
        let newBookArr = this.state.books;
        newBookArr.map((book, index) => {
            if (id === book.id) {
            newBookArr.splice(index, 1);
            }
        });
        this.setState({
            notes: newBookArr
        });
    }

    render() {
        return (
            <div>
                <div className="shelf">
                    <div className="row">
                    {
                        this.state.books.map(book => {
                            return <Book key={book.id}id={book.id}deleteHandler={this.deleteBook.bind(this)}/>
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
