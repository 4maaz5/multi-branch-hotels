const Rooms = () => {
  return (
    <div className="rooms-portfolio" id="rooms">
      <div className="container">
        <div className="portfolio-header text-center mb-5">
          <h2 className="portfolio-title">Our Signature Rooms in Saudi Arabia</h2>
          <p className="portfolio-subtitle">
            Experience authentic Saudi luxury inspired by culture, heritage, and modern comfort
          </p>
          <div className="divider-line"></div>
        </div>

        <div className="row g-4">
          {/* Room 1 - Royal Suite */}
          <div className="col-md-6 col-lg-4">
            <div className="room-card">
              <div className="room-image-container">
                <img
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Royal Saudi Suite"
                  className="room-image"
                />
                <div className="room-overlay">
                  <button className="room-view-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
                <div className="room-type-badge">Royal Suite</div>
              </div>
              <div className="room-info">
                <h3 className="room-name">Royal Arabian Suite</h3>
                <p className="room-description">
                  A prestigious royal suite inspired by Saudi elegance with panoramic views and private majlis seating.
                </p>
                <div className="room-specs">
                  <div className="spec-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>130 m²</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-user-friends"></i>
                    <span>4 Guests</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-bed"></i>
                    <span>2 King Beds</span>
                  </div>
                </div>
                <div className="room-features">
                  <span className="feature-tag">Private Majlis</span>
                  <span className="feature-tag">VIP Service</span>
                  <span className="feature-tag">City View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room 2 - Business Suite */}
          <div className="col-md-6 col-lg-4">
            <div className="room-card">
              <div className="room-image-container">
                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business Suite Saudi"
                  className="room-image"
                />
                <div className="room-overlay">
                  <button className="room-view-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
                <div className="room-type-badge">Business Suite</div>
              </div>
              <div className="room-info">
                <h3 className="room-name">Saudi Executive Business Suite</h3>
                <p className="room-description">
                  Designed for executives visiting Riyadh and Jeddah with modern workspace and high-speed connectivity.
                </p>
                <div className="room-specs">
                  <div className="spec-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>90 m²</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-user-friends"></i>
                    <span>3 Guests</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-bed"></i>
                    <span>1 King + Sofa Bed</span>
                  </div>
                </div>
                <div className="room-features">
                  <span className="feature-tag">Work Desk</span>
                  <span className="feature-tag">Prayer Area</span>
                  <span className="feature-tag">City Skyline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room 3 - Honeymoon */}
          <div className="col-md-6 col-lg-4">
            <div className="room-card">
              <div className="room-image-container">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Honeymoon Suite Saudi"
                  className="room-image"
                />
                <div className="room-overlay">
                  <button className="room-view-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
                <div className="room-type-badge">Honeymoon</div>
              </div>
              <div className="room-info">
                <h3 className="room-name">Saudi Honeymoon Suite</h3>
                <p className="room-description">
                  A romantic Saudi-style suite perfect for newlyweds with privacy and luxurious comfort.
                </p>
                <div className="room-specs">
                  <div className="spec-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>80 m²</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-user-friends"></i>
                    <span>2 Guests</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-bed"></i>
                    <span>1 King Bed</span>
                  </div>
                </div>
                <div className="room-features">
                  <span className="feature-tag">Private Balcony</span>
                  <span className="feature-tag">Romantic Setup</span>
                  <span className="feature-tag">Luxury Bath</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room 4 - Family */}
          <div className="col-md-6 col-lg-4">
            <div className="room-card">
              <div className="room-image-container">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Family Room Saudi"
                  className="room-image"
                />
                <div className="room-overlay">
                  <button className="room-view-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
                <div className="room-type-badge">Family Suite</div>
              </div>
              <div className="room-info">
                <h3 className="room-name">Saudi Family Suite</h3>
                <p className="room-description">
                  Spacious family suite ideal for Saudi families with separate seating and comfort-focused layout.
                </p>
                <div className="room-specs">
                  <div className="spec-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>115 m²</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-user-friends"></i>
                    <span>6 Guests</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-bed"></i>
                    <span>3 Queen Beds</span>
                  </div>
                </div>
                <div className="room-features">
                  <span className="feature-tag">Family Seating</span>
                  <span className="feature-tag">Kids Friendly</span>
                  <span className="feature-tag">Large Bathroom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room 5 - Deluxe */}
          <div className="col-md-6 col-lg-4">
            <div className="room-card">
              <div className="room-image-container">
                <img
                  src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Deluxe Room Saudi"
                  className="room-image"
                />
                <div className="room-overlay">
                  <button className="room-view-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
                <div className="room-type-badge">Deluxe Room</div>
              </div>
              <div className="room-info">
                <h3 className="room-name">Deluxe Saudi Comfort Room</h3>
                <p className="room-description">
                  A modern Saudi-inspired room offering comfort, elegance, and peaceful surroundings.
                </p>
                <div className="room-specs">
                  <div className="spec-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>50 m²</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-user-friends"></i>
                    <span>2 Guests</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-bed"></i>
                    <span>1 Queen Bed</span>
                  </div>
                </div>
                <div className="room-features">
                  <span className="feature-tag">Prayer Mat</span>
                  <span className="feature-tag">Smart TV</span>
                  <span className="feature-tag">Mini Bar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room 6 - Heritage */}
          <div className="col-md-6 col-lg-4">
            <div className="room-card">
              <div className="room-image-container">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Heritage Room Saudi"
                  className="room-image"
                />
                <div className="room-overlay">
                  <button className="room-view-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
                <div className="room-type-badge">Heritage Room</div>
              </div>
              <div className="room-info">
                <h3 className="room-name">Saudi Heritage Room</h3>
                <p className="room-description">
                  Traditional Saudi décor inspired by Najdi heritage with a modern luxury touch.
                </p>
                <div className="room-specs">
                  <div className="spec-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>45 m²</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-user-friends"></i>
                    <span>2 Guests</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-bed"></i>
                    <span>1 Double Bed</span>
                  </div>
                </div>
                <div className="room-features">
                  <span className="feature-tag">Najdi Style</span>
                  <span className="feature-tag">Cultural Design</span>
                  <span className="feature-tag">Central Location</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>



  )
}
export default Rooms;