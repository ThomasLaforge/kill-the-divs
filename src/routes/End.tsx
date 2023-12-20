import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function End() {
    const { time } = useParams()
    const [countryName, setCountryName] = useState('')

    useEffect(() => {
        // Get position with geolocation API
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords
            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            const data = await response.json()
            setCountryName(data.countryName)
        })
    }, [])

    return (
        <div className="page end-page">
            <h1>Bravo</h1>
            <div className="time">Votre temps est de : {time} sec</div>
            {countryName.length > 0 && <div className="country">Pays : {countryName}</div>}
        </div>
    )
}