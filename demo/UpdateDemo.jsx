import { useState, useEffect } from "react";

function UpdateDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [updateLog, setUpdateLog] = useState([]);

    // useEffect met dependency array - wordt uitgevoerd bij mounting en updates van count
    useEffect(() => {
        const timestamp = new Date().toLocaleTimeString();
        setUpdateLog(prev => [
            `${timestamp}: Effect uitgevoerd! Count is nu: ${count}`,
            ...prev.slice(0, 4)
        ]);
    }, [count]); // Dependency array met count - effect wordt uitgevoerd wanneer count verandert

    return (
        <div className="update-demo">
            <h2>Update Dependency Demonstratie</h2>

            <div className="demo-row">
                <div className="demo-card">
                    <h3>🔄 Effect met dependency</h3>
                    <p>
                        Deze useEffect heeft <code>[count]</code> als dependency array.
                        Het effect wordt uitgevoerd bij mounting en wanneer count verandert.
                    </p>

                    <div className="control-group">
                        <button
                            className="demo-button"
                            onClick={() => setCount(c => c + 1)}
                        >
                            Verhoog teller: {count}
                        </button>

                        <div className="input-group">
                            <label htmlFor="name-input">Naam wijzigen (geen effect):</label>
                            <input
                                id="name-input"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Wijzig deze waarde..."
                            />
                        </div>
                    </div>

                    <div className="effect-log-container">
                        <h4>Effect Log:</h4>
                        <div className="effect-log">
                            {updateLog.map((log, index) => (
                                <div key={index} className="log-entry">{log}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="demo-card">
                    <h3>📝 Uitleg Dependencies</h3>
                    <div className="explanation">
                        <p>
                            De dependency array <code>[count]</code> vertelt React om het effect alleen
                            opnieuw uit te voeren als <code>count</code> verandert.
                        </p>
                        <div className="dependency-rules">
                            <div className="rule">• Als je de teller verhoogt → effect wordt uitgevoerd</div>
                            <div className="rule">• Als je de naam wijzigt → effect wordt NIET uitgevoerd</div>
                            <div className="rule">• Leeg array <code>[]</code> → effect wordt alleen bij mounting uitgevoerd</div>
                            <div className="rule">• Geen array → effect wordt na ELKE render uitgevoerd</div>
                            <div className="rule">• Meerdere waarden <code>[a, b]</code> → effect wordt uitgevoerd als één van deze waarden verandert</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateDemo; 