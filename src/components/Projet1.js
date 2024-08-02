import React from 'react';

const Projet1 = ({ projet1 }) => {
    return (
        <div className='proj1Disp'>
            <div className='p1icons'>
                <img src={projet1.icon1} style={{ width: "10%" }} alt="" />
                <img src={projet1.icon2} style={{ width: "10%" }} alt="" />
                <img src={projet1.icon3} style={{ width: "10%" }} alt="" />
            </div>

            <div className='p1title'>
                <h2>Online Course</h2>
            </div>


            <div className='p1image'>
                <img src={projet1.image} style={{ height: "17vh" }} alt="" />
            </div>

            <div className='p1button'>
                <button>+</button>
            </div>
        </div>
    );
};

export default Projet1;