import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function End() {
    const { time } = useParams()
    const [countryName, setCountryName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        // Get position with geolocation API
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords
            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            const data = await response.json()
            setCountryName(data.countryName)
        })
    }, [])

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Partage de mon score',
                text: 'J\'ai terminé le jeu en ' + time + ' secondes',
                url: window.location.href
            })
        }
    }

    return (
        <div className="page end-page">
            <h1>Bravo</h1>
            <div className="time">Votre temps est de : {time} sec</div>
            {countryName.length > 0 && <div className="country">Pays : {countryName}</div>}
            <button onClick={handleShare}>Share</button>
            <button onClick={() => navigate('/game')}>Restart</button>
        </div>
    )
}