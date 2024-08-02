import React from 'react';

const Projet6 = ({ projet6 }) => {
    return (
        <div className='proj6Disp'>

            <div className='p6icons'>
                <img src={projet6.icon1} style={{ width: "10%" }} alt="" />
                <img src={projet6.icon2} style={{ width: "10%" }} alt="" />
                <img src={projet6.icon3} style={{ width: "10%" }} alt="" />
            </div>

            <div className='p6title'>
                <h2>London Bridge</h2>
            </div>

            <div className='p6image'>
                <img src={projet6.image} style={{ height: "17vh" }} alt="" />
            </div>

            <div className='p6button'>
                <button>+</button>
            </div>

        </div>
    );
};

export default Projet6;