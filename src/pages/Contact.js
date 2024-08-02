import React from 'react';
import ContactCompo from '../components/ContactCompo';
import Navigation from '../components/Navigation';


const Contact = () => {

    return (
        <div className="contactGlobal">

            <div className="navContact">
                <Navigation />
            </div>

            <div className="contenuContact">
                <h2>CONTENU CONTACT</h2>

                <div className='component'>
                    <ContactCompo />
                </div>

                <div className='linking'>
                    <ul>
                        <li className='googel'>
                            <h2>Googel+</h2>
                            <img src="./Icons/g+.png" style={{ width: "20%" }} alt="" />
                        </li>

                        <li className='wordpress'>
                            <h2>WordPress</h2>
                            <img src="./Icons/wordpress.png" style={{ width: "20%" }} alt="" />
                        </li>

                        <li className='evernote'>
                            <h2>Evernote</h2>
                            <img src="./Icons/evernote.png" style={{ width: "20%" }} alt="" />
                        </li>

                        <li className='instagram'>
                            <h2>Instagram</h2>
                            <img src="./Icons/instagram.png" style={{ width: "20%" }} alt="" />
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Contact;