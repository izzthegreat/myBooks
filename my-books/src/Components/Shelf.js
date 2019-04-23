import React, {Component} from 'react'
import "../CSS/Book.css"
import Book from './Book';

class Shelf extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
        }
    }
    addBook() {
        this.state.books.push({
          id: Date.now()
        });
        this.setState({
          notes: this.state.books
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

export default Shelf;
