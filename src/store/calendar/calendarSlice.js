import { createSlice } from "@reduxjs/toolkit";
// import { addHours } from "date-fns";

// const tempEvent = {
//   _id: new Date().getTime(),
//   title: "cumpleaños del jefe",
//   note: " hay que comprar el patel ",
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgcolor: "#fafafa",
//   user: {
//     _id: "123",
//     name: "juan pablo",
//   },
// };

export const calendarSlice = createSlice({
  name: "calendar",

  initialState: {
    isLoadingEvents: true,
    events: [
      // tempEvent
    ],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddActiveEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }

        return event;
      });
    },

    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },
  },
});
export const {
  onSetActiveEvent,
  onAddActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
} = calendarSlice.actions;
