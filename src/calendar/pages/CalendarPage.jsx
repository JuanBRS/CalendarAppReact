import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { CalendarEvents, CalendarModal, Navbar } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUiStore } from "../../hooks";

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

  const {openDateModal} = useUiStore ();

const [lastView, setlastView] = useState(localStorage.getItem("lastView") || "week")

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


  const onDoubleClick = ( event ) =>{
    // console.log({ doubleclick: event});
    openDateModal();
  }

  const onSelect = ( event ) =>{
    console.log({ click: event});
  }


  const onViwChanged = ( event ) =>{
    localStorage.setItem("lastView", event);
    setlastView (event)
  }

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvents
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={ onSelect}
        onView ={onViwChanged}
      />
<CalendarModal/>

    </>
  );
};
