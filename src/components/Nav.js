const Nav = () => {
    return (<>

<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">:D</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="portfolio.html">Home</a>
                  <a className="nav-link" href="#experience">Experience</a>
                  <a className="nav-link" href="#skills">Skills</a>
                  <a className="nav-link" href="#contact">Contact</a>
                </div>
            </div>
      </div>
    </nav>
    </>);
}
 
export default Nav;