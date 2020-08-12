import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./components/content/about";
import ButtonAppBar from "./components/navbar/navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/galery";
import Contacts from "./components/Contacts/contacts";



function App() {
  return (

      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <ButtonAppBar/>
              <div>

                  <Route path='/home'
                         render={() => <About/>}/>
                  <Route path='/gallery' render={() =>
                      <Gallery/>}/>
                  <Route path='/contacts'
                         render={() =>
                             <Contacts/>}/>


              </div>
          </div>
      </BrowserRouter>
  )

}

export default App;
