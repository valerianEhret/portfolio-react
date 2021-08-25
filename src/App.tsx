import React from 'react'
import './App.scss'
import Header from "./header/Header";
import {Skills} from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footrer";
import Hire from "./hire/Hire";
import {Main2} from "./main/Main2";




function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Main/>*/}
            <Main2/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
