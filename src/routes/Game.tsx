import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

const getRandomPosition = () => {
    return {
        top: (Math.random() * 100) + '%', 
        left: (Math.random() * 100) + '%' 
    }
}

const son = new Audio('/son.mp3')

export default function Home() {
    const [start, setStart] = useState(0)
    const [pause, setPause] = useState(false)
    const [totalTime, setTotalTime] = useState(0)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    const [_, refresh] = useState(0)
    const [position, setPosition] = useState(getRandomPosition())
    const [nbKilledDivs, setNbKilledDivs] = useState(0)

    const navigate = useNavigate()

    const timeValue = totalTime + (pause ? 0 : (Date.now() - start) / 1000)

    useEffect(() => {
        const id = setInterval(() => {
            refresh(Math.random())
        }, 120)
        setIntervalId(id)
        setStart(Date.now())
    }, [])

    const handleDivClick = () => {
        if(!pause){
            son.pause()
            son.currentTime = 0
            son.play()

            if(navigator.vibrate){
                navigator.vibrate(200)
            }

            setPosition(getRandomPosition())
            if(nbKilledDivs < 9 ){
                setNbKilledDivs(nbKilledDivs + 1)
            }
            else {
                if(intervalId){
                    clearInterval(intervalId)
                }
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        new Notification("Hi there!");
                    }
                });
                setTimeout(() => {
                    navigate('/end/' + timeValue.toFixed(3))
                }, 1000)
            }
        }
    }

    const handleRestart = () => {
        setPause(false)
        setStart(Date.now())
    }

    const handlePause = () => {
        setPause(true)
        setTotalTime(timeValue)
    }

    return (
        <div className="page game-page">
            <div className="game-infos">
                <div className="kill-cpt">{nbKilledDivs}/10</div>
                <div className="timer">
                    <div className="timer-value">{timeValue.toFixed(3)} sec</div>
                    <div className="timer-actions">
                        {pause 
                            ? <button className="restart-btn" onClick={handleRestart}>Restart</button>
                            : <button className="pause-btn" onClick={handlePause}>Pause</button>
                        }
                    </div>
                </div>
            </div>
            <div className="game-zone">
                <div 
                    className="div-to-kill" 
                    style={position}
                    onClick={handleDivClick}
                />
            </div>
        </div>
    )
}