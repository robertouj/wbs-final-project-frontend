// import "@fullcalendar/core/main.css";  
// import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid"; 
import interactionPlugin from "@fullcalendar/daygrid"; 
import timeGridPlugin from "@fullcalendar/daygrid"; 
import React, { Component, useState, useRef } from 'react'  
import AddEventModal from "./AddEventModal";


const appointments = [{ title: "Today", date: new Date() }];  
const appointments2 = [{ title: "Month", date: new Date() }];  

function Calendar() {
    const [modelOpen, setModalOpen] = useState(false);
    const calendarRef  = useRef(null)

    const onEventAdded = event => {
        let calendarApri =this.calendarRef.current.getApi()
        calendarApri.addEvent(event);
    }
    return (
            <div className="container">  
                            <div className="row title" style={{ marginTop: "20px" }} >  
                                <div class="col-sm-12 btn btn-info">  
                                    Calendar  
                        </div>  
                        <button onclick={() => setModalopen()} >add event</button>
                            </div>  
                            <div style={{position: "relative", zIndex: 0}}>
                            <FullCalendar  
                                ref={calendarRef}
                                plugins={[ dayGridPlugin,  dayGridPlugin, interactionPlugin, timeGridPlugin ]}
                                editable={true}
                                defaultView="dayGridMonth"  
                                plugins={[dayGridPlugin]}  
                                events={appointments, appointments2}  
                            />
                            </div>
                              
                            <AddEventModal 
                            isOpen={modalOpen} 
                            onClose={() => setModalOpen(false)} 
                            onEventAdded={ event => onEventadded(event)} />
                        </div>  
    )
}

export default Calendar
