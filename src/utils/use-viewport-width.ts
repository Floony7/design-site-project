import { useState, useEffect } from 'react';

export function useViewportWidth() {
    const [width, setWidth] = useState(1200);

    function changeWindowSize() {
        setWidth(window.innerWidth);
      }

    useEffect(() => {
        window.addEventListener("resize", changeWindowSize);

        return () => {
            window.removeEventListener("resize", changeWindowSize)
        }
}, [])
    return width;
}