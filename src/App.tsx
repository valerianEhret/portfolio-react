import React from 'react'
import './App.css'
import Header from "./header/Header";
import Main from "./main/Main";
import {Skills} from "./skills/Skills";
import Projects from "./projects/Projects";
import RemoteJob from "./remoteJob/RemoteJob";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footrer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteJob/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
