import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="profil">
                <img src="./media/bamba modif.jpg" alt="" width={"50%"} />
                <h2>ch. ahmadou bamba mbow</h2>
            </div>
            {/* Fin Profil */}


            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" className={(nav) => nav.isActive ? "active-page" : ""}>
                            <div className="accueilLink">
                                <img src="./Icons/home.png" alt="" />
                                <span>Accueil</span>
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/competences" className={(nav) => nav.isActive ? "active-page" : ""}>
                            <div className="competencesLink">
                                <img src="./Icons/knowledges.png" alt="" />
                                <span>Compétences</span>
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/portfolio" className={(nav) => nav.isActive ? "active-page" : ""}>
                            <div className="portfolioLink">
                                <img src="./Icons/portfolio.png" alt="" />
                                <span>Portfolio</span>
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={(nav) => nav.isActive ? "active-page" : ""}>
                            <div className="contactLink">
                                <img src="./Icons/contact.png" alt="" />
                                <span>Contact</span>
                            </div>
                        </NavLink>
                    </li>

                </ul>
            </div>
            {/* Fin navigation */}


            <div className="social-network">
                <ul>
                    <li>
                        <img src="./Icons/facebook.png" alt="" />
                    </li>

                    <li>
                        <img src='./Icons/twitter.png' alt="" />
                    </li>

                    <li>
                        <img src="./Icons/linkdin.png" alt="" />
                    </li>
                </ul>
            </div>
            {/* Fin social */}


            <div className="signature">
                <h2>B@mb@.Dev - 2022</h2>
            </div>
            {/* Fin signature */}



        </div>
        // Fin Side
    );
};

export default Navigation;