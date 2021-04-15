import React, { useEffect, useState, createContext, ReactNode } from 'react'

interface LevelingContextData {
    level: number;
    points: number;
    setPoints: (points: number) => void;
    render: number;
    /*     points: number; */
    getIsMatch: (isMatch: boolean) => void;
}

interface LevelingProviderProps {
    children: ReactNode;
}

export const LevelingContext = createContext({} as LevelingContextData);

export function LevelingProvider({ children }: LevelingProviderProps) {

    const [level, setLevel] = useState<number>(1);
    const [render, setRender] = useState<number>(4);
    const [points, setPoint] = useState<number>(0);

    function getIsMatch(isMatch: boolean) {
       if (isMatch === true) {
        setTimeout(() =>{
            setLevel(level+1);
            setRender(render + 4);
            isMatch = false;}, 2000)
            setPoints(points);
        } else if (isMatch === false) {
            console.log('False');
        }
    }

    console.log('level aq', level);

    function setPoints(points: number) {
        setPoint(points);
    }

    return (
        <LevelingContext.Provider value={{
            level,
            render,
            points,
            setPoints,
            getIsMatch,
        }}>
            {children}
        </LevelingContext.Provider>
    )
}

