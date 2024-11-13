import logo from "../assets/logo.webp"
import { Link } from "react-router-dom"

function Home() {
    return (
        <article className="home-page">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <p>Your one-stop solution for managing living expense</p>
            <Link to="/dashboard" className="link get-started-link">Get Started</Link>
        </article>
    );
}

export default Home;