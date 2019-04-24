import React, {Component} from 'react'
import "../CSS/Bookshelf.css"
import Shelf from './Shelf';

class Bookshelf extends Component{
    constructor(){
        super();
        this.state = {
            shelves: [
                {
                    genre: "Genre",
                    id: performance.now()
                },
                {
                    genre: "Genre",
                    id: performance.now()
                }
            ],
            
        }
    }
    addShelf() {
        this.state.shelves.push({
            genre: "Genre",
            id: performance.now()
        });
        this.setState({
            genres: this.state.genres
        }
        );
    }
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <div className="row">
                    {
                        this.state.shelves.map(shelf => {
                            return <Shelf genre = {shelf.genre}/>
                        })
                    }
                    </div>
                </div>        
                <div className="button1"><button className="btn btn-success add-button" onClick={this.addShelf.bind(this)}>Add Shelf</button> </div>
            </div>
        )
    };
}

export default Bookshelf;
