import { useState, useEffect } from 'react';
import axios from 'axios';

function CrudDemo() {
    // API basis URL
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    // State
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Formulier state
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    // GET request - Data ophalen bij mounting
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(API_URL);
                setUsers(response.data);
            } catch (err) {
                setError('Fout bij ophalen gebruikers');
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []); // Lege dependency array = alleen bij mounting

    // POST request - Nieuwe gebruiker aanmaken
    const handleCreateUser = async (e) => {
        e.preventDefault();

        if (!newUser.name || !newUser.email) return;

        setIsLoading(true);

        try {
            // Stuur data naar de server
            const response = await axios.post(API_URL, newUser);

            // SIMULATIE: Update lokale state om nieuwe gebruiker te tonen
            // ------------------------------------------------------
            // OPMERKING: In een echte applicatie zou deze stap niet strikt
            // noodzakelijk zijn, maar bij JSONPlaceholder (een mock API)
            // worden nieuwe items niet echt opgeslagen op de server.
            // We simuleren hier het resultaat door de lokale state bij te werken.
            // Een alternatief zou zijn om na het toevoegen een nieuwe GET
            // request te doen om de bijgewerkte lijst op te halen.
            setUsers([...users, { ...response.data, id: Date.now() }]);
            // ------------------------------------------------------

            // Reset formulier
            setNewUser({ name: '', email: '' });
        } catch (err) {
            setError('Fout bij aanmaken gebruiker');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="crud-demo">
            <h2>CRUD Operaties met Axios</h2>

            {error && <div className="error-message">{error}</div>}

            <div className="demo-row">
                {/* GET - Gebruikers tonen */}
                <div className="demo-card">
                    <h3>GET - Gebruikers Ophalen</h3>
                    {isLoading ? (
                        <p>Laden...</p>
                    ) : (
                        <ul className="gebruikers-lijst">
                            {users.map(user => (
                                <li key={user.id} className="gebruiker-item">
                                    <strong>{user.name}</strong> - {user.email}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Formulier */}
                <div className="demo-operaties">
                    {/* POST - Nieuwe gebruiker */}
                    <div className="demo-card">
                        <h3>POST - Nieuwe Gebruiker</h3>
                        <form onSubmit={handleCreateUser}>
                            <div className="form-group">
                                <label>Naam:</label>
                                <input
                                    type="text"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    placeholder="Voer naam in"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    placeholder="Voer email in"
                                />
                            </div>

                            <button type="submit" disabled={isLoading}>
                                Gebruiker Toevoegen
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrudDemo; 