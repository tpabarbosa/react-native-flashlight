import React, { useState, useEffect } from 'react';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import useSOS from './useSOS'
import useStrobo from './useStrobo'

export default useTorch = () => {
    const [isOn, setIsOn] = useState(false);
    const [mode, setMode] = useState('common')
    const [isBlinking, setBlinking] = useState(false);
    const [torchState, setTorchState] = useState(false)

    const sosMode = useSOS();
    const stroboMode = useStrobo();

    const changeMode = (newMode) => {
        if ((mode === 'screen-only') && newMode === 'common') {
            setIsOn(true)
        }
        setMode(newMode)
    }

    const toggle = () => {
        setIsOn(value => !value)
    }

    const handleShake = (currentMode) => {
        if (currentMode !== 'camera' && currentMode !== 'screen-only') {
            toggle();
        }
    }

    const changeStroboFrequency = (frequency) => {
        stroboMode.changeFrequency(frequency)
    }

    useEffect(() => {
        if (mode === 'screen-only') {
            setIsOn(false);
        } else if (mode === 'common') {
            sosMode.stop();
            stroboMode.stop();
        } else if (mode === 'sos') {
            sosMode.start()
            setIsOn(true)
        } else if (mode === 'strobo') {
            stroboMode.start();
            setIsOn(true)
        }

    }, [mode])

    useEffect(() => {
        setBlinking(sosMode.isBlinking)
    }, [sosMode.isBlinking])

    useEffect(() => {
        setBlinking(stroboMode.isBlinking)
    }, [stroboMode.isBlinking])

    useEffect(() => {
        setTorchState(isOn && !isBlinking)
    }, [isOn, isBlinking, mode])

    useEffect(() => {
        try {
            Torch.switchState(torchState);
        } catch (e) {
            console.log('Erro ao tentar ligar ou desligar a lanterna.', e.message)
        }
    }, [torchState, mode])

    useEffect(() => {
        const subscription = RNShake.addListener(() => handleShake(mode));

        return () => {
            subscription.remove();
        };
    }, [mode])

    return { isOn, changeMode, mode, toggle, changeStroboFrequency, stroboFrequency: stroboMode.frequency }
}