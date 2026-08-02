import Link from "next/link";
import "./Navbar.css";


export default function Navbar() {
    return ( 
        <nav className="navbar">
        <div className="inner-nav">
            <div className="navbar-container">

                <Link href="/" className="logo">
                    <div className="logo-icon">S</div>
                    <span className="logo-text">StudyVerse</span>
                </Link>

                <div className="nav-links">
                    <Link href="/#home">Home</Link>
                    <Link href="/#features">Features</Link>
                    <Link href="/">How it works</Link>
                    <Link href="/">Get started</Link>
                </div>

                <div className="nav-buttons">
                    <button className="login-btn">Log in</button>
                    <button className="signup-btn">Sign up</button>
                </div>
            </div>
        </div>
        </nav>

    );
}