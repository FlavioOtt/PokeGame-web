import logo from "../assets/logo.png";

import "./styles/loginRegister.css"

async function onSubmit(){

    let email = await document.querySelector("#input-login-email").value;
    let password = await document.querySelector("#input-login-pass").value;
    let re_password = await document.querySelector("#input-login-pass").value;

    if (email)
        if (
            email.match("^([a-z]|[A-Z]|[0-9]|[@]|[!]|[$]|[#]|[.]|[-]){4,8}$") ||
            password.match("^([a-z]|[A-Z]|[0-9]|[@]|[!]|[$]|[#]|[.]|[-]){4,8}$") ||
            re_password.match("^([a-z]|[A-Z]|[0-9]|[@]|[!]|[$]|[#]|[.]|[-]){4,8}$")
        ){
            // CONTINUE
        }else{
            // STOP SQL INJECTIO OU CARACTERES NÃO AUTORIZADOS
        }
            
            

    return false;

}

async function change(){

    console.log(1);
    
}


export default function Login() {
    return (
        <div className="Login">
            
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
                    onChange={change}
                    className="primary"
                    id="input-login-email"
                />
                <input
                    type="password"
                    maxLength="30"
                    placeholder="senha"
                    onChange={change}
                    className="second"
                    id="input-login-pass"
                />
                <input
                    type="password"
                    maxLength="30"
                    placeholder="repetir senha"
                    onChange={change}
                    className="second"
                    id="input-login-repeat-pass"
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