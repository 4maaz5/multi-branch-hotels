const Gallery = () => {
    return (
        <div>
            <div className="hotel-gallery">
                <div className="container">
                    <div className="gallery-header text-center mb-5">
                        <h2 className="gallery-title">Visual Elegance</h2>
                        <p className="gallery-subtitle">A curated collection showcasing the beauty of LuxuryStay Hotels</p>
                        <div className="gallery-filter">
                            <button className="filter-btn active">All Spaces</button>
                            <button className="filter-btn">Rooms</button>
                            <button className="filter-btn">Amenities</button>
                            <button className="filter-btn">Dining</button>
                            <button className="filter-btn">Events</button>
                        </div>
                    </div>

                    <div className="gallery-grid">

                        <div className="gallery-item feature">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Luxury Hotel Lobby"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Grand Lobby</h3>
                                        <p className="image-caption">Elegant architecture meets contemporary luxury</p>
                                        <button className="gallery-view-btn">
                                            <i className="fas fa-search-plus"></i> Enlarge
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Infinity Pool"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Infinity Pool</h3>
                                        <p className="image-caption">Panoramic ocean views</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="gallery-item">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Fine Dining Restaurant"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Signature Restaurant</h3>
                                        <p className="image-caption">Gourmet culinary experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="gallery-item vertical">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Luxury Spa"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Wellness Spa</h3>
                                        <p className="image-caption">Holistic relaxation</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="gallery-item">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Presidential Suite Bedroom"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Presidential Suite</h3>
                                        <p className="image-caption">Ultimate luxury accommodation</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="gallery-item">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Rooftop Bar"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Sky Lounge</h3>
                                        <p className="image-caption">Sunset cocktails with city views</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="gallery-item">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Conference Room"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Conference Hall</h3>
                                        <p className="image-caption">State-of-the-art facilities</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="gallery-item vertical">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Garden Terrace"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Garden Terrace</h3>
                                        <p className="image-caption">Tranquil outdoor space</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="gallery-item">
                            <div className="gallery-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Library Lounge"
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="image-title">Library Lounge</h3>
                                        <p className="image-caption">Quiet reading sanctuary</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-footer text-center mt-5">
                        <button className="load-more-btn">
                            <i className="fas fa-images me-2"></i> View More in Gallery
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Gallery;