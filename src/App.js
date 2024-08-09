
import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import Navbar from './pages/navbar';
import Footer from './pages/footer';

              


// const title1 = React.createElement("h1" , null ,"Edureka") 

function App() {
  return (
    
    
    <div>  
    <Navbar/>  
    <Homepage />
    <Footer />
    
    </div>
    
  );
}

export default App;
