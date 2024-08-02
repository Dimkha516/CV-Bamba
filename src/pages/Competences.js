import React from 'react';
import Navigation from '../components/Navigation';

const Competences = () => {
    return (
        <div className="competencesGlobal">

            <div className="navCompetences">
                <Navigation />
            </div>

            <div className="contenuCompetences">

                <div className="langagesFrameworks">

                    <div className="langages">
                        <h1>Langages (%)</h1>

                        <div className="pourcentagesLangages">
                            <p>10%</p>
                            <p>20%</p>
                            <p>30%</p>
                            <p>40%</p>
                            <p>50%</p>
                            <p>60%</p>
                            <p>70%</p>
                            <p>80%</p>
                            <p>90%</p>
                            <p>100%</p>
                        </div>
                        <ul>
                            <li className="js">
                                <h3>JavaScript</h3>
                                <p></p>
                            </li>

                            <li className="css">
                                <h3>Css</h3>
                                <p></p>
                            </li>

                            <li className="python">
                                <h3>Python</h3>
                                <p></p>
                            </li>
                        </ul>
                    </div>

                    <div className="frameworksBiblio">
                        <h1>Frameworks & Bibliothèques(%)</h1>

                        <div className="pourcentagesFrameBiblios">
                            <p>10%</p>
                            <p>20%</p>
                            <p>30%</p>
                            <p>40%</p>
                            <p>50%</p>
                            <p>60%</p>
                            <p>70%</p>
                            <p>80%</p>
                            <p>90%</p>
                            <p>100%</p>
                        </div>

                        <ul>
                            <li className="react">
                                <h3>React</h3>
                                <p></p>
                            </li>
                            <li className="sass">
                                <h3>Sass</h3>
                                <p></p>
                            </li>
                            <li className="redux">
                                <h3>Redux</h3>
                                <p></p>
                            </li>
                        </ul>

                    </div>
                </div>
                {/* FIN LANGAGE ET FRAMEWORKS */}

                <div className="experience">
                    <h1>Expériences</h1>

                    <div className="mesExp">
                        <div className="exp1">
                            <h2>Agent Marketing Relationnel à HAOQUI</h2>
                            <span>(2019-2020)</span>
                            <p>HAOQUI est une société chinoise localisée dans plusieurs pays du
                                monde. Pendant 2 ans, j'ai travaillé dans cette société dans le domaine
                                du Marketing avec comme mission la promotion des produits
                            </p>
                        </div>

                        <div className="exp2">
                            <h2>Responsable Zone Tampon à NIOKOBOK</h2>
                            <span>Avril-Mai(2022)</span>
                            <p>En tant que responsable zone tampon, j'avais comme tâche ma vérification
                                de la conformité des produits à  livrer avec ceux commandés par le client.
                                NIOKOBOK est une société de E-Commerce basée à Dakar et qui aide les sénégalais
                                de l'extérieur à effectuer des commandes de ravitallement pour leurs familles
                                résidant au Sénégal.
                            </p>
                        </div>
                    </div>

                </div>
                {/* FIN EXPERIENCE */}

                <div className="autresCompetences">
                    <h1>Autres Compétences</h1>

                    <div className="groupes">

                        <div className="groupe1">
                            <ul>
                                <li>
                                    <input id="anglais" type="checkbox" checked />
                                    <label htmlFor="anglais">anglais</label>
                                </li>

                                <li>
                                    <input id="github" type="checkbox" checked />
                                    <label htmlFor="github">Github</label>
                                </li>

                                <li>
                                    <input id="excel" type="checkbox" checked />
                                    <label htmlFor="excel">Excel</label>
                                </li>

                                <li>
                                    <input id="word" type="checkbox" checked />
                                    <label htmlFor="word">Word</label>
                                </li>
                            </ul>

                        </div>

                        <div className="groupe1">
                            <ul>
                                <li>
                                    <input id="cmd" type="checkbox" checked />
                                    <label htmlFor="cmd">CMD</label>
                                </li>

                                <li>
                                    <input id="video" type="checkbox" checked />
                                    <label htmlFor="video">Vidéos</label>
                                </li>

                                <li>
                                    <input id="logi" type="checkbox" checked />
                                    <label htmlFor="logi">Logiciels</label>
                                </li>

                                <li>
                                    <input id="win10" type="checkbox" checked />
                                    <label htmlFor="wind10">Wind10</label>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
                {/* FIN AUTRES COMPETENCES */}

                <div className="interets">
                    <h1>Interêts</h1>

                    <div className="mesInterets">

                        <ul>
                            <li className="int1">
                                <img src="./Icons/lecture.png" alt="" />
                                <p>Lecture</p>
                            </li>

                            <li className="int2">
                                <img src="./Icons/basket.png" alt="" />
                                <p>Basket</p>
                            </li>

                            <li className="int3">
                                <img src="./Icons/karate.png" alt="" />
                                <p>Karaté</p>
                            </li>

                            <li className="int4">
                                <img src="./Icons/yoga.png" alt="" />
                                <p>Yoga</p>
                            </li>

                        </ul>

                    </div>
                </div>
                {/* FIN INTERETS */}

            </div>
            {/* FIN CONTENU COMPETENCES */}

        </div>
    );
};

export default Competences;