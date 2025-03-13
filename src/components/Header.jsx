import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="app-header">
            <h1>React Lifecycle &amp; CRUD Demo</h1>
            <nav className="app-nav">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                } end>
                    📌 Mounting Demo
                </NavLink>
                <NavLink to="/crud" className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                    🔄 CRUD Operaties
                </NavLink>
            </nav>
        </header>
    );
}

export default Header; 