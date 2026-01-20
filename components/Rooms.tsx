const Rooms=()=>{
    return(
        <div className="rooms-portfolio">
  <div className="container">
    <div className="portfolio-header text-center mb-5">
      <h2 className="portfolio-title">Our Signature Rooms</h2>
      <p className="portfolio-subtitle">Experience luxury and comfort in our meticulously designed rooms</p>
      <div className="divider-line"></div>
    </div>

    <div className="row g-4">
      {/* Room 1 - Presidential Suite */}
      <div className="col-md-6 col-lg-4">
        <div className="room-card">
          <div className="room-image-container">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Presidential Suite"
              className="room-image"
            />
            <div className="room-overlay">
              <button className="room-view-btn">
                <i className="fas fa-expand"></i>
              </button>
            </div>
            <div className="room-type-badge">Presidential Suite</div>
          </div>
          <div className="room-info">
            <h3 className="room-name">Presidential Ocean View Suite</h3>
            <p className="room-description">
              Ultimate luxury with panoramic ocean views, private balcony, and exclusive butler service.
            </p>
            <div className="room-specs">
              <div className="spec-item">
                <i className="fas fa-ruler-combined"></i>
                <span>120 m²</span>
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
              <span className="feature-tag">Private Jacuzzi</span>
              <span className="feature-tag">Butler Service</span>
              <span className="feature-tag">Ocean View</span>
            </div>
          </div>
        </div>
      </div>

      {/* Room 2 - Executive Suite */}
      <div className="col-md-6 col-lg-4">
        <div className="room-card">
          <div className="room-image-container">
            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Executive Suite"
              className="room-image"
            />
            <div className="room-overlay">
              <button className="room-view-btn">
                <i className="fas fa-expand"></i>
              </button>
            </div>
            <div className="room-type-badge">Executive Suite</div>
          </div>
          <div className="room-info">
            <h3 className="room-name">Executive Business Suite</h3>
            <p className="room-description">
              Sophisticated workspace with ergonomic furniture, high-speed internet, and city skyline views.
            </p>
            <div className="room-specs">
              <div className="spec-item">
                <i className="fas fa-ruler-combined"></i>
                <span>85 m²</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-user-friends"></i>
                <span>3 Guests</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-bed"></i>
                <span>1 King + 1 Single</span>
              </div>
            </div>
            <div className="room-features">
              <span className="feature-tag">Work Desk</span>
              <span className="feature-tag">Printer Service</span>
              <span className="feature-tag">City View</span>
            </div>
          </div>
        </div>
      </div>

      {/* Room 3 - Honeymoon Suite */}
      <div className="col-md-6 col-lg-4">
        <div className="room-card">
          <div className="room-image-container">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Honeymoon Suite"
              className="room-image"
            />
            <div className="room-overlay">
              <button className="room-view-btn">
                <i className="fas fa-expand"></i>
              </button>
            </div>
            <div className="room-type-badge">Honeymoon Suite</div>
          </div>
          <div className="room-info">
            <h3 className="room-name">Romantic Honeymoon Suite</h3>
            <p className="room-description">
              Intimate setting with rose petal decorations, champagne on arrival, and private balcony.
            </p>
            <div className="room-specs">
              <div className="spec-item">
                <i className="fas fa-ruler-combined"></i>
                <span>75 m²</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-user-friends"></i>
                <span>2 Guests</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-bed"></i>
                <span>1 Canopy Bed</span>
              </div>
            </div>
            <div className="room-features">
              <span className="feature-tag">Romantic Decor</span>
              <span className="feature-tag">Champagne</span>
              <span className="feature-tag">Private Balcony</span>
            </div>
          </div>
        </div>
      </div>

      {/* Room 4 - Family Suite */}
      <div className="col-md-6 col-lg-4">
        <div className="room-card">
          <div className="room-image-container">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Family Suite"
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
            <h3 className="room-name">Premium Family Suite</h3>
            <p className="room-description">
              Spacious accommodation with connecting rooms, kids play area, and family-friendly amenities.
            </p>
            <div className="room-specs">
              <div className="spec-item">
                <i className="fas fa-ruler-combined"></i>
                <span>110 m²</span>
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
              <span className="feature-tag">Connecting Rooms</span>
              <span className="feature-tag">Kids Play Area</span>
              <span className="feature-tag">Kitchenette</span>
            </div>
          </div>
        </div>
      </div>

      {/* Room 5 - Deluxe Room */}
      <div className="col-md-6 col-lg-4">
        <div className="room-card">
          <div className="room-image-container">
            <img
              src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Deluxe Room"
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
            <h3 className="room-name">Deluxe Garden View Room</h3>
            <p className="room-description">
              Comfortable retreat with garden views, modern amenities, and elegant contemporary design.
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
                <span>1 Queen Bed</span>
              </div>
            </div>
            <div className="room-features">
              <span className="feature-tag">Garden View</span>
              <span className="feature-tag">Mini Bar</span>
              <span className="feature-tag">Smart TV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Room 6 - Classic Room */}
      <div className="col-md-6 col-lg-4">
        <div className="room-card">
          <div className="room-image-container">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Classic Room"
              className="room-image"
            />
            <div className="room-overlay">
              <button className="room-view-btn">
                <i className="fas fa-expand"></i>
              </button>
            </div>
            <div className="room-type-badge">Classic Room</div>
          </div>
          <div className="room-info">
            <h3 className="room-name">Classic Heritage Room</h3>
            <p className="room-description">
              Traditional elegance with heritage furnishings, classic decor, and timeless charm.
            </p>
            <div className="room-specs">
              <div className="spec-item">
                <i className="fas fa-ruler-combined"></i>
                <span>40 m²</span>
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
              <span className="feature-tag">Heritage Style</span>
              <span className="feature-tag">Classic Decor</span>
              <span className="feature-tag">Central Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="portfolio-footer text-center mt-5">
      <div className="designer-credit">
        <p className="credit-text">
          <i className="fas fa-palette me-2"></i>
          Interior design by <strong>LuxuryStay Design Studio</strong>
        </p>
      </div>
    </div>
  </div>
</div>


    )
}
export default Rooms;