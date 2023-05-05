import React from "react";

const EventList = ({events}) => {
console.log({events})

 return (
    <section className="event-container">
        {events && events.map((event) => (
            <div className="event-box">
               <h4 className="event-title">{event.name}</h4>
               <div>{event.date}</div> 
               <div>{event.location}</div>
               <div>{event.venue}</div>
               {/* <div>{event.artists}</div> */}
            </div>
            
        ))}
    </section>
 )
}

export default EventList;