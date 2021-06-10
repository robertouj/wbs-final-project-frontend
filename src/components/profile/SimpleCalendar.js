import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Cal = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              shouldHighlightWeekends
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cal;
