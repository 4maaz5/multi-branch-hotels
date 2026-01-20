const Footer = () => {
    return (
        <footer className="hotel-footer">
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        {/* Company Info */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="footer-brand">
                                <div className="footer-logo">
                                    <i className="fas fa-hotel"></i>
                                    <span className="footer-logo-text">LuxuryStay</span>
                                </div>
                                <p className="footer-description mt-3">
                                    Experience world-class luxury hospitality across our premium hotels
                                    and resorts worldwide. Redefining excellence since 1995.
                                </p>
                                <div className="footer-social mt-4">
                                    <a href="#" className="social-link">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-tripadvisor"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-4 mb-5 mb-md-0">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Home</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Rooms & Suites</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Amenities</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Gallery</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Special Offers</a></li>
                            </ul>
                        </div>

                        {/* Our Hotels */}
                        <div className="col-lg-2 col-md-4 mb-5 mb-md-0">
                            <h4 className="footer-heading">Our Hotels</h4>
                            <ul className="footer-links">
                                <li><a href="#"><i className="fas fa-map-marker-alt"></i> Maldives</a></li>
                                <li><a href="#"><i className="fas fa-map-marker-alt"></i> Dubai</a></li>
                                <li><a href="#"><i className="fas fa-map-marker-alt"></i> Paris</a></li>
                                <li><a href="#"><i className="fas fa-map-marker-alt"></i> Bali</a></li>
                                <li><a href="#"><i className="fas fa-map-marker-alt"></i> New York</a></li>
                                <li><a href="#"><i className="fas fa-map-marker-alt"></i> Tokyo</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-4 col-md-4">
                            <h4 className="footer-heading">Contact Us</h4>
                            <ul className="footer-contact">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>LuxuryStay Headquarters<br />123 Park Avenue, New York, NY 10022</span>
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i>
                                    <span>Reservations: +1 (800) 123-4567</span>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <span>reservations@luxurystay.com</span>
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    <span>24/7 Customer Support</span>
                                </li>
                            </ul>

                            {/* Newsletter Subscription */}
                            <div className="newsletter mt-4">
                                <h5 className="newsletter-title">Stay Updated</h5>
                                <p className="newsletter-text">Subscribe to our newsletter for exclusive offers</p>
                                <div className="newsletter-form">
                                    <input
                                        type="email"
                                        className="newsletter-input"
                                        placeholder="Your email address"
                                    />
                                    <button className="newsletter-btn">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            <p>&copy; {new Date().getFullYear()} LuxuryStay Hotels & Resorts. All Rights Reserved.</p>
                        </div>
                        <div className="footer-legal">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Accessibility</a>
                        </div>
                        <div className="payment-methods">
                            <i className="fab fa-cc-visa" title="Visa"></i>
                            <i className="fab fa-cc-mastercard" title="Mastercard"></i>
                            <i className="fab fa-cc-amex" title="American Express"></i>
                            <i className="fab fa-cc-paypal" title="PayPal"></i>
                            <i className="fab fa-cc-apple-pay" title="Apple Pay"></i>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer;