import React from 'react'
import './App.css'
import Header from "./header/Header";
import Main from "./main/Main";
import {Skills} from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footrer";
import Hire from "./hire/Hire";




function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
