//import axios from "axios";
import * as React from "react";

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import logo from "../assets/logo.png";

import Icons from "../assets/Icons";

import "./styles/user.css";

import Pokedex from "../Components/Pokedex";
import NotFound from "../Components/NotFound";

export default function User() {

    const navigate = useNavigate();

    let [section, setSection] = useState("Pokedex")

    useEffect(() => {
        let loged = localStorage.getItem("user:login");
        
        if (loged !== "true")
            navigate("/user/login")
    });

    let userSection;

    if (section === "Pokedex")
        userSection = Pokedex();
    else if (section === "Incubadora")
        userSection = NotFound();
    else if (section === "Batalhas")
        userSection = NotFound();
    else if (section === "Inventário")
        userSection = NotFound();
    else if (section === "Maquinas")
        userSection = NotFound();
    else if (section === "Configurações")
        userSection = NotFound();
    else if (section === "Discord")
        userSection = NotFound();
    else if (section === "FAQ")
        userSection = NotFound();
    else if (section === "Source")
        userSection = NotFound();

    let playerName = "PLAYER NAME";
    let playerLevel = 6;

    return (
        <div className="User"> 
            
            <nav className="Nav">
        
                <div className='nav-top'>
                    <img className="img-profile-user" src={logo} alt="perfil icon" />
                    <h3 className='nav-title'>{`${playerName} Lv. ${playerLevel}`}</h3>
                </div>
                <div className='nav-bottom'>
                    <div className="div-nav-top">
                        <div onClick={() => setSection("Pokedex")} className='link-div-icon'>
                            <button className="btn-link">Pokedex</button>
                            <img className="icon-link" src={Icons.pokedex} alt="perfil icon" />
                        </div>
                        <div onClick={() => setSection("Incubadora")} className='link-div-icon'>
                            <button className="btn-link">Incubadora</button>
                            <img className="icon-link" src={Icons.incubator} alt="perfil icon" />
                        </div>
                        <div onClick={() => setSection("Batalhas")} className='link-div-icon'>
                            <button className="btn-link">Batalhas</button>
                            <img className="icon-link" src={Icons.battle} alt="perfil icon" />
                        </div>
                        <div onClick={() => setSection("Inventário")} className='link-div-icon'>
                            <button className="btn-link">Inventário</button>
                            <img className="icon-link" src={Icons.inventory} alt="perfil icon" />
                        </div>
                        <div onClick={() => setSection("Maquinas")} className='link-div-icon'>
                            <button className="btn-link">Maquinas</button>
                            <img className="icon-link" src={Icons.machines} alt="perfil icon" />
                        </div>
                    </div>
                    <div className="div-nav-bottom">
                        <div onClick={() => setSection("Configurações")} className='link-div-icon'>
                            <button className="btn-link">Configurações</button>
                            <img className="icon-link" src={Icons.config} alt="perfil icon" />
                        </div>
                        <div onClick={() => setSection("Discord")} className='link-div-icon'>
                            <button className="btn-link">Discord</button>
                            <img className="icon-link" src={Icons.discord} alt="perfil icon" />
                        </div>
                        <div onClick={() => setSection("FAQ")} className='link-div-icon'>
                            <button className="btn-link">FAQ</button>
                            <img className="icon-link" src={Icons.faq} alt="perfil icon" />
                        </div>
                        <div onClick={() => setSection("Source")} className='link-div-icon'>
                            <button className="btn-link">Source</button>
                            <img className="icon-link" src={Icons.github} alt="perfil icon" />
                        </div>
                    </div>
                </div>
        
            </nav>
            {
                userSection
            }
        </div>
    )
    
}