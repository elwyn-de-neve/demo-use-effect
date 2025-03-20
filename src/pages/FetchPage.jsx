import FetchDemo from '../components/FetchDemo';
import InfoBox from '../components/InfoBox';

function FetchPage() {
    return (
        <div className="page-container">
            <InfoBox title="📡 useEffect &amp; API Requests">
                <p>
                    Het ophalen van gegevens via API requests is een veelvoorkomend gebruik van <code>useEffect</code>.
                    Het is belangrijk om lopende requests op te ruimen wanneer een component wordt unmounted.
                </p>
                <p>
                    De <strong>AbortController</strong> kan worden gebruikt om API requests te annuleren bij:
                </p>
                <div className="cleanup-timing">
                    <div className="rule">• Unmounting van de component</div>
                    <div className="rule">• Veranderingen in dependencies die nieuwe requests veroorzaken</div>
                    <div className="rule">• Gebruikersacties zoals navigatie weg van de pagina</div>
                </div>
                <p>
                    Zonder proper opruimen van requests kunnen <strong>memory leaks</strong> en onnodige netwerkactiviteit ontstaan!
                </p>
            </InfoBox>

            <FetchDemo />
        </div>
    );
}

export default FetchPage; 