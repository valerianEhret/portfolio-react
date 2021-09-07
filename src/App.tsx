import React from 'react'
import './App.scss'
import Header from "./header/Header";
import {Skills} from "./skills/Skills";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footrer";
import Hire from "./hire/Hire";
import {Main2} from "./main/Main2";
import Projects1 from "./projects/Projects1";




function App() {
    return (
        <div className="App">
            <Header/>
            <Main2/>
            <Skills/>
            <Projects1/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
