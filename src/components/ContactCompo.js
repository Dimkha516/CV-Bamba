import React from 'react';

const ContactCompo = () => {
    return (
        <div className='contact-compo'>

            <div className="titre">
                <h1>Contactez-moi</h1>
                <hr></hr>
            </div>

            <div className='items'>
                <ul>
                    <li className='loc'>
                        <img src="./Icons/localisation.jpg" style={{ width: "10%" }} alt="" />
                        <h2>Dakar</h2>
                    </li>

                    <li className='phone'>
                        <img src="./Icons/smartphone.png" style={{ width: "10%" }} alt="" />
                        <h2>+221 032 22 00</h2>
                    </li>

                    <li className='mail'>
                        <img src="./Icons/mail.png" style={{ width: "10%" }} alt="" />
                        <h2>dimkha516@gmail.com</h2>
                    </li>
                </ul>
            </div>



        </div>
    );
};

export default ContactCompo;