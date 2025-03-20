import { useState, useEffect } from "react";

function TimerWithoutCleanup() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Effect zonder cleanup functie
        const timer = setInterval(() => {
            setCount(prev => prev + 1);
            console.log("Timer zonder cleanup: tick");
        }, 1000);
        // Geen cleanup functie
    }, []);

    return (
        <div className="compact-timer-counter">{count}</div>
    );
}

function TimerWithCleanup() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Effect met cleanup functie
        const timer = setInterval(() => {
            setCount(prev => prev + 1);
            console.log("Timer met cleanup: tick");
        }, 1000);

        // Cleanup functie
        return () => {
            clearInterval(timer);
            console.log("Timer met cleanup: opgeruimd!");
        };
    }, []);

    return (
        <div className="compact-timer-counter">{count}</div>
    );
}

function UnmountDemo() {
    const [showTimers, setShowTimers] = useState(false);

    return (
        <div className="unmount-demo">
            <h2>Unmounting Demonstratie</h2>

            <div className="button-container">
                <button
                    className="demo-button main-button"
                    onClick={() => setShowTimers(!showTimers)}
                >
                    {showTimers ? "Verberg Timers (Unmount)" : "Toon Timers (Mount)"}
                </button>
            </div>

            {showTimers && (
                <div className="demo-row">
                    <div className="demo-card">
                        <div>
                            <h3>❌ Zonder Cleanup Functie</h3>
                            <p className="timer-description">
                                Deze timer heeft <strong>geen cleanup functie</strong> in de useEffect.
                                Hierdoor blijft de interval doorlopen, zelfs nadat de component is verwijderd!
                            </p>
                        </div>

                        <div className="timer-footer-group">
                            <div className="timer-component bad-timer compact-timer">
                                <TimerWithoutCleanup />
                            </div>

                            <div className="warning card-footer">
                                <p>⚠️ Deze timers blijven doorlopen in de achtergrond en veroorzaken memory leaks!</p>
                            </div>
                        </div>
                    </div>

                    <div className="demo-card">
                        <div>
                            <h3>✅ Met Cleanup Functie</h3>
                            <p className="timer-description">
                                Deze timer heeft een <strong>cleanup functie</strong> die de interval opruimt
                                wanneer de component wordt verwijderd.
                            </p>
                        </div>

                        <div className="timer-footer-group">
                            <div className="timer-component good-timer compact-timer">
                                <TimerWithCleanup />
                            </div>

                            <div className="explanation card-footer">
                                <p>✅ De cleanup functie zorgt ervoor dat resources netjes worden opgeruimd!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="zombie-tracker">
                <h3>🧟‍♂️ Zombie Processen Checker</h3>
                <p className="warning-text">
                    Kijk in de browser console (F12) om te zien of de timer zonder cleanup
                    blijft doorlopen na unmounting!
                </p>
                <p className="refresh-hint">
                    Tip: Verberg de timers en kijk of er nog console logs verschijnen.
                    De timer zonder cleanup blijft doorlopen, zelfs nadat de component is
                    verwijderd!
                </p>
            </div>
        </div>
    );
}

export default UnmountDemo; 