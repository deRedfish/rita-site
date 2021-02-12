import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Events from './components/Events'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="main-container">
                <BrowserRouter>
                    <Navbar />
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/shop" exact component={Shop}></Route>
                    <Route path="/events" exact component={Events}></Route>
                    <Route path='/insta' component={() => {
                        window.location.href = 'https://www.instagram.com/rita_____pequeno/';
                        return null;
                    }} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App