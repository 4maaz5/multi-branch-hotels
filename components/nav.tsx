
"use client";
import { useTranslations } from "next-intl";
const Navbar = () => {
    const t = useTranslations("header")
    return (
        <nav className="navbar" id="home">
            <div className="nav-container">
                <a href="#home" className="logo">
                    <i className="fas fa-hotel logo-icon"></i>
                    <span className="logo-text">{t("logo")}</span>
                </a>

                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="fas fa-bars"></i>
                </div>

                <ul className="nav-menu" id="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active">{t("home")}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">{t("about")}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#branches" className="nav-link">{t("branches")}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#rooms" className="nav-link">{t("rooms")}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="nav-link">{t("gallery")}</a>
                    </li>
                    <button className="booking-btn" id="bookNowBtn">
                        <i className="fas fa-calendar-check"></i> EN / AR
                    </button>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;