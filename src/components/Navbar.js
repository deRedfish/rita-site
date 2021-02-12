import React, { Component } from 'react'
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.closeMobileMenu = this.closeMobileMenu.bind(this)
    }

    handleClick() {
        this.setState({
            click: !this.state.click
        });
    }

    closeMobileMenu() {
        this.setState({
            click: false
        });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
                        <img src="./images/logo.png" alt="Rita Pequeno Logo" />
                    </Link>
                    <div className="menu-icon" onClick={this.handleClick}>
                        {this.state.click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>

                        <Link to="/about" className="nav-links">
                            <li className="nav-item" onClick={this.closeMobileMenu}>
                                ABOUT
                            </li>
                        </Link>

                        <Link to="/shop" className="nav-links">
                            <li className="nav-item" onClick={this.closeMobileMenu}>
                                SHOP
                            </li>
                        </Link>

                        <Link to="/events" className="nav-links">
                            <li className="nav-item" onClick={this.closeMobileMenu}>
                                EVENTS
                            </li>
                        </Link>

                        <Link to="/insta" className="nav-links">
                            <li className="nav-item" onClick={this.closeMobileMenu}>
                                <FaInstagram style={{ fontSize: "25px" }} />
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar