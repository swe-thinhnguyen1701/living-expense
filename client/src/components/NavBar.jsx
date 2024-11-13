import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.webp";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = useLocation().pathname;

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="link home-link">
                        <div><img src={logo} alt="logo" /></div>
                    </Link>
                </div>
                <div className={isOpen ? "nav-right open" : "nav-right"}>
                    <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                        <span className="bar"></span>
                    </div>
                    <ul className="list menu">
                        <li className="menu-item">
                            <Link to="/" className={currentPath === "/" ? "link highlight" : "link"}>
                                <FontAwesomeIcon icon={faHouse}/>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/dashboard" className="link">
                                <FontAwesomeIcon icon={faChartSimple}/>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/profile" className="link">
                                <FontAwesomeIcon icon={faUser}/>
                                <span>Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;