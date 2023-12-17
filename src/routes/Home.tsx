import { useState } from "react"

export default function Home() {
    const [username, setUsername] = useState('')

    return (
        <div>
            <h1>Home</h1>
            <div className="connected-status">
                Bienvenue : {username}
            </div>
            <div className="connected-data">
                <div className="value"></div>
            </div>
        </div>
    )
}