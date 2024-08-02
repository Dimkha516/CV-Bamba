import React from 'react';

const Projet4 = ({ projet4 }) => {
    return (
        <div className='proj4Disp'>
            <div className='p4icons'>
                <img src={projet4.icon1} style={{ width: "10%" }} alt="" />
                <img src={projet4.icon2} style={{ width: "10%" }} alt="" />
                <img src={projet4.icon3} style={{ width: "10%" }} alt="" />
            </div>

            <div className='p4title'>
                <h2>BrandenBurg</h2>
            </div>

            <div className='p4image'>
                <img src={projet4.image} style={{ height: "17vh" }} alt="" />
            </div>

            <div className='p4button'>
                <button>+</button>
            </div>

        </div>
    );
};

export default Projet4;