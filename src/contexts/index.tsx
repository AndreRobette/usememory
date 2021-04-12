import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LevelingContext } from "./LevelingContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    pauseCountdown: () => void;
    timer: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { getIsMatch, level, render, setPoints, points } = useContext(LevelingContext)

    const [time, setTime] = useState(10 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(true);
        setHasFinished(false);
        setTime(10 * 60);
    }

    function pauseCountdown() {
        setIsActive(false);
    }

    function timer() {
        if (level===2){
            setTime(9);
        }
        if (level===3){
            setTime(8);
        }
        if (level===4){
            setTime(7);
        }
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            timer,
            startCountdown,
            resetCountdown,
            pauseCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )

}