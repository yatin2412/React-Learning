import React, {useState, useRef} from 'react'

interface DebounceTypes{
    fn: (...args: any) => void,
    delay: number
}

export const useDebounce = ({fn, delay}: DebounceTypes) => {
    const timeRef = useRef<number | null>(null);

    return (...args: any) => {
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }

        timeRef.current = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}