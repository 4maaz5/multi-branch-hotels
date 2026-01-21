"use client";
import { useTranslations } from "next-intl";
const About = () => {
    const t=useTranslations("about");
    return (
        <div className="about-section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="about-images">
                            <div className="main-image">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                    alt="Luxury Hotel Saudi Arabia"
                                    className="img-fluid rounded-4"
                                />
                            </div>
 
                            <div className="secondary-images">
                                <img
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Saudi Hospitality"
                                    className="img-fluid rounded-3"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80"
                                    alt="Saudi Architecture"
                                    className="img-fluid rounded-3"
                                />
                            </div>
                        </div>


                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-label">
                                <span className="label-text">{t("about_durramah")}</span>
                            </div>

                            <h2 className="about-title">
                                {t("saudi_hospitality_rooted")}
                            </h2>

                            <p className="about-description">
                                {t("for_over_two_decades")}
                            </p>

                            <div className="about-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">{t("excelance_and_quality")}</h4>
                                        <p className="feature-text">{t("recognized_for_premium_service")}</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-globe-americas"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">{t("strategic_locations")}</h4>
                                        <p className="feature-text">{t("prime_properties")}</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">{t("guest_centered_service")}</h4>
                                        <p className="feature-text">{t("trusted_by_families")}</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-leaf"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">{t("sustainable_vision")}</h4>
                                        <p className="feature-text">{t("aligned_with_saudi")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-number">20+</div>
                                    <div className="stat-label">{t("years_of_hospitality")}</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">1M+</div>
                                    <div className="stat-label">{t("satisfied_guests")}</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">15+</div>
                                    <div className="stat-label">{t("cities_accross_ksa")}</div>
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