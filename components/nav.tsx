const Navbar = () => {
    return (
        <nav className="navbar" id="home">
            <div className="nav-container">
                <a href="#home" className="logo">
                    <i className="fas fa-hotel logo-icon"></i>
                    <span className="logo-text">DURRAMAH</span>
                </a>

                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="fas fa-bars"></i>
                </div>

                <ul className="nav-menu" id="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#branches" className="nav-link">Branches</a>
                    </li>
                    <li className="nav-item">
                        <a href="#rooms" className="nav-link">Rooms</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="nav-link">Gallery</a>
                    </li>
                    <button className="booking-btn" id="bookNowBtn">
                        <i className="fas fa-calendar-check"></i> EN / AR
                    </button>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;