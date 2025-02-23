import React from 'react';
import './training.css';
import dataAnalysis from './images/dataAnalysis.png'
import networking from './images/networking.png'
const Trainings = () => {
    // Static array of workshops
    const workshops = [
        {
            id: 1,
            image: dataAnalysis,
            name: "data analysis",
        },
        {
            id: 2,
            image: networking ,
            name: "networking",
        }
    ];

    const displayedItems = [
        ...workshops,
        ...Array(3 - workshops.length).fill(null),
    ].slice(0, 3);


    return (
        <div id="Trainings" className="Trainings">
            <div className="title">Training & Workshops</div>
            <div className="subtitle">Empower Your Skills</div>
            <div className="trainings flex">
                {displayedItems.map((item, index) => (
                    <div key={index} className="training">
                        {item ? (
                            <img src={item.image} alt={`Training ${index + 1}`} />
                        ) : (
                            <p>...</p> 
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainings;