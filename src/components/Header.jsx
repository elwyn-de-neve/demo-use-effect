import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="app-header">
            <h1>React Lifecycle &amp; CRUD Demo</h1>
            <nav className="app-nav">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                } end>
                    📌 Mounting
                </NavLink>
                <NavLink to="/update" className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                    🔄 Update
                </NavLink>
                <NavLink to="/unmount" className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                    🧹 Unmount
                </NavLink>
                <NavLink to="/fetch" className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                    📡 API Requests
                </NavLink>
                {/* <NavLink to="/crud" className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                    🔄 CRUD
                </NavLink> */}
            </nav>
        </header>
    );
}

export default Header; 