import { useEffect, useState } from "react";
// Retourne en continu la largeur de l'écran
export function useScreenWidth() {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidthScreen(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return { widthScreen };
}