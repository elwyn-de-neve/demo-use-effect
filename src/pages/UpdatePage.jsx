import UpdateDemo from '../components/UpdateDemo';
import InfoBox from '../components/InfoBox';

function UpdatePage() {
    return (
        <div className="page-container">
            <InfoBox title="📘 useEffect &amp; Dependencies">
                <p>
                    De <strong>dependency array</strong> in useEffect bepaalt wanneer
                    het effect opnieuw wordt uitgevoerd.
                </p>
                <p>
                    Als een waarde in de dependency array verandert, wordt het effect
                    opnieuw uitgevoerd. Dit is perfect voor scenario's waarin je wilt
                    reageren op wijzigingen in bepaalde state of props.
                </p>
                <p>
                    <strong>Voorbeeld:</strong> Als je een useEffect met een count dependency gebruikt,
                    wordt het effect uitgevoerd bij de eerste render én wanneer de count waarde verandert.
                </p>
            </InfoBox>

            <UpdateDemo />
        </div>
    );
}

export default UpdatePage; 