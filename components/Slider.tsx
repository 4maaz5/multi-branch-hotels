"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Slider() {
    const t = useTranslations("slider")
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 col-xl-9">
                    <div
                        id="carouselExampleAutoplaying"
                        className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden"
                        data-bs-ride="carousel"
                        data-bs-interval="5000"
                    >
                        {/* Carousel Indicators */}
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>

                        <div className="carousel-inner">
                            {/* Slide 1 */}
                            <div className="carousel-item active">
                                <div className="position-relative" style={{ height: '500px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Hotel Spa"
                                        className="d-block w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-4 rounded-3">
                                        <h3 className="fw-bold mb-2">{t("wellness_spa")}</h3>
                                        <p className="fs-5 mb-0">{t("rejuvenate_your_mind")}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item">
                                <div className="position-relative" style={{ height: '500px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Hotel Restaurant"
                                        className="d-block w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-4 rounded-3">
                                        <h3 className="fw-bold mb-2">{t("fine_dining_experience")}</h3>
                                        <p className="fs-5 mb-0">{t("gourmet_cuisine_prepared")}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="carousel-item">
                                <div className="position-relative" style={{ height: '500px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Hotel Lobby"
                                        className="d-block w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-4 rounded-3">
                                        <h3 className="fw-bold mb-2">{t("grand_lobby")}</h3>
                                        <p className="fs-5 mb-0">{t("elegant_architecture_with")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundSize: '30px'
                                }}
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">{t("previous")}</span>
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundSize: '30px'
                                }}
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">{t("next")}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}