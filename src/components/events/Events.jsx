import React from "react";
import "./events.css";
import Event from "./Event";
import FTCodingImg from './images/event-img.png'
const Events = () => {
    const events = [
        {
            image: FTCodingImg ,
            name: "FTCoding",
            date: "2024-5-15",
            location: "ENSTICP",
            description: "This is the first event description."
        },
        {
            image: FTCodingImg,
            name: "FTCoding",
            date: "2024-5-15",
            location: "ENSTICP",
            description: "This is the first event description."
        }
    ];

    return (
        <div id="Events" className="Events">
            <div className="title">Events</div>
            <div className="subtitle">Connect & Create</div>
            <div className="content flex">
                <div className="events flex">
                    {events.map((e, index) => (
                        <Event
                            key={index}
                            image={e.image}
                            name={e.name}
                            date={e.date}
                            location={e.location}
                            description={e.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;