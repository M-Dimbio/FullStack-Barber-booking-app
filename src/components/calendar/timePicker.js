import React, {useState, useEffect} from 'react';
import Alert from './Alert';

const TimePicker = ({date, day, handleClick, idList, removeAlert,type, msg, show }) => {



        // const handleClick = (id) => {
        //     // setList(list.filter((time) => time.id !== id));
        //     console.log(id);
        // }


        // return (
        //     <React.Fragment>
        //         <center><h4>{date.toDateString()}</h4><br/></center>
        //         {bigList.map((item)=>{
        //             const {id, array} = item;
        //             // console.log("hi");
        //             {day === id && 
        //             // console.log("hi");
        //             <div key={id}>
        //                 {array.map((time)=>{
        //                     console.log(time.id,time.text);
                            
        //                     // return (
        //                     //     <center>
        //                     //         <div className="time-picker2" key={time.id}>
        //                     //             <h4><br/>{time.text}</h4>
        //                     //             <button className="time-btn" type='button' onClick={()=>handleClick(time.id)}>Book Now for this time</button>
        //                     //         </div>
        //                     //         <br/>
        //                     //     </center>
        //                     // );
        //                 })}
        //             </div>
        //             };
        //         })}
        //     </React.Fragment>
            
        // );

//========================================================================================================================================================================

   const times = [
            {
                id: (date.getTime()+1).toString(),
                text: '9:00 - 10:00',
            },
            {
                id: (date.getTime()+2).toString(),
                text: '10:00 - 11:00',
            },
            {
                id: (date.getTime()+3).toString(),
                text: '11:00 - 12:00',
            },
            {
                id: (date.getTime()+4).toString(),
                text: '12:00 - 13:00',
            },
            {
                id: (date.getTime()+5).toString(),
                text: '13:00 - 14:00',
            },
            {
                id: (date.getTime()+6).toString(),
                text: '14:00 - 15:00',
            },
            {
                id: (date.getTime()+7).toString(),
                text: '15:00 - 16:00',
            },
            {
                id: (date.getTime()+8).toString(),
                text: '16:00 - 17:00',
            },
            {
                id: (date.getTime()+9).toString(),
                text: '17:00 - 18:00',
            },
            {
                id: (date.getTime()+10).toString(),
                text: '18:00 - 19:00',
            },
            {
                id: (date.getTime()+11).toString(),
                text: '19:00 - 20:00',
            },
            {
                id: (date.getTime()+12).toString(),
                text: '20:00 - 21:00',
            },
    
        ]
        const [list,setList] = useState([]);
        
        useEffect(()=>{
            setList(times);
        }, [date]);

       

       useEffect(()=>{
        console.log(idList.includes("1610504575452"));
        }, [idList])


        return (
            <div key={day}>
                {/* {day === new Date().toDateString() ? '': 
                <div>
                    <center><h4>{date.toDateString()}</h4><br/></center>
                    <center>{show && <Alert type={type} msg={msg} removeAlert={removeAlert} idList={idList} />}</center>
                    {list.map((time)=>{
                    const {id, text} = time;
                    return (
                        <center>
                        <div className="time-picker2" key={id}>
                            <h4><br/>{text}</h4>
                            {idList.includes(id)? <h4>Booked!</h4> : <button className="time-btn" type='button' onClick={()=>handleClick(id, text)}>Book Now for this time</button>}
                        </div>
                        <br/>
                        </center>
                    );
                })}
                </div>
                } */}
                <center><h4>{date.toDateString()}</h4><br/></center>
                <center>{show && <Alert type={type} msg={msg} removeAlert={removeAlert} idList={idList} />}</center>
                {list.map((time)=>{
                    const {id, text} = time;
                    return (
                        <center>
                        <div className="time-picker2" key={id}>
                            <h4><br/>{text}</h4>
                            {idList.includes(id)? <h4>Booked!</h4> : <button className="time-btn" type='button' onClick={()=>handleClick(id, text)}>Book Now for this time</button>}
                        </div>
                        <br/>
                        </center>
                    );
                })}
            </div>
        );
    
//==================================================================================================================================================================================


}

export default TimePicker;