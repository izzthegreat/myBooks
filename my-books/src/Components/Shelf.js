import React, {Component} from 'react'
import "../CSS/Book.css"
import Book from './Book';

class Shelf extends Component{
    constructor(){
        super();
        this.state = {
<<<<<<< Updated upstream
            books: [],
=======
            books: [
            ]
>>>>>>> Stashed changes
        }
    }
    addBook() {
        this.state.books.push({
          id: Date.now()
        });
        this.setState({
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    }
    render() {
        
        return (
            <div>
                <div className="div-bookshelf">
                    <div className="row">
                    {
<<<<<<< Updated upstream
                    this.state.books.map(book => {
                         return <Book title={book.title} author={book.author} year={book.year} genre= {book.genre}/>
                    })
=======
                        this.state.books.map(book => {
                            return <Book key={book.id}id={book.id}deleteHandler={this.deleteBook.bind(this)}
                />
                        })
>>>>>>> Stashed changes
                    }
                    </div>
                </div>        
                <div className="button1"><button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button> </div>
            </div>
        )
    };
}

export default Shelf;
