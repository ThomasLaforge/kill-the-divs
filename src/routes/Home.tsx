import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export default function Home() {
    const navigate = useNavigate()

    const [installedPWA, setInstalledPWA] = useState(false)
    const [eventPWAInstall, setEventPrompt] = useState<BeforeInstallPromptEvent | null>(null)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault()
            setEventPrompt(e as BeforeInstallPromptEvent)
        })

        window.addEventListener('appinstalled', () => {
            setInstalledPWA(true)
        })
    }, [])


    return (
        <div className="page home-page">
            <button onClick={() => navigate('/game')}>Start</button>
            {!installedPWA ? <button onClick={() => eventPWAInstall?.prompt()}>Installer</button> : null}
        </div>
    )
}