// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Waveform } from '@uiball/loaders'


const LoaderComponent = () => {
    return (
    <div
    style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }}>
        <Waveform size={60} lineWeight={3.5} speed={1} color='black' />
    </div>
    )
}

export default LoaderComponent
