import React, { useState, useDebugValue } from 'react';
import './DebugValueSecond.css';

function useNetworkStatus(initialStatus = navigator.onLine) {
    const [isOnline, setStatus] = useState(initialStatus);

    const goOnline = () => setStatus(true);
    const goOffline = () => setStatus(false);

    useDebugValue(isOnline ? 'Online' : 'Offline');

    return {isOnline, goOnline, goOffline};
}

function DebugValueSecond() {
    const {isOnline, goOnline, goOffline} = useNetworkStatus();

    return (
        <div className="network-status">
            <p>You are currently: <strong>{isOnline ? 'Online' : 'Offline'}</strong></p>
            <button onClick={goOnline}>Go Online</button>
            <button onClick={goOffline}>Go Offline</button>
        </div>
    );
}

export default DebugValueSecond;