import { Link } from "react-router-dom";
import '../css/header.css'


export default function Header() {
    return (
        <>
            <header className="header">
                <h1 className="logo">Van Vliet</h1>
                <ul className="main-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>

            </header>
        </>
    );
}