import './Header.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



function BasicExample() {
    return (
      <div className='header'>
        <Container>
          <Navbar/>
        </Container>
      </div>
    );
  }
  
  export default BasicExample;




