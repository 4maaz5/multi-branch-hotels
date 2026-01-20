const Guest = () => {
    return (

        <div className="guest-reviews">
            <div className="container">
                <div className="reviews-header text-center mb-5">
                    <h2 className="reviews-title">Guest Experiences</h2>
                    <p className="reviews-subtitle">What our valued guests say about their stay at DURRAMAH</p>
                    <div className="overall-rating">
                        <div className="rating-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                      
                    </div>
                </div>

                <div className="reviews-grid">
                    {/* Review 1 - Featured */}
                    <div className="review-card featured">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                        alt="Michael & Sarah Johnson"
                                        className="avatar-image"
                                    />
                                </div>
                                <div className="reviewer-details">
                                    <h4 className="reviewer-name">Michael & Sarah Johnson</h4>
                                    <p className="reviewer-location">
                                        <i className="fas fa-map-marker-alt"></i> New York, USA
                                    </p>
                                </div>
                            </div>
                            <div className="review-rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="review-date">2 weeks ago</span>
                            </div>
                        </div>

                        <div className="review-content">
                            <h3 className="review-title">Perfect Honeymoon Experience</h3>
                            <p className="review-text">
                                "Our honeymoon at the Maldives property was nothing short of magical. From the overwater villa
                                with glass floors to the personalized butler service, every detail was perfect. The sunset dinner
                                on the private beach was the highlight of our stay!"
                            </p>
                            <div className="review-stay">
                                <span className="stay-info">
                                    <i className="fas fa-bed"></i> Presidential Suite
                                </span>
                                <span className="stay-info">
                                    <i className="fas fa-moon"></i> 7 Nights
                                </span>
                                <span className="stay-info">
                                    <i className="fas fa-map-pin"></i> Maldives Branch
                                </span>
                            </div>
                        </div>

                        <div className="review-footer">
                            <div className="helpful-count">
                                <i className="fas fa-thumbs-up"></i>
                                <span>48 people found this helpful</span>
                            </div>
                            <button className="read-more-btn">
                                Read Full Story <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                        alt="Robert Chen"
                                        className="avatar-image"
                                    />
                                </div>
                                <div className="reviewer-details">
                                    <h4 className="reviewer-name">Robert Chen</h4>
                                    <p className="reviewer-location">
                                        <i className="fas fa-map-marker-alt"></i> Singapore
                                    </p>
                                </div>
                            </div>
                            <div className="review-rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="review-date">1 month ago</span>
                            </div>
                        </div>

                        <div className="review-content">
                            <h3 className="review-title">Exceptional Business Stay</h3>
                            <p className="review-text">
                                "As a frequent business traveler, I've stayed in countless hotels. The Dubai branch stands out
                                for its impeccable service. The executive lounge and 24-hour business center made my work
                                seamless. The view of the Burj Khalifa from my room was breathtaking."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Business Travel</span>
                                <span className="tag">Excellent Service</span>
                            </div>
                        </div>

                        <div className="review-footer">
                            <div className="helpful-count">
                                <i className="fas fa-thumbs-up"></i>
                                <span>32 people found this helpful</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    <img
                                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                        alt="The Williams Family"
                                        className="avatar-image"
                                    />
                                </div>
                                <div className="reviewer-details">
                                    <h4 className="reviewer-name">The Williams Family</h4>
                                    <p className="reviewer-location">
                                        <i className="fas fa-map-marker-alt"></i> London, UK
                                    </p>
                                </div>
                            </div>
                            <div className="review-rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <span className="review-date">3 weeks ago</span>
                            </div>
                        </div>

                        <div className="review-content">
                            <h3 className="review-title">Perfect Family Vacation</h3>
                            <p className="review-text">
                                "Traveling with three kids can be challenging, but the Bali resort made it effortless. The kids'
                                club was amazing, and the connecting rooms gave us both privacy and family time. The staff went
                                above and beyond to accommodate our needs."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Family Friendly</span>
                                <span className="tag">Kids Activities</span>
                            </div>
                        </div>

                        <div className="review-footer">
                            <div className="helpful-count">
                                <i className="fas fa-thumbs-up"></i>
                                <span>41 people found this helpful</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 4 */}
                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                        alt="Emma Rodriguez"
                                        className="avatar-image"
                                    />
                                </div>
                                <div className="reviewer-details">
                                    <h4 className="reviewer-name">Emma Rodriguez</h4>
                                    <p className="reviewer-location">
                                        <i className="fas fa-map-marker-alt"></i> Paris, France
                                    </p>
                                </div>
                            </div>
                            <div className="review-rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="review-date">4 days ago</span>
                            </div>
                        </div>

                        <div className="review-content">
                            <h3 className="review-title">Romantic Anniversary Getaway</h3>
                            <p className="review-text">
                                "Celebrated our 10th anniversary at the Paris branch. The romantic suite with Eiffel Tower views,
                                champagne on arrival, and rose petal turndown service created memories we'll cherish forever.
                                The concierge arranged the perfect Seine river cruise."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Anniversary</span>
                                <span className="tag">Romantic</span>
                            </div>
                        </div>

                        <div className="review-footer">
                            <div className="helpful-count">
                                <i className="fas fa-thumbs-up"></i>
                                <span>29 people found this helpful</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 5 */}
                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                        alt="David Miller"
                                        className="avatar-image"
                                    />
                                </div>
                                <div className="reviewer-details">
                                    <h4 className="reviewer-name">David Miller</h4>
                                    <p className="reviewer-location">
                                        <i className="fas fa-map-marker-alt"></i> Tokyo, Japan
                                    </p>
                                </div>
                            </div>
                            <div className="review-rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <span className="review-date">1 week ago</span>
                            </div>
                        </div>

                        <div className="review-content">
                            <h3 className="review-title">Perfect Solo Retreat</h3>
                            <p className="review-text">
                                "As a solo traveler looking for relaxation, the spa facilities were exceptional. The traditional
                                onsen experience and meditation sessions were rejuvenating. The location was perfect for exploring
                                Tokyo while having a peaceful retreat to return to."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Solo Travel</span>
                                <span className="tag">Spa & Wellness</span>
                            </div>
                        </div>

                        <div className="review-footer">
                            <div className="helpful-count">
                                <i className="fas fa-thumbs-up"></i>
                                <span>19 people found this helpful</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Guest;