import React from 'react';
import Navigation from '../components/Navigation';

const Accueil = () => {
    return (
        <div className="accueilGlobal">

            <div className="navAccueil">
                <Navigation />
            </div>

            <div className="contenuAccueil">
                <h1>Cheikh Ahmadou Bamba Mbow</h1>

                <h2>Développeur Front-End</h2>

                <a href="./media/Cv Bamba Mbow.pdf" target="_blank">
                    Télécharger CV
                </a>
            </div>

        </div>
    );
};

export default Accueil;