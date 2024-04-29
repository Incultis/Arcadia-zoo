import { useEffect, useState } from "react";
// Retourne isMediumScreen {boolean}
//          widthScreen{number} variable de test à supp
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
    const isMediumScreen = widthScreen <= 760;
    return { isMediumScreen, widthScreen };
}