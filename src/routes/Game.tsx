import { useState } from "react"
import { useNavigate } from "react-router"

const getRandomPosition = () => {
    return {
        top: (Math.random() * 100) + '%', 
        left: (Math.random() * 100) + '%' 
    }
}

export default function Home() {
    const [position, setPosition] = useState(getRandomPosition())
    const [nbKilledDivs, setNbKilledDivs] = useState(0)
    const navigate = useNavigate()

    const handleDivClick = () => {
        setPosition(getRandomPosition())
        if(nbKilledDivs < 9 ){
            setNbKilledDivs(nbKilledDivs + 1)
        }
        else {
            navigate('/end')
        }
    }

    return (
        <div className="page game-page">
            <div className="kill-cpt">{nbKilledDivs}/10</div>
            <div 
                className="div-to-kill" 
                style={position}
                onClick={handleDivClick}
            />
        </div>
    )
}