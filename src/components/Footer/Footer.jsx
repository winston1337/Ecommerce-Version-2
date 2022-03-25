import React from 'react';
import {FooterItems} from './FooterItems';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <nav className="FooterItems">
                <ul>
                    {FooterItems.map((item, index) => {
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

export default Footer;