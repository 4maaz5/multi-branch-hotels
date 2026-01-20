const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="about-images">
                            <div className="main-image">
                                <img
                                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="LuxuryStay Hotel Lobby"
                                    className="img-fluid rounded-4"
                                />
                            </div>
                            <div className="secondary-images">
                                <img
                                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Hotel Service"
                                    className="img-fluid rounded-3"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Hotel Architecture"
                                    className="img-fluid rounded-3"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-label">
                                <span className="label-text">About DURRAMAH</span>
                            </div>
                            <h2 className="about-title">Redefining Luxury Hospitality Since 1995</h2>

                            <p className="about-description">
                                For over 25 years, LuxuryStay has been at the forefront of luxury hospitality,
                                creating unforgettable experiences for discerning travelers worldwide. Our journey
                                began with a single boutique hotel in Paris and has since evolved into a global
                                collection of 24 exquisite properties across 18 countries.
                            </p>

                            <div className="about-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">Award-Winning Excellence</h4>
                                        <p className="feature-text">47 international hospitality awards</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-globe-americas"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">Global Presence</h4>
                                        <p className="feature-text">24 properties across 18 countries</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">Guest Satisfaction</h4>
                                        <p className="feature-text">98% guest satisfaction rate</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-leaf"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">Sustainable Luxury</h4>
                                        <p className="feature-text">Eco-friendly practices since 2010</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-number">25+</div>
                                    <div className="stat-label">Years of Excellence</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">2M+</div>
                                    <div className="stat-label">Happy Guests</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Team Members</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default About;