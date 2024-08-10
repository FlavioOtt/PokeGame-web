//import axios from "axios";
import { Link } from 'react-router-dom';

import logo from "../assets/logo.png";

import "./styles/Nav.css";

export default function Nav() {

    //const navigate = useNavigate();

    return (
        <nav className="Nav">
            
            <>
                <img src={logo} alt="perfil icon" />
                <h3>PLAYER NAME LEVEL</h3>
            </>
            <>
                <div className="nav-top">
                    <Link to="/user/perfil/pokemons">Pokemons <img src={logo} alt="perfil icon" /> </Link>
                </div>
                <div className="nav-bottom"></div>
            </>
    
        </nav>
    );
}