import {useCallback, useRef} from "react";

export default function useDebounce<T extends any[]>(callback: (...args: T) => void, delay: number): (...args: T) => void {
    const timeoutRef = useRef<NodeJS.Timeout>(null);
    const debouncedCallback = useCallback((...args: T) => {
        if(timeoutRef.current)
            clearTimeout(timeoutRef.current)

        timeoutRef.current = setTimeout(() => callback(...args), delay);
    }, [callback, delay]);

    return debouncedCallback;
}