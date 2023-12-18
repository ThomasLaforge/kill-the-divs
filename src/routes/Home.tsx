import { useState } from "react"
import { useNavigate } from "react-router"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="page home-page">
            <button onClick={() => navigate('/game')}>Start</button>
        </div>
    )
}