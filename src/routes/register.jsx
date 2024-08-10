import axios from "axios";
import bcrypt from "bcryptjs-react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import logo from "../assets/logo.png";

import "./styles/loginRegister.css";

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        let loged = localStorage.getItem("user:login");
        
        if (loged === "true")
            navigate("/")
    });

    async function onSubmit(){
    
        let regex = "^([a-z]|[A-Z]|[0-9]|[@]|[!]|[$]|[#]|[.]|[-]){4,8}$";
    
        let email = await document.querySelector("#input-register-email").value;
        let password = await document.querySelector("#input-register-pass").value;
        let re_password = await document.querySelector("#input-register-repeat-pass").value;
    
        if (password !== re_password)
            return false

        if (email)
            if (
                email.match(regex) ||
                password.match(regex) ||
                re_password.match(regex)
            ){
                let salt = bcrypt.genSaltSync(11);
                let hash = bcrypt.hashSync(password, salt);

                let res = await axios.post("http://localhost:3001/user/register", { email: email, password: hash } )
                
                
                if (res.data.auth){
    
                    await localStorage.setItem("user:infos", JSON.stringify(res.data.data));
                    await localStorage.setItem("user:login", "true");
    
                    navigate("/");
                    
                }else{
                    console.log(res.data.message);                    
                }
                
            }else{
                
                // STOP SQL INJECTIO OU CARACTERES NÃO AUTORIZADOS
            }
                
                
    
        return false;
    
    }

    return (
        <div className="LogReg">
            
            <img className="logo-login" src={logo} alt="logo" />

            <div>
                <h2>Conecte-se</h2>
                <p>Preencha os campos abaixo para se conectar.</p>
            </div>

            <div>
                <input
                    type="email"
                    maxLength="30"
                    placeholder="email@email.com"
                    className="primary"
                    id="input-register-email"
                />
                <input
                    type="password"
                    maxLength="30"
                    placeholder="senha"
                    className="second"
                    id="input-register-pass"
                />
                <input
                    type="password"
                    maxLength="30"
                    placeholder="repetir senha"
                    className="second"
                    id="input-register-repeat-pass"
                />
            </div>

            <div className="div-thow-buttons">
                <button
                    onClick={onSubmit}
                    className="primary"
                >
                    Confirmar
                </button>
                <button
                    onClick={onSubmit}
                    className="second"
                >
                    Cancelar
                </button>
            </div>

            <>
                <p>Para se registrar <a href="/user/register">clique aqui</a></p>
            </>
    
        </div>
    );
}