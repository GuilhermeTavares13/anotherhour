export default function Nav({user, onLogout}) {
    if (!user) {
        return;
    }

    return(
        <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <h2>Another Hour</h2>
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        <p>{user.name}</p>
                    </a>
                    <div className="navbar-dropdown">
                        <button className="navbar-item" onClick={onLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}