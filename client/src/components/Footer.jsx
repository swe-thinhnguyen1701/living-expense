import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faAddressCard, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer>
            <ul className="list">
                <li className="list-item">
                    <Link to="https://www.linkedin.com/in/thinh-nguyen-10b31a218/" target="_blank" className="link">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span className="container">
                            <span className="link-description">
                                <FontAwesomeIcon icon={faCaretUp} className="caret-up-icon" />
                                LinkedIn
                            </span>
                        </span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="https://github.com/swe-thinhnguyen1701" target="_blank" className="link">
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="container">
                            <span className="link-description">
                                <FontAwesomeIcon icon={faCaretUp} className="caret-up-icon" />
                                GitHub
                            </span>
                        </span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="mailto:charles.nguyen1701@gmail.com" className="link">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="container">
                            <span className="link-description">
                                <FontAwesomeIcon icon={faCaretUp} className="caret-up-icon" />
                                Email
                            </span>
                        </span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="https://dashing-rugelach-9db06a.netlify.app/" target="_blank" className="link">
                        <FontAwesomeIcon icon={faAddressCard} />
                        <span className="container">
                            <span className="link-description">
                                <FontAwesomeIcon icon={faCaretUp} className="caret-up-icon" />
                                Portfolio
                            </span>
                        </span>
                    </Link>
                </li>
            </ul>
            <p>© 2024 Charles Nguyen</p>
        </footer>
    )
}

export default Footer;