//import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//import logo from "../assets/logo.png";

import "./styles/loginRegister.css";

import Nav from "../components/Nav";

export default function User() {

    const navigate = useNavigate();

    useEffect(() => {
        let loged = localStorage.getItem("user:login");
        
        if (loged !== "true")
            navigate("/user/login")
    });

    return (
        <>
            <Nav />
        </>
    )
}