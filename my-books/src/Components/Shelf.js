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
                    genre: "RPG",
                    class:"rust",
                    id: performance.now()
                },
                {
                    title: "Dungeon Master's Guide",
                    author: "Dave Arneson/Gary Gygax",
                    year: "1974",
                    genre: "RPG",
                    class:"blue", 
                    id: performance.now()
                },
                {
                    title: "Monster Manual",
                    author: "Dave Arneson/Gary Gygax",
                    year: "1974",
                    genre: "GRPG",
                    class:"yellow",
                    id: performance.now()
                }
            ]
        }
    }

    getSpine() {
        let colors = ['rust', 'blue', 'yellow']
        return colors [parseInt(Math.random()*10)%3]
    }

    addBook() {
        this.state.books.push({
          id: performance.now(),
          class: this.getSpine()
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
            books: newBookArr
        });
    }

    render() {
        return (
            <div>
                <div className="shelf">
                    <div className="row">
                    {
                        this.state.books.map(book => {
                            console.log(this.getSpine());
                            return <Book id={book.id} color={this.getSpine()}  deleteHandler={this.deleteBook.bind(this)}/>
                        })
                    }
                    </div>
                </div>        
                <div>
                    <button className="add" onClick={this.addBook.bind(this)}>Add Book</button>
                </div>
            </div>
        )
    };
}

export default Shelf;
