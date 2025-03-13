import CrudDemo from '../components/CrudDemo';
import InfoBox from '../components/InfoBox';

function CrudPage() {
    return (
        <div className="page-container">
            <InfoBox title="📘 CRUD Operaties met Axios">
                <p>
                    CRUD staat voor: <strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate,
                    <strong>D</strong>elete. Dit zijn de basis operaties voor het werken met data.
                </p>
                <p>
                    In deze demo gebruiken we <code>axios</code> om API requests te maken naar JSONPlaceholder,
                    een gratis online REST API voor testen en prototyping.
                </p>
                <ul className="crud-list">
                    <li><strong>GET</strong> - Lezen van data (Read)</li>
                    <li><strong>POST</strong> - Aanmaken van data (Create)</li>
                    <li><strong>PUT/PATCH</strong> - Bijwerken van data (Update)</li>
                    <li><strong>DELETE</strong> - Verwijderen van data (Delete)</li>
                </ul>
                <p>
                    Let op hoe we useEffect gebruiken om de GET request alleen bij de mounting fase uit te voeren.
                </p>
            </InfoBox>

            <CrudDemo />
        </div>
    );
}

export default CrudPage; 