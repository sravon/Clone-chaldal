import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './user/Home';
import Login from './user/Login';
import Register from './user/Register';


function Root() {
    return (
      
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/registration" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
