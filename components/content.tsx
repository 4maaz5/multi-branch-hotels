
const Content = () => {
    return (
        <div className="branches-container" id="branches">
            <div className="container">
                <div className="branches-header text-center mb-5">
                    <h2 className="branches-title">Our Saudi Branches</h2>
                    <p className="branches-subtitle">
                        Experience authentic Saudi hospitality across our premium locations in the Kingdom
                    </p>
                    <div className="divider"></div>
                </div>

                <div className="row g-4">

                    {/* Branch 1 - Riyadh */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                    alt="Riyadh Luxury Hotel"
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
                                        <span className="rating-text">4.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Riyadh, Saudi Arabia</span>
                                </div>
                                <h3 className="branch-name">Durramah Riyadh Central</h3>
                                <p className="branch-description">
                                    A modern luxury hotel in the heart of Riyadh, designed for business and family stays.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-wifi"></i> Free WiFi</span>
                                    <span><i className="fas fa-briefcase"></i> Business Center</span>
                                    <span><i className="fas fa-utensils"></i> Fine Dining</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 2 - Jeddah */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                                    alt="Jeddah Corniche Hotel"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag trending">Sea View</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Jeddah, Saudi Arabia</span>
                                </div>
                                <h3 className="branch-name">Durramah Jeddah Corniche</h3>
                                <p className="branch-description">
                                    Elegant seaside hospitality along the Red Sea with stunning sunset views.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-water"></i> Sea View</span>
                                    <span><i className="fas fa-spa"></i> Luxury Spa</span>
                                    <span><i className="fas fa-swimming-pool"></i> Infinity Pool</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 3 - Makkah */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
                                    alt="Makkah Hotel Near Haram"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag">Spiritual</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Makkah, Saudi Arabia</span>
                                </div>
                                <h3 className="branch-name">Durramah Makkah View</h3>
                                <p className="branch-description">
                                    Comfortable and peaceful accommodation near the Holy Mosque for Umrah and Hajj guests.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-mosque"></i> Haram Proximity</span>
                                    <span><i className="fas fa-concierge-bell"></i> 24/7 Service</span>
                                    <span><i className="fas fa-coffee"></i> Arabic Lounge</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 4 - Madinah */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?auto=format&fit=crop&w=800&q=80"
                                    alt="Madinah Hotel"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag">Sacred</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">Madinah, Saudi Arabia</span>
                                </div>
                                <h3 className="branch-name">Durramah Madinah Serenity</h3>
                                <p className="branch-description">
                                    A serene stay near Al-Masjid an-Nabawi designed for spiritual comfort and peace.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-mosque"></i> Mosque Access</span>
                                    <span><i className="fas fa-bed"></i> Family Rooms</span>
                                    <span><i className="fas fa-shuttle-van"></i> Shuttle Service</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 5 - AlUla */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">

                                <img
                                    src="https://images.unsplash.com/photo-1610878180933-123728745d22?auto=format&fit=crop&w=800&q=80"
                                    alt="AlUla Desert Resort"
                                    className="branch-image"
                                />
                                <div className="branch-overlay">
                                    <span className="branch-tag">Heritage</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">AlUla, Saudi Arabia</span>
                                </div>
                                <h3 className="branch-name">Durramah AlUla Heritage Resort</h3>
                                <p className="branch-description">
                                    A unique luxury desert retreat surrounded by ancient history and breathtaking landscapes.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-mountain"></i> Desert Views</span>
                                    <span><i className="fas fa-leaf"></i> Eco Luxury</span>
                                    <span><i className="fas fa-campground"></i> Cultural Tours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branch 6 - NEOM */}
                    <div className="col-md-6 col-lg-4">
                        <div className="branch-card">
                            <div className="branch-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="NEOM Future City Saudi Arabia"
                                    className="branch-image"
                                />

                                <div className="branch-overlay">
                                    <span className="branch-tag new">Future</span>
                                </div>
                            </div>
                            <div className="branch-content">
                                <div className="branch-location">
                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                    <span className="branch-country">NEOM, Saudi Arabia</span>
                                </div>
                                <h3 className="branch-name">Durramah NEOM Horizon</h3>
                                <p className="branch-description">
                                    A next-generation luxury experience aligned with Saudi Vision 2030 innovation.
                                </p>
                                <div className="branch-features">
                                    <span><i className="fas fa-robot"></i> Smart Rooms</span>
                                    <span><i className="fas fa-solar-panel"></i> Sustainable Energy</span>
                                    <span><i className="fas fa-wifi"></i> Ultra-Fast Internet</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
export default Content;