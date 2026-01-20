const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="logo">
                    <i className="fas fa-hotel logo-icon"></i>
                    <span className="logo-text">LuxuryStay</span>
                </a>

                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="fas fa-bars"></i>
                </div>

                <ul className="nav-menu" id="nav-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Rooms & Suites</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Amenities</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Destinations</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Deals</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>

                <div className="user-actions">
                    <button className="booking-btn" id="bookNowBtn">
                        <i className="fas fa-calendar-check"></i> Book Now
                    </button>
                    <div className="user-icon">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;