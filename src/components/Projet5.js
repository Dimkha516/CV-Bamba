import React from 'react';

const Projet5 = ({ projet5 }) => {
    return (
        <div className='proj5Disp'>
            <div className='p5icons'>
                <img src={projet5.icon1} style={{ width: "10%" }} alt="" />
                <img src={projet5.icon2} style={{ width: "10%" }} alt="" />
                <img src={projet5.icon3} style={{ width: "10%" }} alt="" />
            </div>

            <div className='p5title'>
                <h2>Desincy</h2>
            </div>

            <div className='p5image'>
                <img src={projet5.image} style={{ height: "17vh" }} alt="" />
            </div>

            <div className='p5button'>
                <button>+</button>
            </div>
        </div>
    );
};

export default Projet5;