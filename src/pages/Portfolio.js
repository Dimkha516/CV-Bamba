import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Projet1 from '../components/Projet1';
import Projet2 from '../components/Projet2';
import Projet3 from '../components/Projet3';
import Projet4 from '../components/Projet4';
import Projet5 from '../components/Projet5';
import Projet6 from '../components/Projet6';

const Portfolio = () => {

    const [proj1Data, setProj1Data] = useState([]);
    const [proj2Data, setProj2Data] = useState([]);
    const [proj3Data, setProj3Data] = useState([]);

    const [proj4Data, setProj4Data] = useState([]);
    const [proj5Data, setProj5Data] = useState([]);
    const [proj6Data, setProj6Data] = useState([]);


    useEffect(() => {
        getProj1();
        getProj2();
        getProj3();

        getProj4();
        getProj5();
        getProj6();
    }, [])

    const getProj1 = () => {
        axios.get("./projet1.json")
            .then((res) => (setProj1Data(res.data.portofolio)));
    }

    const getProj2 = () => {
        axios.get("./projet2.json")
            .then((res) => (setProj2Data(res.data.portofolio)));
    }

    const getProj3 = () => {
        axios.get("./projet3.json")
            .then((res) => (setProj3Data(res.data.portofolio)));
    }

    const getProj4 = () => {
        axios.get("./projet4.json")
            .then((res) => (setProj4Data(res.data.portofolio)));
    }

    const getProj5 = () => {
        axios.get("./projet5.json")
            .then((res) => (setProj5Data(res.data.portofolio)));
    }

    const getProj6 = () => {
        axios.get("./projet6.json")
            .then((res) => (setProj6Data(res.data.portofolio)));
    }

    return (
        <div className="portfolioGlobal">

            <div className="navPortfolio">
                <Navigation />
            </div>

            <div className="contenuPortfolio">

                <div className="projets">
                    MES PROJETS

                    <div className='groupe1'>

                        <div className='proj1'>
                            {proj1Data.map((projet1) => (
                                <Projet1 projet1={projet1} key="" />
                            ))}

                        </div>

                        <div className='proj2'>
                            {proj2Data.map((projet2) => (
                                <Projet2 projet2={projet2} key="" />
                            ))}
                        </div>

                        <div className='proj3'>
                            {proj3Data.map((projet3) => (
                                <Projet3 projet3={projet3} key="" />
                            ))}
                        </div>
                    </div>

                    <div className="groupe2">
                        <div className='proj4'>
                            {proj4Data
                                .map((projet4) => (
                                    <Projet4 projet4={projet4} />
                                ))}
                        </div>

                        <div className='proj5'>
                            {proj5Data.map((projet5) => (
                                <Projet5 projet5={projet5} />
                            ))}
                        </div>

                        <div className='proj6'>
                            {proj6Data.map((projet6) => (
                                <Projet6 projet6={projet6} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;