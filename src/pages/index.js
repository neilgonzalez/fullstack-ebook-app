import React, { Component } from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import './index.css';

import CreateBook from './CreateBook';
import ShowBookList from './ShowBookList';
import ShowBookDetails from './ShowBookDetails';
import UpdateBookInfo from './UpdateBookInfo';

class App extends Component {

  render() {
    return (
      <Router>

          <Routes>
          <Route path='/' element={ <ShowBookList />} />
          <Route path='/create-book' element={ <CreateBook /> } />
          <Route path='/edit-book/:id' element={ <UpdateBookInfo />} />
          <Route path='/show-book/:id' element={ <ShowBookDetails /> } />
          </Routes>
  
      </Router>
    );  
  }
}


export default App;