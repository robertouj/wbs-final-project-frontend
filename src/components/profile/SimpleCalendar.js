
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Cal = () =>
{
    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
        />
    );
};

export default Cal;