import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./Components/Home"
import Bookshelf from "./Components/Bookshelf"


class App extends React.Component
{
  render() {
    return(
      <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/Bookshelf" component={Bookshelf} />
      </BrowserRouter>
    )
  }
}

export default App;