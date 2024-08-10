import axios from "axios";
import bcrypt from "bcryptjs-react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import logo from "../assets/logo.png";

import "./styles/loginRegister.css";

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        let loged = localStorage.getItem("user:login");
        
        if (loged === "true")
            navigate("/")
    });

    async function onSubmit(){
    
        let regex = "^([a-z]|[A-Z]|[0-9]|[@]|[!]|[$]|[#]|[.]|[-]){4,8}$";
    
        let email = await document.querySelector("#input-login-email").value;
        let password = await document.querySelector("#input-login-pass").value;
    
        let loged = await localStorage.getItem("user:login");

        if (loged === "true") return false;

        if (email)
            if (
                email.match(regex) ||
                password.match(regex)
            ){
    
                let res = await axios({
                    method: "get",
                    url: "http://localhost:3001/user/login",
                    headers: {
                        email: email
                    }
                })
    
                let isPassword = bcrypt.compareSync(password, res.data.user.password);
                
                if (res.data.auth){
                    if (isPassword){
    
                        let user_infos = await axios({
                            method: "get",
                            url: "http://localhost:3001/user/verifytoken",
                            headers: {
                                token: res.data.user.token,
                                token_login: res.data.user.token_login
                            }
                        })
    
                        await localStorage.setItem("user:infos", JSON.stringify(user_infos.data.data))                 
                        await localStorage.setItem("user:login", "true");

                        navigate("/")
    
                    }
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
                    id="input-login-email"
                />
                <input
                    type="password"
                    maxLength="30"
                    placeholder="senha"
                    className="second"
                    id="input-login-pass"
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