import React from 'react';
// import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Header.css';

class Navbar extends React.Component {
    state = {clicked : false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ROYAL APPAREL<i className=''></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                </div>
                <div className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
            
        )
    }
}

export default Navbar;