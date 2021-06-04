// import "@fullcalendar/core/main.css";  
// import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/daygrid";
import React from 'react'



const appointments = [{ title: "Today", date: new Date() }];
const appointments2 = [{ title: "Month", date: new Date() }];

function Calendar()
{

    return (
        <div className="container">
            <div className="row title" style={{ marginTop: "20px" }} >
                <div class="col-sm-12 btn btn-info">
                    Calendar
                                </div>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, dayGridPlugin, interactionPlugin, timeGridPlugin]}
                editable={true}
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={appointments, appointments2}
            />

        </div>
    )
}

export default Calendar
