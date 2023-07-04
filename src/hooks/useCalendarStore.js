import { useSelector } from "react-redux"


export const useCalendarStore = () => {


  const { events, activeEevent }= useSelector( state => state.calendar);


  return {
events,
activeEevent, 

  }
}
