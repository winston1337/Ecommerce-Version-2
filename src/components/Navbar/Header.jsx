import React from 'react';
import {MenuItems} from './MenuItems';
import './Header.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">APEX APPAREL<i className='google fonts'></i></h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <ul>
                            <li key={index}><a className='item.cName' href={item.url}>
                                {item.title}
                                </a>
                            </li>
                            </ul>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;