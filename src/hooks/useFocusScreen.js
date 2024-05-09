import { useEffect, useRef } from "react";

// param {State}; hook qui permet de créer un focus sur un élément
export function useFocusScreen(data) {
    const divFocus = useRef(null);
    useEffect(() => { // quand les données sont attribués le focus sur la l'élément et fait
        if (divFocus.current) {
            divFocus.current.focus();
        }

    }, [data])
    return divFocus;
}