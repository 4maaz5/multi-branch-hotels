const Guest = () => {
    return (

        <div className="guest-reviews">
            <div className="container">
                <div className="reviews-header text-center mb-5">
                    <h2 className="reviews-title">Guest Experiences</h2>
                    <p className="reviews-subtitle">
                        What our valued guests say about their stay at DURRAMAH Hotels & Resorts across Saudi Arabia
                    </p>
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
                                        <i className="fas fa-map-marker-alt"></i> California, USA
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
                            <h3 className="review-title">Unforgettable Saudi Honeymoon</h3>
                            <p className="review-text">
                                "Our honeymoon at DURRAMAH was beyond expectations. The Arabian-inspired suite, private balcony,
                                and exceptional hospitality made our stay truly special. From sunset views to personalized service,
                                everything reflected luxury and authentic Saudi warmth."
                            </p>
                            <div className="review-stay">
                                <span className="stay-info">
                                    <i className="fas fa-bed"></i> Royal Suite
                                </span>
                                <span className="stay-info">
                                    <i className="fas fa-moon"></i> 6 Nights
                                </span>
                                <span className="stay-info">
                                    <i className="fas fa-map-pin"></i> Riyadh Branch
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
                            <h3 className="review-title">Ideal Business Stay in Riyadh</h3>
                            <p className="review-text">
                                "DURRAMAH exceeded my expectations for a business trip. The executive suite, fast internet,
                                prayer facilities, and professional service made my stay productive and comfortable.
                                A perfect choice for business travelers in Saudi Arabia."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Business Travel</span>
                                <span className="tag">Executive Comfort</span>
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
                            <h3 className="review-title">Perfect Family Experience</h3>
                            <p className="review-text">
                                "Traveling with children was stress-free at DURRAMAH. The spacious family suite,
                                friendly staff, and thoughtful amenities made our Saudi vacation enjoyable and relaxing.
                                Our kids loved the space, and we loved the comfort."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Family Friendly</span>
                                <span className="tag">Spacious Suites</span>
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
                                        <i className="fas fa-map-marker-alt"></i> Madrid, Spain
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
                            <h3 className="review-title">Romantic Saudi Getaway</h3>
                            <p className="review-text">
                                "Our stay was elegant and peaceful. The Arabian décor, warm hospitality,
                                and attention to detail made our anniversary unforgettable.
                                DURRAMAH truly reflects Saudi luxury and charm."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Romantic Stay</span>
                                <span className="tag">Luxury Experience</span>
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
                                        <i className="fas fa-map-marker-alt"></i> Toronto, Canada
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
                            <h3 className="review-title">Relaxing Solo Stay</h3>
                            <p className="review-text">
                                "I was looking for a calm and comfortable stay, and DURRAMAH delivered.
                                The peaceful atmosphere, wellness facilities, and respectful service
                                made my solo visit to Saudi Arabia truly refreshing."
                            </p>
                            <div className="review-tags">
                                <span className="tag">Solo Travel</span>
                                <span className="tag">Wellness</span>
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