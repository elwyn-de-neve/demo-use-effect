import UnmountDemo from '../components/UnmountDemo';
import InfoBox from '../components/InfoBox';

function UnmountPage() {
    return (
        <div className="page-container">
            <InfoBox title="📘 useEffect &amp; Cleanup Functies">
                <p>
                    Wanneer je in useEffect resources opent (zoals timers, event listeners of
                    externe verbindingen), moet je deze weer sluiten wanneer de component
                    wordt unmounted.
                </p>
                <p>
                    De <strong>cleanup functie</strong> wordt uitgevoerd wanneer:
                </p>
                <div className="cleanup-timing">
                    <div className="rule">• Voor elke nieuwe uitvoering van het effect (als dependencies veranderen)</div>
                    <div className="rule">• Wanneer de component wordt verwijderd (unmounting)</div>
                </div>
                <p>
                    Zonder cleanup kunnen er <strong>memory leaks</strong> ontstaan!
                </p>
            </InfoBox>

            <UnmountDemo />
        </div>
    );
}

export default UnmountPage; 