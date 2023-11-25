import React, { useState, useReducer } from 'react';
import './style.css';
import Header from './Compo/Header';
import MainOne from './Compo/MainOne';
import About from './Compo/About';
import Skills from './Compo/Skills';
import Services from './Compo/Services';
import ContactMe from './Compo/ContactMe';
import Footer from './Compo/Footer';

export default function App() {
  return (
    <div id="main_div">
      <Header />
      <MainOne />
      <About />
      <Skills />
      <Services />
    <ContactMe/>
    <Footer/>
    </div>
  );
}
