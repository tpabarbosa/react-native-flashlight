import React, { useState, useEffect } from 'react';

const SOS = [
    'letters_space',
    'dot',
    'letters_space',
    'dot',
    'letters_space',
    'dot',
    'words_space',
    'dash',
    'letters_space',
    'dash',
    'letters_space',
    'dash',
    'words_space',
    'dot',
    'letters_space',
    'dot',
    'letters_space',
    'dot',
    'phrases_space',
];

const intervals = {
    unit: 250, // ms
    dot: 1,
    dash: 3,
    letters_space: 1,
    words_space: 3,
    phrases_space: 7,
};

export default useSOS = () => {
    const [isBlinking, setBlinking] = useState(false);
    const [timer, setTimer] = useState(null);
    const [sosCurrentItem, setSosCurrentItem] = useState(0);
    const [finishedSosItem, setFinishedSosItem] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const stop = () => {
        setIsPlaying(false);
        clearInterval(timer);
        setTimer(null);
        setBlinking(false);
        setFinishedSosItem(false)
        setSosCurrentItem(0)
    }

    const start = () => {
        setIsPlaying(true);
        playSOS();
    }

    const playSOS = () => {
        setFinishedSosItem(false);

        const interval = intervals[SOS[sosCurrentItem]];

        const t = setTimeout(() => {
            if (SOS[sosCurrentItem] === 'dot' || SOS[sosCurrentItem] === 'dash') {
                setBlinking(true);
            } else {
                setBlinking(false);
            }
            setFinishedSosItem(true);
            if (sosCurrentItem === SOS.length - 1) {
                setSosCurrentItem(0);
            } else {
                setSosCurrentItem((item) => item + 1);
            }
        }, interval * intervals.unit);

        setTimer(t);
    };

    useEffect(() => {
        if (isPlaying === true && finishedSosItem === true) {
            playSOS();
        }
    }, [finishedSosItem, isPlaying]);


    return { isBlinking, stop, start }
}