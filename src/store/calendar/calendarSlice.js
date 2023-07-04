import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
     title: "cumpleaños del jefe",
     note: " hay que comprar el patel ",
     start: new Date(),
     end: addHours(new Date(), 2),
     bgcolor: "#fafafa",
     user: {
       _id: "123",
       name: "juan pablo",
     },
}


export const calendarSlice = createSlice({
     name: 'calendar',
     initialState: {
events: [

     tempEvent
],
activeEvent: null


     },
     reducers: {
       increment: (state, /* action */ ) => {
         state.counter += 1;
},
}
});
export const { increment } = calendarSlice.actions;