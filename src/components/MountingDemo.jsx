import { useEffect, useState } from "react";

function MountingDemo() {
  // State voor onze demo
  const [mountingTime, setMountingTime] = useState("");
  const [buttonClickTime, setButtonClickTime] = useState("");
  const [counter, setCounter] = useState(0);

  // Functie die we handmatig kunnen aanroepen
  const executeManually = () => {
    setButtonClickTime(`${new Date().toLocaleTimeString()}`);
    setCounter((prev) => prev + 1);
  };

  // Deze code wordt alleen uitgevoerd tijdens mounting
  useEffect(() => {
    setMountingTime(`${new Date().toLocaleTimeString()}`);
  }, []); // Lege dependency array = alleen bij mounting

  return (
    <div className="mounting-demo">
      <h2>Mounting Demonstratie</h2>

      <div className="demo-row">
        {/* Linker kolom: Zonder useEffect */}
        <div className="demo-card">
          <h3>🚫 Code zonder useEffect</h3>
          <p>
            Als we code uitvoeren bij elke render en daarbij de state updaten,
            veroorzaakt dit een oneindige loop. Daarom gebruiken we hier een
            button.
          </p>
          <button onClick={executeManually} className="demo-button">
            Voer code uit zonder useEffect
          </button>
          <p>
            <strong>Resultaat:</strong> {buttonClickTime}
          </p>
          <p>
            <strong>Aantal keer uitgevoerd:</strong> {counter}
          </p>
        </div>

        {/* Rechter kolom: Met useEffect */}
        <div className="demo-card">
          <h3>✅ Code met useEffect</h3>
          <p>
            <strong>Resultaat:</strong> {mountingTime}
          </p>
          <p className="explanation">
            useEffect met een lege dependency array wordt alleen uitgevoerd na
            de eerste render (mounting). Dit is perfect voor initialisatie, API
            calls, of het opzetten van event listeners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MountingDemo;
