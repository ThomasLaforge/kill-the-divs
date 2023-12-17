import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Connexion(){
    const [login, setLogin] = useState('')
    const navigate = useNavigate()

    const handleConnexion = () => {
        console.log('login saisi', login)
        navigate('/home')
    }

    return (
        <div>
            <h1>Connexion</h1>
            <div className="form">
                <label htmlFor="login">Login</label>
                <input 
                    type="text" 
                    id="login" 
                    name="login" 
                    value={login}
                    onChange={(e) => setLogin(e.target.value)} 
                />
                <button onClick={handleConnexion}>
                    Rentrer dans le jeu
                </button>
            </div>
        </div>
    )
}