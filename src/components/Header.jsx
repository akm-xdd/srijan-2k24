import { React, useState } from 'react';
import './Header.css';

function Header(props) {

    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle);
    }

    const navLinks = [
        { name: 'Home', link: 'javascript:void(0)' },
        { name: 'Events', link: 'javascript:void(0)' },
        { name: 'Sponsors', link: 'javascript:void(0)' },
        { name: 'About', link: 'javascript:void(0)' },
        { name: 'Team', link: 'javascript:void(0)' }
    ]

    return (
        <header className={toggle ? 'nav-active' : ''}>

            <div className="header-container">

                <div className="header-bar">
                    <div className="header-logo">
                        <img src="https://www.darpan23.live/_next/image?url=%2FDarpan.png&w=48&q=100" alt="logo" />
                    </div>
                    <nav>
                        <span className="material-symbols-outlined menu-toggle" onClick={toggleNav}>
                            {toggle ? 'close' : 'menu'}
                        </span>
                        <ul>
                            {navLinks.map(link => {
                                return (
                                    <li><a href={link.link}>{link.name}</a></li>
                                )
                            })
                            }
                        </ul>
                    </nav>
                </div>
                <div className={`header-nav`}>
                    <ul>
                        <li className="divider" />
                        {navLinks.map(link => {
                            return (
                                <li><a href={link.link}>{link.name}</a></li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>

        </header>
    );
}

export default Header;