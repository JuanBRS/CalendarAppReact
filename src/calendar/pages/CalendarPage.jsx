import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  CalendarEvents,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUiStore, useCalendarStore, useAuthStore } from "../../hooks";
import { useEffect } from "react";

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setlastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = user.uid === event.user._id || user.uid === event.user.id;

    const style = {
      backgroundColor: isMyEvent ? "#12447CF8" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    // console.log({ doubleclick: event});
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViwChanged = (event) => {
    localStorage.setItem("lastView", event);
    setlastView(event);
  };

  useEffect(() => {
    startLoadingEvents();
  }, []);

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
          event: CalendarEvents,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViwChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
