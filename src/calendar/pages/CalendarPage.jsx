import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { CalendarEvents, Navbar } from "../";
import { localizer, getMessagesES } from "../../helpers";

const events = [
  {
    title: "cumpleaños del jefe",
    note: " hay que comprar el patel ",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgcolor: "#fafafa",
    user: {
      _id: "123",
      name: "juan pablo",
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    
    const style = {
      backgroundColor: "#12447CF8",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{

          event: CalendarEvents
        }}
      />
    </>
  );
};
