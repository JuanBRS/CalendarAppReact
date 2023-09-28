import { useDispatch, useSelector } from "react-redux";
import {
  onAddActiveEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(
        onAddActiveEvent({ ...calendarEvent, _id: new Date().getTime() })
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
