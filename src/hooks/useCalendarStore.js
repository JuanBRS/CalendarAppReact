import { useDispatch, useSelector } from "react-redux";
import {
  onAddActiveEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/";
import { calendarApi } from "../api";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO: uptade Event
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      const { data } = await calendarApi.post("/events", calendarEvent);
      console.log({ data });
      dispatch(
        onAddActiveEvent({ ...calendarEvent, id: data.evento.id, user })
      );
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    startDeletingEvent: startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  };
};
