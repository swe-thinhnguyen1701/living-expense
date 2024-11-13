import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Error () {
    const VALID_PATH = ["/", "/dashboard"];
    const currentPath = useLocation().pathname;
    const message = VALID_PATH.includes(currentPath) ? "This feature is coming soon" : "Something went wrong!";
    return(
        <>
            <NavBar />
            <main className="main error-page">
                <h1>{message}</h1>
            </main>
            <Footer />
        </>
    )
}

export default Error;