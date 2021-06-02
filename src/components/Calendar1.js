import React, { Component } from 'react'  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import timeGridPlugin from "@fullcalendar/timegrid";  



const appointments = [{ title: "Today", date: new Date() }];  

function Calendar1() {
    return (
        <div className="container">  
                  <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        Calendar 1  
               </div>  
                </div>  
                 <FullCalendar  
              defaultView="dayGridMonth"  
             header={{  
            left: "prev,next",  
            center: "title",  
           right: "dayGridMonth,timeGridWeek,timeGridDay"  
        }}  
        plugins={[dayGridPlugin, timeGridPlugin]}  
        events={appointments}  
      />  
            </div>  
    )
}

export default Calendar1
