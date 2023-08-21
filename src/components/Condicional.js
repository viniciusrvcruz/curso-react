import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setuserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setuserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setuserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail: </h2>
            <form>
                <input type="email" placeholder="Digite o seu E-mail..." onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar E-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar o E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional