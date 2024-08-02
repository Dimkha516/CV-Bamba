import React from 'react';

const Projet2 = ({ projet2 }) => {
    return (
        <div className='proj2Disp'>
            <div className='p2icons'>
                <img src={projet2.icon1} style={{ width: "10%" }} alt="" />
                <img src={projet2.icon2} style={{ width: "10%" }} alt="" />
                <img src={projet2.icon3} style={{ width: "10%" }} alt="" />
            </div>

            <div className='p2title'>
                <h2>Crystal Frontier</h2>
            </div>


            <div className='p2image'>
                <img src={projet2.image} alt="" />
            </div>

            <div className='p2button'>
                <button>+</button>
            </div>
        </div>
    );
};

export default Projet2;