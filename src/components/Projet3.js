import React from 'react';

const Projet3 = ({ projet3 }) => {
    return (
        <div className='proj3Disp'>
            <div className='p3icons'>
                <img src={projet3.icon1} style={{ width: "10%" }} alt="" />
                <img src={projet3.icon2} style={{ width: "10%" }} alt="" />
                <img src={projet3.icon3} style={{ width: "10%" }} alt="" />
            </div>

            <div className='p3title'>
                <h2>Taking Power</h2>
            </div>

            <div className='p3icons'>
                <img src={projet3.image} alt="" />
            </div>

            <div className='p3button'>
                <button>+</button>
            </div>
        </div>
    );
};

export default Projet3;