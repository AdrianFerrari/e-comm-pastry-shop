import { useState, useEffect } from "react";

function useObservador(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return isVisible;
}

export default useObservador