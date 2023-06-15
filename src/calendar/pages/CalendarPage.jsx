import { Calendar } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours} from "date-fns";
import { Navbar } from "../"
import { localizer, getMessagesES } from '../../helpers';


const events = [{

title: "cumpleaños del jefe",
note: " hay que comprar el patel ",
start : "ne day()",
end: addHours (new Date (),2 ),
bgcolor: "#fafafa",
user:{
_id:"123",
name: "juan pablo"
}

}]

export const CalendarPage = () => {

const eventStyleGetter = (event, start, end, isSelected) =>{

  console.log ({event, start, end, isSelected});


}

  return (
 
<>

<Navbar/>
<Calendar
      culture='es'
      localizer={ localizer }
      events={ events }
      startAccessor="start"
      endAccessor="end"
      style={{ height: "calc ( 100vh - 80px)" }}
      messages={ getMessagesES()}
      eventPropGetter={ eventStyleGetter }


    />



</>

  )
}
