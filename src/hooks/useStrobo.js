import React, { useState, useEffect } from 'react';

export default useStrobo = () => {
    const [isBlinking, setBlinking] = useState(false);
    const [timer, setTimer] = useState(null);
    const [frequency, setFrequency] = useState(10);
    const [isPlaying, setIsPlaying] = useState(false);

    const changeFrequency = (newfrequency) => {
        if (newfrequency !== frequency) {
            clearInterval(timer);
            setTimer(null);
            setFrequency(newfrequency);
        }
    }

    const stop = () => {
        setIsPlaying(false);
        clearInterval(timer);
        setTimer(null);
        setBlinking(false);
    }

    const start = () => {
        setIsPlaying(true);
        play()
    }

    const play = () => {
        if (frequency === 0) return;

        const t = setInterval(
            () => {
                setBlinking((value) => !value);
            },
            frequency !== 0 ? (1 / frequency) * 1000 : 100000
        );
        setTimer(t);
    };

    useEffect(() => {
        if (isPlaying) {
            play()
        };
    }, [frequency]);

    return { isBlinking, start, stop, changeFrequency, frequency }
}