import {Link, NavLink} from 'react-router-dom' // NAVLINK PERMITE DECIRME LA PAGINA ACTUAL
export default function Header() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/videos" className="navbar-brand">Videos</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/add-video" className={({isActive})  => isActive ? 'nav-link active': 'nav-link'}>Agregar Video</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className={({isActive})  => isActive ? 'nav-link active': 'nav-link'}>Perfil</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
      </>
    )
  }
  