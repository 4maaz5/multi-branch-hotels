const Content = () => {
    return (
        <div className="branches-container">
            <div className="container">
                <div className="branches-header text-center mb-5">
                    <h2 className="branches-title">Our Luxury Branches</h2>
                    <p className="branches-subtitle">Experience world-class hospitality at our premium locations worldwide</p>
                    <div className="divider"></div>
                </div>

                <div className="row g-4">
                    {/* Branch 1 - Maldives */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Maldives Overwater Villa"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag">Premium</span>
                                    <div className="branch-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="rating-text">4.7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Maldives</span>
                                </div>
                                <h3 className="branch-name">LuxuryStay Overwater Villas</h3>
                                <p className="branch-description">
                                    Private overwater bungalows with glass floors, direct ocean access, and sunset views.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-wifi"></i> Free WiFi</span>
                                    <span><i className="fas fa-swimming-pool"></i> Infinity Pool</span>
                                    <span><i className="fas fa-utensils"></i> 5 Restaurants</span>
                                </div>
                                <div className="branch-footer">
                                    <div className="branch-price">
                                        <span className="price-from">From</span>
                                        <span className="price-amount">$899</span>
                                        <span className="price-night">/ night</span>
                                    </div>
                                    <button className="branch-book-btn">
                                        <i className="fas fa-calendar-alt me-2"></i> Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 2 - Dubai */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Dubai Skyline Hotel"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag trending">Trending</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Dubai, UAE</span>
                                </div>
                                <h3 className="branch-name">Burj Al LuxuryStay</h3>
                                <p className="branch-description">
                                    Sky-high luxury in the heart of Downtown Dubai with panoramic city and fountain views.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-spa"></i> Luxury Spa</span>
                                    <span><i className="fas fa-dumbbell"></i> Gym</span>
                                    <span><i className="fas fa-cocktail"></i> Rooftop Bar</span>
                                </div>
                                <div className="branch-footer">
                                    <div className="branch-price">
                                        <span className="price-from">From</span>
                                        <span className="price-amount">$750</span>
                                        <span className="price-night">/ night</span>
                                    </div>
                                    <button className="branch-book-btn">
                                        <i className="fas fa-calendar-alt me-2"></i> Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 3 - Paris */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Paris Luxury Hotel"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag romantic">Romantic</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Paris, France</span>
                                </div>
                                <h3 className="branch-name">Champs-Élysées LuxuryStay</h3>
                                <p className="branch-description">
                                    Historic elegance meets modern luxury steps away from the Arc de Triomphe.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-wine-glass-alt"></i> Wine Cellar</span>
                                    <span><i className="fas fa-parking"></i> Valet Parking</span>
                                    <span><i className="fas fa-concierge-bell"></i> 24/7 Concierge</span>
                                </div>
                                <div className="branch-footer">
                                    <div className="branch-price">
                                        <span className="price-from">From</span>
                                        <span className="price-amount">$650</span>
                                        <span className="price-night">/ night</span>
                                    </div>
                                    <button className="branch-book-btn">
                                        <i className="fas fa-calendar-alt me-2"></i> Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 4 - Bali */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Bali Resort"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag beachfront">Beachfront</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Bali, Indonesia</span>
                                </div>
                                <h3 className="branch-name">Ubud LuxuryStay Retreat</h3>
                                <p className="branch-description">
                                    Tropical paradise with private villas, rice terrace views, and traditional Balinese spa.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-umbrella-beach"></i> Private Beach</span>
                                    <span><i className="fas fa-yoga"></i> Yoga Studio</span>
                                    <span><i className="fas fa-tree"></i> Garden Views</span>
                                </div>
                                <div className="branch-footer">
                                    <div className="branch-price">
                                        <span className="price-from">From</span>
                                        <span className="price-amount">$550</span>
                                        <span className="price-night">/ night</span>
                                    </div>
                                    <button className="branch-book-btn">
                                        <i className="fas fa-calendar-alt me-2"></i> Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 5 - New York */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="New York City Hotel"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag business">Business</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">New York, USA</span>
                                </div>
                                <h3 className="branch-name">Times Square LuxuryStay</h3>
                                <p className="branch-description">
                                    Iconic location in the heart of Manhattan with Broadway views and luxury amenities.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-briefcase"></i> Business Center</span>
                                    <span><i className="fas fa-cookie-bite"></i> 24/7 Room Service</span>
                                    <span><i className="fas fa-theater-masks"></i> Theater Packages</span>
                                </div>
                                <div className="branch-footer">
                                    <div className="branch-price">
                                        <span className="price-from">From</span>
                                        <span className="price-amount">$850</span>
                                        <span className="price-night">/ night</span>
                                    </div>
                                    <button className="branch-book-btn">
                                        <i className="fas fa-calendar-alt me-2"></i> Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 6 - Tokyo */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Tokyo Modern Hotel"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag new">New</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Tokyo, Japan</span>
                                </div>
                                <h3 className="branch-name">Shibuya LuxuryStay Tower</h3>
                                <p className="branch-description">
                                    Modern sophistication with cutting-edge technology and panoramic city views.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-robot"></i> Smart Rooms</span>
                                    <span><i className="fas fa-hot-tub"></i> Onsen Spa</span>
                                    <span><i className="fas fa-subway"></i> Metro Access</span>
                                </div>
                                <div className="branch-footer">
                                    <div className="branch-price">
                                        <span className="price-from">From</span>
                                        <span className="price-amount">$720</span>
                                        <span className="price-night">/ night</span>
                                    </div>
                                    <button className="branch-book-btn">
                                        <i className="fas fa-calendar-alt me-2"></i> Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-outline-primary btn-lg">
                        <i className="fas fa-globe-americas me-2"></i> View All 24 Branches Worldwide
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Content;