import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav style={{padding: '1rem', background: '#111', color: '#fff'}}>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
            my Blog
            </Link>
        </nav>
    )
}