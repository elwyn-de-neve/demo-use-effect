import { useEffect, useState } from "react";
import axios from "axios";

function CrudDemo() {
  // API basis URL
  const API_URI = "https://jsonplaceholder.typicode.com/users";

  // State
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Formulier state
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // GET request - Data ophalen bij mounting
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(API_URI);
        setUsers(response.data);
      } catch (err) {
        setError(`Er is iets mis gegaan. Error: ${err.message}`);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchUsers();
  }, []);

  // POST request - Nieuwe gebruiker aanmaken
  const handleCreateUser = async (event) => {
    event.preventDefault();

    if (!newUser.name || !newUser.email) return;

    setIsLoading(true);

    try {
      // Stuur de data naar de server
      const response = await axios.post(API_URI, newUser);
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
      setNewUser({
        name: "",
        email: "",
      });
    } catch (err) {
      setError(err);
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
              {users.map((user) => (
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
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  placeholder="Voer naam in"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  placeholder="Voer email in"
                  required
                />
              </div>
              <button type="button" disabled={isLoading}>
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
