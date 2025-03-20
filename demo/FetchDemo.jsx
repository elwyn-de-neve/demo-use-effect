import { useState, useEffect } from "react";
import axios from "axios";

function FetchComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // AbortController aanmaken om requests te kunnen cancelen
        const controller = new AbortController();

        const fetchData = async () => {
            setError(null);
            setLoading(true);

            try {
                // Request uitvoeren met inline configuratie
                const response = await axios.get(
                    "https://httpstat.us/200?sleep=3000",
                    { signal: controller.signal }
                );

                // Gegevens updaten na succesvolle request
                setData(response.data);
            } catch (err) {
                // Controleren of request gecancelled is door AbortController
                if (axios.isCancel(err)) {
                    console.log("Request is gecancelled door unmounting:", err.message);
                } else {
                    // Andere fouten afhandelen
                    setError(err.message || "Er is een fout opgetreden");
                }
            } finally {
                setLoading(false);
            }
        };

        // Start het laden van gegevens
        fetchData();

        // Cleanup functie - wordt uitgevoerd bij unmounting
        return () => {
            console.log("Component wordt unmounted - request wordt gecancelled");
            controller.abort("Component unmounted");
        };
    }, []); // Leeg dependency array - effect wordt alleen uitgevoerd bij mounting

    return (
        <div className="fetch-status-container">
            <div className="fetch-status">
                <p><strong>Status:</strong> {
                    loading ? "Wordt geladen..." :
                        error ? "Fout opgetreden" :
                            data ? "Voltooid" : "Idle"
                }</p>
                {loading && <p className="loading-indicator">Gegevens worden geladen...</p>}
                {error && <p className="error-message">Fout: {error}</p>}
                {data && <p className="success-message">Gegevens ontvangen!</p>}
            </div>
        </div>
    );
}

function FetchDemo() {
    const [showRequest, setShowRequest] = useState(false);

    return (
        <div className="fetch-demo">
            <h2>API Request Cancellation Demonstratie</h2>

            <div className="demo-row">
                <div className="demo-card">
                    <div>
                        <h3>✅ Requests met AbortController</h3>
                        <p className="fetch-description">
                            Deze demo toont hoe je <code>AbortController</code> gebruikt om API requests netjes op te ruimen
                            wanneer een component wordt unmounted tijdens een lopend request.
                        </p>

                        <div className="code-example">
                            <pre>
                                {`useEffect(() => {
  const controller = new AbortController();
  
  const fetchData = async () => {
    setLoading(true);

    try {  
      const response = await axios.get(url, {
        signal: controller.signal
      });
      // Verwerk data...
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Request gecancelled");
      } else {
        // Verwerk fouten...
      }
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
  
  // Cleanup functie
  return () => {
    controller.abort();
  };
}, []);`}
                            </pre>
                        </div>
                    </div>

                    <div className="fetch-controls">
                        <div className="fetch-buttons">
                            <button
                                className="demo-button"
                                onClick={() => setShowRequest(!showRequest)}
                            >
                                {showRequest ? "Verberg Request (Unmount)" : "Start Request (Mount)"}
                            </button>
                        </div>

                        <div className="fetch-container">
                            {showRequest && (
                                <div className="fetch-item">
                                    <h4>API Request</h4>
                                    <p className="unmount-hint">
                                        Klik op "Verberg Request" tijdens het laden om te zien hoe de
                                        AbortController het request netjes opruimt.
                                    </p>
                                    <FetchComponent />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="demo-card">
                    <h3>📋 Waarom AbortController?</h3>

                    <div className="explanation">
                        <p>
                            Zonder AbortController kunnen er verschillende problemen ontstaan:
                        </p>

                        <div className="cleanup-timing">
                            <div className="rule">• <strong>Memory Leaks</strong> - Afgeronde requests proberen state te updaten van verwijderde componenten</div>
                            <div className="rule">• <strong>Netwerkverbindingen</strong> - Onnodige requests blijven actief op de achtergrond</div>
                            <div className="rule">• <strong>Prestatieproblemen</strong> - Onnodig gebruik van bandbreedte en verwerkingstijd</div>
                        </div>

                        <p>
                            AbortController maakt deel uit van de Fetch API standaard en werkt ook met Axios via de <code>signal</code> property.
                            De cleanup functie in useEffect is de perfecte plek om requests te annuleren wanneer de component unmount.
                        </p>
                    </div>

                    <div className="warning">
                        <p>⚠️ Vergeet niet om API requests op te ruimen bij unmounting om memory leaks te voorkomen!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FetchDemo; 