import React, {useState, useEffect} from 'react';
import TimePicker from './calendar/timePicker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Alert from './calendar/Alert';
import axios from 'axios';

const getLocalStorage = () => {
    let idList = localStorage.getItem('idList');
    if (idList) {
      return (idList = JSON.parse(localStorage.getItem('idList')));
    } else {
      return [];
    }
  };


const Appointment = () =>{

    const [date,setDate] = useState(new Date());
    const [day, setDay] = useState('');
    const [idList, setIdList] = useState(getLocalStorage());
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
    const [fullName, setFullName] = useState('test');
    const [email, setEmail] = useState('test');
    const [newEvent, setNewEvent] = useState('');

    // Your TIMEOFFSET Offset
    const TIMEOFFSET = '+05:30';

    // Get date-time string for calender
    const dateTimeForCalander = () => {

        let date = new Date();

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }
        let day = date.getDate();
        if (day < 10) {
            day = `0${day}`;
        }
        let hour = date.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }
        let minute = date.getMinutes();
        if (minute < 10) {
            minute = `0${minute}`;
        }

        let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

        let event = new Date(Date.parse(newDateTime));

        let startDate = event;
        // Delay in end time is 1
        let endDate = new Date(new Date(startDate).setHours(startDate.getHours() + 1));

        return {
            'start': startDate,
            'end': endDate
        }
    };

    let dateTime = dateTimeForCalander();

    // Event for Google Calendar
    let event = {
        'summary': `This is the summary.`,
        'description': `This is the description.`,
        'start': {
            'dateTime': dateTime['start'],
            'timeZone': 'Asia/Kolkata'
        },
        'end': {
            'dateTime': dateTime['end'],
            'timeZone': 'Asia/Kolkata'
        }
    };

    
    const onChange = (date) => {
        setDate(date);
        setDay(date.toDateString());
        }

    const handleClick=(id, text)=>{
        showAlert(true, 'success', `You succesfully booked an appointment from ${text}`);
        setIdList(oldList => [...oldList, id]);

        setNewEvent(event);

        const registered = {
          fullName: fullName,
          email: email,
          date: date,
          event: newEvent
        }

        axios.post('http://localhost:4000/app/appointment', registered)
        .then(response => console.log(response.data))
        
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
      };

      useEffect(() => {
        localStorage.setItem('idList', JSON.stringify(idList));
      }, [idList]);

    return (
        <div>
            <br/>
            <center><h3>First choose a date and then take an appointment</h3></center>
            <br/>
            <center>
                <div className="calendar">
                    <center><Calendar onChange={onChange} value={date}/></center>
                </div>
            </center>
            <br/><br/>
            <TimePicker date={date} day={day} handleClick={handleClick} idList={idList} {...alert} removeAlert={showAlert}/>
        </div>
        
           
        
    );
}


export default Appointment;