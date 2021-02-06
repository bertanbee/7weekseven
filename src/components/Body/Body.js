import React, { useEffect, useState } from 'react';
import { FaInfoCircle, FaRegTrashAlt, FaArrowUp, FaArrowDown } from "react-icons/fa"

import Taskcheckbox from '../Taskcheckbox/Taskcheckbox';
import Display from '../Display/Display';


import styled from 'styled-components';

function Body() {
    //TasksStates
    let [ TasksMonday, setTasksMonday ] = useState({
        tasks: [],
        state: []
    })

    useEffect(() => {
        setTasksMonday({
            tasks: localStorage.getItem('localstoragetasksmonday') === null ? [] : JSON.parse(localStorage.getItem('localstoragetasksmonday')),
            state: localStorage.getItem('localstoragestatemonday') === null ? [] : JSON.parse(localStorage.getItem('localstoragestatemonday'))
        })
    }, [])

    let [ MondayNote, setMondayNote] = useState({
        daynote: ""
    })
    let mondaydaynotetorage;
    useEffect(() => {
        mondaydaynotetorage = localStorage.getItem('mondaydaynote')
        setMondayNote({daynote: mondaydaynotetorage})
    }, [])
    

    let [ TasksTuesday, setTasksTuesday ] = useState({
        tasks : [],
        state : [],
    });

    useEffect(() => {
        setTasksTuesday({
            tasks: localStorage.getItem('localstoragetaskstuesday') === null ? [] : JSON.parse(localStorage.getItem('localstoragetaskstuesday')),
            state: localStorage.getItem('localstoragestatetuesday') === null ? [] : JSON.parse(localStorage.getItem('localstoragestatetuesday'))
        })
    }, [])

    let [ TuesdayNote, setTuesdayNote] = useState({
        daynote: ""
    })
    let tuesdaydaynotetorage;
    useEffect(() => {
        tuesdaydaynotetorage = localStorage.getItem('tuesdaydaynote')
        setTuesdayNote({daynote: tuesdaydaynotetorage})
    }, [])

    let [ TasksWednesday, setTasksWednesday ] = useState({
        tasks : [],
        state : [],
    });

    useEffect(() => {
        setTasksWednesday({
            tasks: localStorage.getItem('localstoragetaskswednesday') === null ? [] : JSON.parse(localStorage.getItem('localstoragetaskswednesday')),
            state: localStorage.getItem('localstoragestatewednesday') === null ? [] : JSON.parse(localStorage.getItem('localstoragestatewednesday'))
        })
    }, [])

    let [ WednesdayNote, setWednesdayNote] = useState({
        daynote: ""
    })
    let wednesdaydaynotetorage;
    useEffect(() => {
        wednesdaydaynotetorage = localStorage.getItem('wednesdaydaynote')
        setWednesdayNote({daynote: wednesdaydaynotetorage})
    }, [])

    let [ TasksThursday, setTasksThursday ] = useState({
        tasks : [],
        state : [],
    });
    useEffect(() => {
        setTasksThursday({
            tasks: localStorage.getItem('localstoragetasksthursday') === null ? [] : JSON.parse(localStorage.getItem('localstoragetasksthursday')),
            state: localStorage.getItem('localstoragestatethursday') === null ? [] : JSON.parse(localStorage.getItem('localstoragestatethursday'))
        })
    }, [])

    let [ ThursdayNote, setThursdayNote] = useState({
        daynote: ""
    })
    let thursdaydaynotetorage;
    useEffect(() => {
        thursdaydaynotetorage = localStorage.getItem('thursdaydaynote')
        setThursdayNote({daynote: thursdaydaynotetorage})
    }, [])

    let [ TasksFriday, setTasksFriday ] = useState({
        tasks : [],
        state : [],
    });
    useEffect(() => {
        setTasksFriday({
            tasks: localStorage.getItem('localstoragetasksfriday') === null ? [] : JSON.parse(localStorage.getItem('localstoragetasksfriday')),
            state: localStorage.getItem('localstoragestatefriday') === null ? [] : JSON.parse(localStorage.getItem('localstoragestatefriday'))
        })
    }, [])

    let [ FridayNote, setFridayNote] = useState({
        daynote: ""
    })
    let fridaydaynotetorage;
    useEffect(() => {
        fridaydaynotetorage = localStorage.getItem('fridaydaynote')
        setFridayNote({daynote: fridaydaynotetorage})
    }, [])

    let [ TasksSaturday, setTasksSaturday ] = useState({
        tasks : [],
        state : [],
    });

    useEffect(() => {
        setTasksSaturday({
            tasks: localStorage.getItem('localstoragetaskssaturday') === null ? [] : JSON.parse(localStorage.getItem('localstoragetaskssaturday')),
            state: localStorage.getItem('localstoragestatesaturday') === null ? [] : JSON.parse(localStorage.getItem('localstoragestatesaturday'))
        })
    }, [])

    let [ SaturdayNote, setSaturdayNote] = useState({
        daynote: ""
    })
    let saturdaydaynotetorage;
    useEffect(() => {
        saturdaydaynotetorage = localStorage.getItem('saturdaydaynote')
        setSaturdayNote({daynote: saturdaydaynotetorage})
    }, [])

    let [ TasksSunday, setTasksSunday ] = useState({
        tasks : [],
        state : [],
    });

    useEffect(() => {
        setTasksSunday({
            tasks: localStorage.getItem('localstoragetaskssunday') === null ? [] : JSON.parse(localStorage.getItem('localstoragetaskssunday')),
            state: localStorage.getItem('localstoragestatesunday') === null ? [] : JSON.parse(localStorage.getItem('localstoragestatesunday'))
        })
    }, [])

    let [ SundayNote, setSundayNote] = useState({
        daynote: ""
    })
    let sundaydaynotetorage;
    useEffect(() => {
        sundaydaynotetorage = localStorage.getItem('sundaydaynote')
        setSundayNote({daynote: sundaydaynotetorage})
    }, [])

    var i = 0;
    var k = 0;
    function reseti() {
        i = 0;
    }

    function resetk() {
        k = 0;
    }

    var dateTime = require('get-date');
    var time = dateTime();
    var timearray = time.split('/');
    var day = Number(timearray[0])
    var monthkey = 0;
    var year = Number(timearray[2]) 
    var yearkey = Math.floor((year-2000)/4)+(year-2000)%7;
    

    function setMonth(monthinput) {
        switch (monthinput) {
            case "01" :
                monthkey = 1
                break
            case "02" :
                monthkey = 4
                break
            case "03" :
                monthkey = 4
                break
            case "04":
                monthkey = 0
                break
            case "05" :
                monthkey = 2
                break 
            case "06" :
                monthkey = 5
                break
            case "07" :
                monthkey = 0
                break
            case "08" :
                monthkey = 3
                break
            case "09" :
                monthkey = 6
                break
            case "10":
                monthkey = 1
                break
            case "11" :
                monthkey = 4
                break
            case "12" :
                monthkey = 6
                
                break    
            default:
                break;         
        }
    }

    setMonth(timearray[1])
    var weekday = (day + monthkey + yearkey)%7 +1;


    var a = 0;
    var b = 0;
    var total = [0, 0 ,0 , 0, 0, 0, 0, 0];

    function Total() {
        total[3] = TasksSunday.tasks.length;
        total[4] = TasksMonday.tasks.length;
        total[5] = TasksTuesday.tasks.length;
        total[6] = TasksWednesday.tasks.length;
        total[0] = TasksThursday.tasks.length;
        total[7] = TasksThursday.tasks.length;
        total[1] = TasksFriday.tasks.length;
        total[2] = TasksSaturday.tasks.length;
    }

    const [ A, setA ] = useState();
    const [ TotalState, setTotalState ] = useState();

    function SundayPercentage() {
        Total()
        a = 0;
        TasksSunday.state.map(state  => (
            state === "Y" ? a++ : a = a + 0
        ))
        setA(a)
        setTotalState(total[weekday])
    }
    function MondayPercentage() {
        Total()
        a = 0;
        TasksMonday.state.map(state  => (
            state === "Y" ? a++ : a = a + 0
        ))
        setA(a)
        setTotalState(total[weekday])
    }
    function TuesdayPercentage() {
        Total()
        a = 0;
        TasksTuesday.state.map(state  => (
            state === "Y" ? a++ : a = a + 0
        ))
        setA(a)
        setTotalState(total[weekday])
    }
    function WednesdayPercentage() {
        Total()
        a = 0;
        TasksWednesday.state.map(state  => (
            state === "Y" ? a++ : a = a + 0
        ))
        setA(a)
        setTotalState(total[weekday])   
    }
    function ThursdayPercentage() {
        Total()
        a = 0;
        TasksThursday.state.map(state  => (
            state === "Y" ? a++ : a = a + 0
        ))
        setA(a)
        setTotalState(total[weekday])
    }

    function FridayPercentage() {
        Total()
        a = 0;
        TasksFriday.state.map(state  => (
            state === "Y" ? a++ : a = a + 0
        ))
        setA(a)
        setTotalState(total[weekday])
    }

    function SaturdayPercentage() {
        Total()
        a = 0;
        TasksSaturday.state.map(state  => (
            state === "Y" ? a++ : a = a + 0
        ))
        setA(a)
        setTotalState(total[weekday])
    }
    
    

    function getWeekdayPercentage(weekday) {
        if (weekday === 0 || weekday === 7) {
            ThursdayPercentage()
        } else if (weekday === 1) {
            FridayPercentage()
        } else if (weekday === 2) {
            SaturdayPercentage()
        } else if (weekday === 3) {
            SundayPercentage()
        } else if (weekday === 4) {
            MondayPercentage()
        } else if (weekday === 5) {
            TuesdayPercentage()
        } else {
            WednesdayPercentage()
        }
    }

    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [])
    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [TasksTuesday])

    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [TasksWednesday])

    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [TasksThursday])

    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [TasksFriday])

    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [TasksSaturday])

    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [TasksSunday])

    useEffect(() => {
        getWeekdayPercentage(weekday)
    }, [TasksMonday])
    
    const [ B, setB ] = useState();
    const [ TotalSumState, setTotalSumState ] = useState()
    function getWeekPercentage() {
        Total()
        b = 0;
        TasksMonday.state.map(state  => (
            state === "Y" ? b++ : b = b + 0
        ))

        TasksTuesday.state.map(state  => (
            state === "Y" ? b++ : b = b + 0
        ))

        TasksWednesday.state.map(state  => (
            state === "Y" ? b++ : b = b + 0
        ))

        TasksThursday.state.map(state  => (
            state === "Y" ? b++ : b = b + 0
        ))

        TasksFriday.state.map(state  => (
            state === "Y" ? b++ : b = b + 0
        ))

        TasksSaturday.state.map(state  => (
            state === "Y" ? b++ : b = b + 0
        ))

        TasksSunday.state.map(state  => (
            state === "Y" ? b++ : b = b + 0
        ))
        setB(b);
        setTotalSumState(total[0] + total[1] + total[2] + total[3] + total[4] + total[5] + total[6])
    }

    const Body = styled.div`
    width: 100%;
    padding-bottom: 60px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 1));
    .bodycontentbox {
        background-color:  rgba(0, 0, 0, 0.60);
        padding: 10px;
        margin: 10px;
        width: 75%;
        transition: 0.25s;
        display: flex;
        flex-direction: row;
    }
    
    .bodycontentbox:hover {
        background-color: rgba(0, 0, 0, 0.50);
        transition: 0.25s;
    }
    
    .weekday {
        background-color: rgba(0, 0, 0, 0.60);
        width: 60px;
        padding: 10px;
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
    } 
    
    .weekday:hover {
        background-color: rgba(0, 0, 0, 0.30);
        transition: 0.25s;
        width: 50%;
    }
    
    .weekday:hover .weekdaytop {
        justify-content: space-between;
    }
    
    .weekdaytop {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
    .weekdayname {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .weekdaycontinuation {
        font-size: 0px;
        transition: 0.25s;
    }
    
    .weekdayinitial {
        font-size: 25px;
        transition: 0.25s;
        color: rgba(223, 223, 223, 0.6);
    }
    
    .weekday:hover .weekdayinitial {
        color: rgba(54, 40, 255, 0.6);
        font-size: 40px;
        transition: 0.25s;
    }
    
    .weekday:hover .weekdaycontinuation {
        font-size: 20px;
    }
    
    .databox {
        background-color:  rgba(0, 0, 0, 0.60);
        padding: 10px;
        margin: 10px;
        width: 240px;
        transition: 0.25s;
        height: 552px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    
    }
    
    .databox:hover {
        background-color: rgba(0, 0, 0, 0.50);
        transition: 0.25s;
    }
    
    .displays {
         height: 50%;
    }
    
    .reset {
        background-color:  rgba(255, 0, 0, 0.205);
         padding: 5px;
         transition: 0.25s;
    }
    
    .reset:hover {
         background-color:  rgba(255, 0, 0, 0.411);
         color: rgb(190, 190, 190);
         transition: 0.25s;
    }
    
    .body {
        min-height: 693px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
    
    .taskbody {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    
    
    .tasktitle {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .weekday:hover .tasktitle {
        width: 100%;
        height: auto;
        opacity: 0.6;
        transition: 0.25s;
    }
    
    
    .task {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .task:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
        transition: 0.1s;
    }
    
    .task:hover .tasktitle {
        opacity: 1;
    }
    
    .task:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .task:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .task:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .task:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .N:hover {
        cursor: pointer;
    }
    
    .Y:hover {
        cursor: pointer;
    }
    
    .X:hover {
        cursor: pointer;
    }
    .A:hover {
        cursor: pointer;
    }
    .addTask {
        height: 0;
        width: 0;
        opacity: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        transition: 0.1s;
    }
    .task:hover .addTask {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.1s;
    }
    .addTaskForm {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        padding-bottom: 12px;
        trasition: 0.1s;
    }
    .DayNoteInput {
        height: 0px;
        width: 0px;
        visibility: hidden;
        background-color: transparent;
        pointer-events: none;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        transition: 0.25s;
    }
    .weekday:hover .addButton {
        width: 60px;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        trasition: 0.1s;
    }
    .addButton {
        width: 0px;
        font-size: 0px;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        height: 0px;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        visibility: hidden;
        cursor: pointer;
        trasition: 0.1s;
    }
    }
    .addButton:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        trasition: 0.1s;
    }
    .weekday:hover .DayNoteInput {
        height: 15px;
        width: 180px;
        outline: 0;
        padding: 6px;
        visibility: visible;
        font-size: 15px;
        pointer-events: auto;
        transition: 0.25s;
        
    }
    .DayNoteInput:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInput::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInput::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInput:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInput:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .daynote {
        display: flex;
        flex-direction: row;
    }
    .addTaskInput {
        height: 0px;
        width: 0px;
        visibility: hidden;
        background-color: transparent;
        pointer-events: none;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        trasition: 0.1s;
    }
    .weekday:hover .addTaskButton {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        trasition: 0.1s;
    }
    .addTaskButton {
        width: 0px;
        font-size: 0px;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        height: 0px;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        trasition: 0.1s;
        visibility: hidden;
        cursor: pointer;
    }
    }
    .addTaskButton:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);
        trasition: 0.1s;
    }
    .weekday:hover .addTaskInput {
        height: 15px;
        width: 75%;
        outline: 0;
        padding: 6px;
        visibility: visible;
        font-size: 15px;
        pointer-events: auto;
        trasition: 0.1s;
        
    }
    .addTaskInput:hover {
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
        trasition: 0.1s;
    }
    .addTaskInput::-webkit-input-placeholder {
        color: white;
        trasition: 0.1s;
    }
    .addTaskInput::-moz-placeholder {
        color: white;
        trasition: 0.1s;
    }
    .addTaskInput:-ms-input-placeholder {
        color: white;
        trasition: 0.1s;
    }
    
    .addTaskInput:-moz-placeholder {
        color: white;
        trasition: 0.1s;
    }
    .addtasktitle {
        padding-bottom: 12px;
    }
    .deleteTask {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    .task:hover .deleteTask {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTask:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .Arrow {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .Arrow:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .task:hover .Arrow {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .Arrowb {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    .task:hover .Arrowb {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    `;
    useEffect(()=> {
        getWeekPercentage();
    }, [])
    useEffect(() => {
        getWeekPercentage();
    }, [total])

    var MondayNoteVar;
    var TuesdayNoteVar;
    var WednesdayNoteVar;
    var ThursdayNoteVar;
    var FridayNoteVar;
    var SaturdayNoteVar;
    var SundayNoteVar;

    let mondayTasksVar = [];
    let mondayTasksState = [];
    function addTaskMonday(a) {
        TasksMonday.tasks.map((task) => {
            mondayTasksVar.push(task)
        })
        TasksMonday.state.map((state) => {
            mondayTasksState.push(state)
        })
        
        mondayTasksVar.push(a);
        mondayTasksState.push("X");
        setTasksMonday({
            tasks: JSON.parse(JSON.stringify(mondayTasksVar)),
            state: JSON.parse(JSON.stringify(mondayTasksState))
        });
        localStorage.setItem('localstoragetasksmonday', JSON.stringify(mondayTasksVar))
        localStorage.setItem('localstoragestatemonday', JSON.stringify(mondayTasksState))
    }

    let tuesdayTasksVar = [];
    let tuesdayTasksState = [];
    function addTaskTuesday(a) {
        TasksTuesday.tasks.map((task) => {
            tuesdayTasksVar.push(task)
        })
        TasksTuesday.state.map((state) => {
            tuesdayTasksState.push(state)
        })
        
        tuesdayTasksVar.push(a);
        tuesdayTasksState.push("X");
        setTasksTuesday({
            tasks: JSON.parse(JSON.stringify(tuesdayTasksVar)),
            state: JSON.parse(JSON.stringify(tuesdayTasksState))
        });
        localStorage.setItem('localstoragetaskstuesday', JSON.stringify(tuesdayTasksVar))
        localStorage.setItem('localstoragestatetuesday', JSON.stringify(tuesdayTasksState))
    }

    let wednesdayTasksVar = [];
    let wednesdayTasksState = [];
    function addTaskWednesday(a) {
        TasksWednesday.tasks.map((task) => {
            wednesdayTasksVar.push(task)
        })
        TasksWednesday.state.map((state) => {
            wednesdayTasksState.push(state)
        })
        
        wednesdayTasksVar.push(a);
        wednesdayTasksState.push("X");
        setTasksWednesday({
            tasks: JSON.parse(JSON.stringify(wednesdayTasksVar)),
            state: JSON.parse(JSON.stringify(wednesdayTasksState))
        });
        localStorage.setItem('localstoragetaskswednesday', JSON.stringify(wednesdayTasksVar))
        localStorage.setItem('localstoragestatewednesday', JSON.stringify(wednesdayTasksState))
    }

    let thursdayTasksVar = [];
    let thursdayTasksState = [];
    function addTaskThursday(a) {
        TasksThursday.tasks.map((task) => {
            thursdayTasksVar.push(task)
        })
        TasksThursday.state.map((state) => {
            thursdayTasksState.push(state)
        })
        
        thursdayTasksVar.push(a);
        thursdayTasksState.push("X");
        setTasksThursday({
            tasks: JSON.parse(JSON.stringify(thursdayTasksVar)),
            state: JSON.parse(JSON.stringify(thursdayTasksState))
        });
        localStorage.setItem('localstoragetasksthursday', JSON.stringify(thursdayTasksVar))
        localStorage.setItem('localstoragestatethursday', JSON.stringify(thursdayTasksState))
    }

    let fridayTasksVar = [];
    let fridayTasksState = [];
    function addTaskFriday(a) {
        TasksFriday.tasks.map((task) => {
            fridayTasksVar.push(task)
        })
        TasksFriday.state.map((state) => {
            fridayTasksState.push(state)
        })
        
        fridayTasksVar.push(a);
        fridayTasksState.push("X");
        setTasksFriday({
            tasks: JSON.parse(JSON.stringify(fridayTasksVar)),
            state: JSON.parse(JSON.stringify(fridayTasksState))
        });
        localStorage.setItem('localstoragetasksfriday', JSON.stringify(fridayTasksVar))
        localStorage.setItem('localstoragestatefriday', JSON.stringify(fridayTasksState))
    }

    let saturdayTasksVar = [];
    let saturdayTasksState = [];
    function addTaskSaturday(a) {
        TasksSaturday.tasks.map((task) => {
            saturdayTasksVar.push(task)
        })
        TasksSaturday.state.map((state) => {
            saturdayTasksState.push(state)
        })
        
        saturdayTasksVar.push(a);
        saturdayTasksState.push("X");
        setTasksSaturday({
            tasks: JSON.parse(JSON.stringify(saturdayTasksVar)),
            state: JSON.parse(JSON.stringify(saturdayTasksState))
        });
        localStorage.setItem('localstoragetaskssaturday', JSON.stringify(saturdayTasksVar))
        localStorage.setItem('localstoragestatesaturday', JSON.stringify(saturdayTasksState))
    }

    let sundayTasksVar = [];
    let sundayTasksState = [];
    function addTaskSunday(a) {
        TasksSunday.tasks.map((task) => {
            sundayTasksVar.push(task)
        })
        TasksSunday.state.map((state) => {
            sundayTasksState.push(state)
        })
        
        sundayTasksVar.push(a);
        sundayTasksState.push("X");
        setTasksSunday({
            tasks: JSON.parse(JSON.stringify(sundayTasksVar)),
            state: JSON.parse(JSON.stringify(sundayTasksState))
        });
        localStorage.setItem('localstoragetaskssunday', JSON.stringify(sundayTasksVar))
        localStorage.setItem('localstoragestatesunday', JSON.stringify(sundayTasksState))
    }

    let MondayTaskAdd;
    let TuesdayTaskAdd;
    let WednesdayTaskAdd;
    let ThursdayTaskAdd;
    let FridayTaskAdd;
    let SaturdayTaskAdd;
    let SundayTaskAdd;

    function reset() {
        mondayTasksVar = [];
        mondayTasksState = []
        TasksMonday.tasks.map((task) => {
            mondayTasksVar.push(task);
            mondayTasksState.push("X");
        })
        setTasksMonday({
            tasks: JSON.parse(JSON.stringify(mondayTasksVar)),
            state: JSON.parse(JSON.stringify(mondayTasksState))
        });
        localStorage.setItem('localstoragetasksmonday', JSON.stringify(mondayTasksVar))
        localStorage.setItem('localstoragestatemonday', JSON.stringify(mondayTasksState))

        tuesdayTasksVar = [];
        tuesdayTasksState = []
        TasksTuesday.tasks.map((task) => {
            tuesdayTasksVar.push(task);
            tuesdayTasksState.push("X");
        })
        setTasksTuesday({
            tasks: JSON.parse(JSON.stringify(tuesdayTasksVar)),
            state: JSON.parse(JSON.stringify(tuesdayTasksState))
        });
        localStorage.setItem('localstoragetaskstuesday', JSON.stringify(tuesdayTasksVar))
        localStorage.setItem('localstoragestatetuesday', JSON.stringify(tuesdayTasksState))

        wednesdayTasksVar = [];
        wednesdayTasksState = []
        TasksWednesday.tasks.map((task) => {
            wednesdayTasksVar.push(task);
            wednesdayTasksState.push("X");
        })
        setTasksWednesday({
            tasks: JSON.parse(JSON.stringify(wednesdayTasksVar)),
            state: JSON.parse(JSON.stringify(wednesdayTasksState))
        });

        localStorage.setItem('localstoragetaskswednesday', JSON.stringify(wednesdayTasksVar))
        localStorage.setItem('localstoragestatewednesday', JSON.stringify(wednesdayTasksState))

        thursdayTasksVar = [];
        thursdayTasksState = []
        TasksThursday.tasks.map((task) => {
            thursdayTasksVar.push(task);
            thursdayTasksState.push("X");
        })
        setTasksThursday({
            tasks: JSON.parse(JSON.stringify(thursdayTasksVar)),
            state: JSON.parse(JSON.stringify(thursdayTasksState))
        });
        localStorage.setItem('localstoragetasksthursday', JSON.stringify(thursdayTasksVar))
        localStorage.setItem('localstoragestatethursday', JSON.stringify(thursdayTasksState))

        fridayTasksVar = [];
        fridayTasksState = []
        TasksFriday.tasks.map((task) => {
            fridayTasksVar.push(task);
            fridayTasksState.push("X");
        })
        setTasksFriday({
            tasks: JSON.parse(JSON.stringify(fridayTasksVar)),
            state: JSON.parse(JSON.stringify(fridayTasksState))
        });
        localStorage.setItem('localstoragetasksfriday', JSON.stringify(fridayTasksVar))
        localStorage.setItem('localstoragestatefriday', JSON.stringify(fridayTasksState))

        saturdayTasksVar = [];
        saturdayTasksState = []
        TasksSaturday.tasks.map((task) => {
            saturdayTasksVar.push(task);
            saturdayTasksState.push("X");
        })
        setTasksSaturday({
            tasks: JSON.parse(JSON.stringify(saturdayTasksVar)),
            state: JSON.parse(JSON.stringify(saturdayTasksState))
        });
        localStorage.setItem('localstoragetaskssaturday', JSON.stringify(saturdayTasksVar))
        localStorage.setItem('localstoragestatesaturday', JSON.stringify(saturdayTasksState))

        sundayTasksVar = [];
        sundayTasksState = []
        TasksSunday.tasks.map((task) => {
            sundayTasksVar.push(task);
            sundayTasksState.push("X");
        })
        setTasksSunday({
            tasks: JSON.parse(JSON.stringify(sundayTasksVar)),
            state: JSON.parse(JSON.stringify(sundayTasksState))
        });
        localStorage.setItem('localstoragetaskssunday', JSON.stringify(sundayTasksVar))
        localStorage.setItem('localstoragestatesunday', JSON.stringify(sundayTasksState))
    }

    var u = 0;
    function deleteMonday(idvalue) {
        mondayTasksVar = [];
        mondayTasksState = [];
        u = 0;
        TasksMonday.tasks.map((task) => {
            mondayTasksVar.push(task);
            mondayTasksState.push(TasksMonday.state[u]);
            u++;
        });
        mondayTasksVar.splice(idvalue, 1);
        mondayTasksState.splice(idvalue, 1);
        setTasksMonday({
            tasks: JSON.parse(JSON.stringify(mondayTasksVar)),
            state: JSON.parse(JSON.stringify(mondayTasksState))
        })
        localStorage.setItem('localstoragetasksmonday', JSON.stringify(mondayTasksVar))
        localStorage.setItem('localstoragestatemonday', JSON.stringify(mondayTasksState))
    }

    function deleteTuesday(idvalue) {
        tuesdayTasksVar = [];
        tuesdayTasksState = [];
        u = 0;
        TasksTuesday.tasks.map((task) => {
            tuesdayTasksVar.push(task);
            tuesdayTasksState.push(TasksTuesday.state[u]);
            u++;
        });
        tuesdayTasksVar.splice(idvalue, 1);
        tuesdayTasksState.splice(idvalue, 1);
        setTasksTuesday({
            tasks: JSON.parse(JSON.stringify(tuesdayTasksVar)),
            state: JSON.parse(JSON.stringify(tuesdayTasksState))
        })
        localStorage.setItem('localstoragetaskstuesday', JSON.stringify(tuesdayTasksVar))
        localStorage.setItem('localstoragestatetuesday', JSON.stringify(tuesdayTasksState))
    }

    function deleteWednesday(idvalue) {
        wednesdayTasksVar = [];
        wednesdayTasksState = [];
        u = 0;
        TasksWednesday.tasks.map((task) => {
            wednesdayTasksVar.push(task);
            wednesdayTasksState.push(TasksWednesday.state[u]);
            u++;
        });
        wednesdayTasksVar.splice(idvalue, 1);
        wednesdayTasksState.splice(idvalue, 1);
        setTasksWednesday({
            tasks: JSON.parse(JSON.stringify(wednesdayTasksVar)),
            state: JSON.parse(JSON.stringify(wednesdayTasksState))
        })
        localStorage.setItem('localstoragetaskswednesday', JSON.stringify(wednesdayTasksVar))
        localStorage.setItem('localstoragestatewednesday', JSON.stringify(wednesdayTasksState))
    }

    function deleteThursday(idvalue) {
        thursdayTasksVar = [];
        thursdayTasksState = [];
        u = 0;
        TasksThursday.tasks.map((task) => {
            thursdayTasksVar.push(task);
            thursdayTasksState.push(TasksThursday.state[u]);
            u++;
        });
        thursdayTasksVar.splice(idvalue, 1);
        thursdayTasksState.splice(idvalue, 1);
        setTasksThursday({
            tasks: JSON.parse(JSON.stringify(thursdayTasksVar)),
            state: JSON.parse(JSON.stringify(thursdayTasksState))
        })
        localStorage.setItem('localstoragetasksthursday', JSON.stringify(thursdayTasksVar))
        localStorage.setItem('localstoragestatethursday', JSON.stringify(thursdayTasksState))
    }

    function deleteFriday(idvalue) {
        fridayTasksVar = [];
        fridayTasksState = [];
        u = 0;
        TasksFriday.tasks.map((task) => {
            fridayTasksVar.push(task);
            fridayTasksState.push(TasksFriday.state[u]);
            u++;
        });
        fridayTasksVar.splice(idvalue, 1);
        fridayTasksState.splice(idvalue, 1);
        setTasksFriday({
            tasks: JSON.parse(JSON.stringify(fridayTasksVar)),
            state: JSON.parse(JSON.stringify(fridayTasksState))
        })
        localStorage.setItem('localstoragetasksfriday', JSON.stringify(fridayTasksVar))
        localStorage.setItem('localstoragestatefriday', JSON.stringify(fridayTasksState))
    }

    function deleteSaturday(idvalue) {
        saturdayTasksVar = [];
        saturdayTasksState = [];
        u = 0;
        TasksSaturday.tasks.map((task) => {
            saturdayTasksVar.push(task);
            saturdayTasksState.push(TasksSaturday.state[u]);
            u++;
        });
        saturdayTasksVar.splice(idvalue, 1);
        saturdayTasksState.splice(idvalue, 1);
        setTasksSaturday({
            tasks: JSON.parse(JSON.stringify(saturdayTasksVar)),
            state: JSON.parse(JSON.stringify(saturdayTasksState))
        })
        localStorage.setItem('localstoragetaskssaturday', JSON.stringify(saturdayTasksVar))
        localStorage.setItem('localstoragestatesaturday', JSON.stringify(saturdayTasksState))
    }

    function deleteSunday(idvalue) {
        sundayTasksVar = [];
        sundayTasksState = [];
        u = 0;
        TasksSunday.tasks.map((task) => {
            sundayTasksVar.push(task);
            sundayTasksState.push(TasksSunday.state[u]);
            u++;
        });
        sundayTasksVar.splice(idvalue, 1);
        sundayTasksState.splice(idvalue, 1);
        setTasksSunday({
            tasks: JSON.parse(JSON.stringify(sundayTasksVar)),
            state: JSON.parse(JSON.stringify(sundayTasksState))
        })
        localStorage.setItem('localstoragetaskssunday', JSON.stringify(sundayTasksVar))
        localStorage.setItem('localstoragestatesunday', JSON.stringify(sundayTasksState))
    }



    var x = 0;
    function resetx () {
        x = 0;
    }

    var j = 0;
    function resetj (){
        j = 0;
    }

    function changeMonday (idinput) {
        mondayTasksVar = [];
        mondayTasksState = [];
        u = 0;
        TasksMonday.tasks.map((task) => {
            mondayTasksVar.push(task);
            mondayTasksState.push(TasksMonday.state[u]);
            u++;
        });
        if (mondayTasksState[idinput] === "X") {
            mondayTasksState[idinput] = "Y"
        } else if (mondayTasksState[idinput] === "Y") {
            mondayTasksState[idinput] = "N"
        } else if (mondayTasksState[idinput] === "N") {
            mondayTasksState[idinput] = "X"
        }
        setTasksMonday({
            tasks: JSON.parse(JSON.stringify(mondayTasksVar)),
            state: JSON.parse(JSON.stringify(mondayTasksState))
        })
        localStorage.setItem('localstoragetasksmonday', JSON.stringify(mondayTasksVar))
        localStorage.setItem('localstoragestatemonday', JSON.stringify(mondayTasksState))
    }
    function changeTuesday (idinput) {
        tuesdayTasksVar = [];
        tuesdayTasksState = [];
        u = 0;
        TasksTuesday.tasks.map((task) => {
            tuesdayTasksVar.push(task);
            tuesdayTasksState.push(TasksTuesday.state[u]);
            u++;
        });
        if (tuesdayTasksState[idinput] === "X") {
            tuesdayTasksState[idinput] = "Y"
        } else if (tuesdayTasksState[idinput] === "Y") {
            tuesdayTasksState[idinput] = "N"
        } else if (tuesdayTasksState[idinput] === "N") {
            tuesdayTasksState[idinput] = "X"
        }
        setTasksTuesday({
            tasks: JSON.parse(JSON.stringify(tuesdayTasksVar)),
            state: JSON.parse(JSON.stringify(tuesdayTasksState))
        })
        localStorage.setItem('localstoragetaskstuesday', JSON.stringify(tuesdayTasksVar))
        localStorage.setItem('localstoragestatetuesday', JSON.stringify(tuesdayTasksState))
    }

    function changeWednesday (idinput) {
        wednesdayTasksVar = [];
        wednesdayTasksState = [];
        u = 0;
        TasksWednesday.tasks.map((task) => {
            wednesdayTasksVar.push(task);
            wednesdayTasksState.push(TasksWednesday.state[u]);
            u++;
        });
        if (wednesdayTasksState[idinput] === "X") {
            wednesdayTasksState[idinput] = "Y"
        } else if (wednesdayTasksState[idinput] === "Y") {
            wednesdayTasksState[idinput] = "N"
        } else if (wednesdayTasksState[idinput] === "N") {
            wednesdayTasksState[idinput] = "X"
        }
        setTasksWednesday({
            tasks: JSON.parse(JSON.stringify(wednesdayTasksVar)),
            state: JSON.parse(JSON.stringify(wednesdayTasksState))
        })
        localStorage.setItem('localstoragetaskswednesday', JSON.stringify(wednesdayTasksVar))
        localStorage.setItem('localstoragestatewednesday', JSON.stringify(wednesdayTasksState))
    }

    function changeThursday (idinput) {
        thursdayTasksVar = [];
        thursdayTasksState = [];
        u = 0;
        TasksThursday.tasks.map((task) => {
            thursdayTasksVar.push(task);
            thursdayTasksState.push(TasksThursday.state[u]);
            u++;
        });
        if (thursdayTasksState[idinput] === "X") {
            thursdayTasksState[idinput] = "Y"
        } else if (thursdayTasksState[idinput] === "Y") {
            thursdayTasksState[idinput] = "N"
        } else if (thursdayTasksState[idinput] === "N") {
            thursdayTasksState[idinput] = "X"
        }
        setTasksThursday({
            tasks: JSON.parse(JSON.stringify(thursdayTasksVar)),
            state: JSON.parse(JSON.stringify(thursdayTasksState))
        })
        localStorage.setItem('localstoragetasksthursday', JSON.stringify(thursdayTasksVar))
        localStorage.setItem('localstoragestatethursday', JSON.stringify(thursdayTasksState))
    }

    function changeFriday (idinput) {
        fridayTasksVar = [];
        fridayTasksState = [];
        u = 0;
        TasksFriday.tasks.map((task) => {
            fridayTasksVar.push(task);
            fridayTasksState.push(TasksFriday.state[u]);
            u++;
        });
        if (fridayTasksState[idinput] === "X") {
            fridayTasksState[idinput] = "Y"
        } else if (fridayTasksState[idinput] === "Y") {
            fridayTasksState[idinput] = "N"
        } else if (fridayTasksState[idinput] === "N") {
            fridayTasksState[idinput] = "X"
        }
        setTasksFriday({
            tasks: JSON.parse(JSON.stringify(fridayTasksVar)),
            state: JSON.parse(JSON.stringify(fridayTasksState))
        })
        localStorage.setItem('localstoragetasksfriday', JSON.stringify(fridayTasksVar))
        localStorage.setItem('localstoragestatefriday', JSON.stringify(fridayTasksState))
    }

    function changeSaturday (idinput) {
        saturdayTasksVar = [];
        saturdayTasksState = [];
        u = 0;
        TasksSaturday.tasks.map((task) => {
            saturdayTasksVar.push(task);
            saturdayTasksState.push(TasksSaturday.state[u]);
            u++;
        });
        if (saturdayTasksState[idinput] === "X") {
            saturdayTasksState[idinput] = "Y"
        } else if (saturdayTasksState[idinput] === "Y") {
            saturdayTasksState[idinput] = "N"
        } else if (saturdayTasksState[idinput] === "N") {
            saturdayTasksState[idinput] = "X"
        }
        setTasksSaturday({
            tasks: JSON.parse(JSON.stringify(saturdayTasksVar)),
            state: JSON.parse(JSON.stringify(saturdayTasksState))
        })
        localStorage.setItem('localstoragetaskssaturday', JSON.stringify(saturdayTasksVar))
        localStorage.setItem('localstoragestatesaturday', JSON.stringify(saturdayTasksState))
    }

    function changeSunday (idinput) {
        sundayTasksVar = [];
        sundayTasksState = [];
        u = 0;
        TasksSunday.tasks.map((task) => {
            sundayTasksVar.push(task);
            sundayTasksState.push(TasksSunday.state[u]);
            u++;
        });
        if (sundayTasksState[idinput] === "X") {
            sundayTasksState[idinput] = "Y"
        } else if (sundayTasksState[idinput] === "Y") {
            sundayTasksState[idinput] = "N"
        } else if (sundayTasksState[idinput] === "N") {
            sundayTasksState[idinput] = "X"
        }
        setTasksSunday({
            tasks: JSON.parse(JSON.stringify(sundayTasksVar)),
            state: JSON.parse(JSON.stringify(sundayTasksState))
        })
        localStorage.setItem('localstoragetaskssunday', JSON.stringify(sundayTasksVar))
        localStorage.setItem('localstoragestatesunday', JSON.stringify(sundayTasksState))
    }

    let mondayTopIdup;
    let mondayDownIdup;
    let mondayTopIdupState;
    let mondayDownIdupState;

    function upMonday(idvalue) {
        mondayTasksVar = [];
        mondayTasksState = [];
        u = 0;
        TasksMonday.tasks.map((task) => {
            mondayTasksVar.push(task);
            mondayTasksState.push(TasksMonday.state[u]);
            u = u + 1;
        });

        mondayTopIdup = mondayTasksVar[idvalue];
        mondayDownIdup = mondayTasksVar[idvalue - 1];
        mondayTasksVar[idvalue - 1] = mondayTopIdup;
        mondayTasksVar[idvalue] = mondayDownIdup;

        mondayTopIdupState = mondayTasksState[idvalue];
        mondayDownIdupState = mondayTasksState[idvalue - 1];
        mondayTasksState[idvalue - 1] = mondayTopIdupState;
        mondayTasksState[idvalue] = mondayDownIdupState;
        setTasksMonday({
            tasks: JSON.parse(JSON.stringify(mondayTasksVar)),
            state: JSON.parse(JSON.stringify(mondayTasksState))
        })
        
        localStorage.setItem('localstoragetasksmonday', JSON.stringify(mondayTasksVar))
        localStorage.setItem('localstoragestatemonday', JSON.stringify(mondayTasksState))
        
        
    }
    function downMonday(idvalue) {
        mondayTasksVar = [];
        mondayTasksState = [];
        u = 0;
        TasksMonday.tasks.map((task) => {
            mondayTasksVar.push(task);
            mondayTasksState.push(TasksMonday.state[u]);
            u = u +1;
        });


        mondayTopIdup = mondayTasksVar[idvalue];
        mondayDownIdup = mondayTasksVar[idvalue - 1];

        mondayTasksVar[idvalue - 1] = mondayTopIdup;
        mondayTasksVar[idvalue] = mondayDownIdup;

        mondayTopIdupState = mondayTasksState[idvalue];
        mondayDownIdupState = mondayTasksState[idvalue - 1];

        mondayTasksState[idvalue - 1] = mondayTopIdupState;
        mondayTasksState[idvalue] = mondayDownIdupState;
        setTasksMonday({
            tasks: JSON.parse(JSON.stringify(mondayTasksVar)),
            state: JSON.parse(JSON.stringify(mondayTasksState))
        })
        
        localStorage.setItem('localstoragetasksmonday', JSON.stringify(mondayTasksVar))
        localStorage.setItem('localstoragestatemonday', JSON.stringify(mondayTasksState))
        
    }

    let tuesdayTopIdup;
    let tuesdayDownIdup;
    let tuesdayTopIdupState;
    let tuesdayDownIdupState;

    function upTuesday(idvalue) {
        tuesdayTasksVar = [];
        tuesdayTasksState = [];
        u = 0;
        TasksTuesday.tasks.map((task) => {
            tuesdayTasksVar.push(task);
            tuesdayTasksState.push(TasksTuesday.state[u]);
            u = u + 1;
        });

        tuesdayTopIdup = tuesdayTasksVar[idvalue];
        tuesdayDownIdup = tuesdayTasksVar[idvalue - 1];
        tuesdayTasksVar[idvalue - 1] = tuesdayTopIdup;
        tuesdayTasksVar[idvalue] = tuesdayDownIdup;

        tuesdayTopIdupState = tuesdayTasksState[idvalue];
        tuesdayDownIdupState = tuesdayTasksState[idvalue - 1];
        tuesdayTasksState[idvalue - 1] = tuesdayTopIdupState;
        tuesdayTasksState[idvalue] = tuesdayDownIdupState;
        setTasksTuesday({
            tasks: JSON.parse(JSON.stringify(tuesdayTasksVar)),
            state: JSON.parse(JSON.stringify(tuesdayTasksState))
        })
        
        localStorage.setItem('localstoragetaskstuesday', JSON.stringify(tuesdayTasksVar))
        localStorage.setItem('localstoragestatetuesday', JSON.stringify(tuesdayTasksState))
        
        
    }
    function downTuesday(idvalue) {
        tuesdayTasksVar = [];
        tuesdayTasksState = [];
        u = 0;
        TasksTuesday.tasks.map((task) => {
            tuesdayTasksVar.push(task);
            tuesdayTasksState.push(TasksTuesday.state[u]);
            u = u +1;
        });


        tuesdayTopIdup = tuesdayTasksVar[idvalue];
        tuesdayDownIdup = tuesdayTasksVar[idvalue - 1];

        tuesdayTasksVar[idvalue - 1] = tuesdayTopIdup;
        tuesdayTasksVar[idvalue] = tuesdayDownIdup;

        tuesdayTopIdupState = tuesdayTasksState[idvalue];
        tuesdayDownIdupState = tuesdayTasksState[idvalue - 1];

        tuesdayTasksState[idvalue - 1] = tuesdayTopIdupState;
        tuesdayTasksState[idvalue] = tuesdayDownIdupState;
        setTasksTuesday({
            tasks: JSON.parse(JSON.stringify(tuesdayTasksVar)),
            state: JSON.parse(JSON.stringify(tuesdayTasksState))
        })
        
        localStorage.setItem('localstoragetaskstuesday', JSON.stringify(tuesdayTasksVar))
        localStorage.setItem('localstoragestatetuesday', JSON.stringify(tuesdayTasksState))
        
    }

    let wednesdayTopIdup;
    let wednesdayDownIdup;
    let wednesdayTopIdupState;
    let wednesdayDownIdupState;

    function upWednesday(idvalue) {
        wednesdayTasksVar = [];
        wednesdayTasksState = [];
        u = 0;
        TasksWednesday.tasks.map((task) => {
            wednesdayTasksVar.push(task);
            wednesdayTasksState.push(TasksWednesday.state[u]);
            u = u + 1;
        });

        wednesdayTopIdup = wednesdayTasksVar[idvalue];
        wednesdayDownIdup = wednesdayTasksVar[idvalue - 1];
        wednesdayTasksVar[idvalue - 1] = wednesdayTopIdup;
        wednesdayTasksVar[idvalue] = wednesdayDownIdup;

        wednesdayTopIdupState = wednesdayTasksState[idvalue];
        wednesdayDownIdupState = wednesdayTasksState[idvalue - 1];
        wednesdayTasksState[idvalue - 1] = wednesdayTopIdupState;
        wednesdayTasksState[idvalue] = wednesdayDownIdupState;
        setTasksWednesday({
            tasks: JSON.parse(JSON.stringify(wednesdayTasksVar)),
            state: JSON.parse(JSON.stringify(wednesdayTasksState))
        })
        
        localStorage.setItem('localstoragetaskswednesday', JSON.stringify(wednesdayTasksVar))
        localStorage.setItem('localstoragestatewednesday', JSON.stringify(wednesdayTasksState))
        
        
    }
    function downWednesday(idvalue) {
        wednesdayTasksVar = [];
        wednesdayTasksState = [];
        u = 0;
        TasksWednesday.tasks.map((task) => {
            wednesdayTasksVar.push(task);
            wednesdayTasksState.push(TasksWednesday.state[u]);
            u = u +1;
        });


        wednesdayTopIdup = wednesdayTasksVar[idvalue];
        wednesdayDownIdup = wednesdayTasksVar[idvalue - 1];

        wednesdayTasksVar[idvalue - 1] = wednesdayTopIdup;
        wednesdayTasksVar[idvalue] = wednesdayDownIdup;

        wednesdayTopIdupState = wednesdayTasksState[idvalue];
        wednesdayDownIdupState = wednesdayTasksState[idvalue - 1];

        wednesdayTasksState[idvalue - 1] = wednesdayTopIdupState;
        wednesdayTasksState[idvalue] = wednesdayDownIdupState;
        setTasksWednesday({
            tasks: JSON.parse(JSON.stringify(wednesdayTasksVar)),
            state: JSON.parse(JSON.stringify(wednesdayTasksState))
        })
        
        localStorage.setItem('localstoragetaskswednesday', JSON.stringify(wednesdayTasksVar))
        localStorage.setItem('localstoragestatewednesday', JSON.stringify(wednesdayTasksState))
        
    }

    
    let thursdayTopIdup;
    let thursdayDownIdup;
    let thursdayTopIdupState;
    let thursdayDownIdupState;

    function upThursday(idvalue) {
        thursdayTasksVar = [];
        thursdayTasksState = [];
        u = 0;
        TasksThursday.tasks.map((task) => {
            thursdayTasksVar.push(task);
            thursdayTasksState.push(TasksThursday.state[u]);
            u = u + 1;
        });

        thursdayTopIdup = thursdayTasksVar[idvalue];
        thursdayDownIdup = thursdayTasksVar[idvalue - 1];
        thursdayTasksVar[idvalue - 1] = thursdayTopIdup;
        thursdayTasksVar[idvalue] = thursdayDownIdup;

        thursdayTopIdupState = thursdayTasksState[idvalue];
        thursdayDownIdupState = thursdayTasksState[idvalue - 1];
        thursdayTasksState[idvalue - 1] = thursdayTopIdupState;
        thursdayTasksState[idvalue] = thursdayDownIdupState;
        setTasksThursday({
            tasks: JSON.parse(JSON.stringify(thursdayTasksVar)),
            state: JSON.parse(JSON.stringify(thursdayTasksState))
        })
        
        localStorage.setItem('localstoragetasksthursday', JSON.stringify(thursdayTasksVar))
        localStorage.setItem('localstoragestatethursday', JSON.stringify(thursdayTasksState))
        
        
    }
    function downThursday(idvalue) {
        thursdayTasksVar = [];
        thursdayTasksState = [];
        u = 0;
        TasksThursday.tasks.map((task) => {
            thursdayTasksVar.push(task);
            thursdayTasksState.push(TasksThursday.state[u]);
            u = u +1;
        });


        thursdayTopIdup = thursdayTasksVar[idvalue];
        thursdayDownIdup = thursdayTasksVar[idvalue - 1];

        thursdayTasksVar[idvalue - 1] = thursdayTopIdup;
        thursdayTasksVar[idvalue] = thursdayDownIdup;

        thursdayTopIdupState = thursdayTasksState[idvalue];
        thursdayDownIdupState = thursdayTasksState[idvalue - 1];

        thursdayTasksState[idvalue - 1] = thursdayTopIdupState;
        thursdayTasksState[idvalue] = thursdayDownIdupState;
        setTasksThursday({
            tasks: JSON.parse(JSON.stringify(thursdayTasksVar)),
            state: JSON.parse(JSON.stringify(thursdayTasksState))
        })
        
        localStorage.setItem('localstoragetasksthursday', JSON.stringify(thursdayTasksVar))
        localStorage.setItem('localstoragestatethursday', JSON.stringify(thursdayTasksState))
        
    }

    let fridayTopIdup;
    let fridayDownIdup;
    let fridayTopIdupState;
    let fridayDownIdupState;

    function upFriday(idvalue) {
        fridayTasksVar = [];
        fridayTasksState = [];
        u = 0;
        TasksFriday.tasks.map((task) => {
            fridayTasksVar.push(task);
            fridayTasksState.push(TasksFriday.state[u]);
            u = u + 1;
        });

        fridayTopIdup = fridayTasksVar[idvalue];
        fridayDownIdup = fridayTasksVar[idvalue - 1];
        fridayTasksVar[idvalue - 1] = fridayTopIdup;
        fridayTasksVar[idvalue] = fridayDownIdup;

        fridayTopIdupState = fridayTasksState[idvalue];
        fridayDownIdupState = fridayTasksState[idvalue - 1];
        fridayTasksState[idvalue - 1] = fridayTopIdupState;
        fridayTasksState[idvalue] = fridayDownIdupState;
        setTasksFriday({
            tasks: JSON.parse(JSON.stringify(fridayTasksVar)),
            state: JSON.parse(JSON.stringify(fridayTasksState))
        })
        
        localStorage.setItem('localstoragetasksfriday', JSON.stringify(fridayTasksVar))
        localStorage.setItem('localstoragestatefriday', JSON.stringify(fridayTasksState))
        
        
    }
    function downFriday(idvalue) {
        fridayTasksVar = [];
        fridayTasksState = [];
        u = 0;
        TasksFriday.tasks.map((task) => {
            fridayTasksVar.push(task);
            fridayTasksState.push(TasksFriday.state[u]);
            u = u +1;
        });


        fridayTopIdup = fridayTasksVar[idvalue];
        fridayDownIdup = fridayTasksVar[idvalue - 1];

        fridayTasksVar[idvalue - 1] = fridayTopIdup;
        fridayTasksVar[idvalue] = fridayDownIdup;

        fridayTopIdupState = fridayTasksState[idvalue];
        fridayDownIdupState = fridayTasksState[idvalue - 1];

        fridayTasksState[idvalue - 1] = fridayTopIdupState;
        fridayTasksState[idvalue] = fridayDownIdupState;
        setTasksFriday({
            tasks: JSON.parse(JSON.stringify(fridayTasksVar)),
            state: JSON.parse(JSON.stringify(fridayTasksState))
        })
        
        localStorage.setItem('localstoragetasksfriday', JSON.stringify(fridayTasksVar))
        localStorage.setItem('localstoragestatefriday', JSON.stringify(fridayTasksState))
        
    }

    let saturdayTopIdup;
    let saturdayDownIdup;
    let saturdayTopIdupState;
    let saturdayDownIdupState;

    function upSaturday(idvalue) {
        saturdayTasksVar = [];
        saturdayTasksState = [];
        u = 0;
        TasksSaturday.tasks.map((task) => {
            saturdayTasksVar.push(task);
            saturdayTasksState.push(TasksSaturday.state[u]);
            u = u + 1;
        });

        saturdayTopIdup = saturdayTasksVar[idvalue];
        saturdayDownIdup = saturdayTasksVar[idvalue - 1];
        saturdayTasksVar[idvalue - 1] = saturdayTopIdup;
        saturdayTasksVar[idvalue] = saturdayDownIdup;

        saturdayTopIdupState = saturdayTasksState[idvalue];
        saturdayDownIdupState = saturdayTasksState[idvalue - 1];
        saturdayTasksState[idvalue - 1] = saturdayTopIdupState;
        saturdayTasksState[idvalue] = saturdayDownIdupState;
        setTasksSaturday({
            tasks: JSON.parse(JSON.stringify(saturdayTasksVar)),
            state: JSON.parse(JSON.stringify(saturdayTasksState))
        })
        
        localStorage.setItem('localstoragetaskssaturday', JSON.stringify(saturdayTasksVar))
        localStorage.setItem('localstoragestatesaturday', JSON.stringify(saturdayTasksState))
        
        
    }
    function downSaturday(idvalue) {
        saturdayTasksVar = [];
        saturdayTasksState = [];
        u = 0;
        TasksSaturday.tasks.map((task) => {
            saturdayTasksVar.push(task);
            saturdayTasksState.push(TasksSaturday.state[u]);
            u = u +1;
        });


        saturdayTopIdup = saturdayTasksVar[idvalue];
        saturdayDownIdup = saturdayTasksVar[idvalue - 1];

        saturdayTasksVar[idvalue - 1] = saturdayTopIdup;
        saturdayTasksVar[idvalue] = saturdayDownIdup;

        saturdayTopIdupState = saturdayTasksState[idvalue];
        saturdayDownIdupState = saturdayTasksState[idvalue - 1];

        saturdayTasksState[idvalue - 1] = saturdayTopIdupState;
        saturdayTasksState[idvalue] = saturdayDownIdupState;
        setTasksSaturday({
            tasks: JSON.parse(JSON.stringify(saturdayTasksVar)),
            state: JSON.parse(JSON.stringify(saturdayTasksState))
        })
        
        localStorage.setItem('localstoragetaskssaturday', JSON.stringify(saturdayTasksVar))
        localStorage.setItem('localstoragestatesaturday', JSON.stringify(saturdayTasksState))
        
    }

    let sundayTopIdup;
    let sundayDownIdup;
    let sundayTopIdupState;
    let sundayDownIdupState;

    function upSunday(idvalue) {
        sundayTasksVar = [];
        sundayTasksState = [];
        u = 0;
        TasksSunday.tasks.map((task) => {
            sundayTasksVar.push(task);
            sundayTasksState.push(TasksSunday.state[u]);
            u = u + 1;
        });

        sundayTopIdup = sundayTasksVar[idvalue];
        sundayDownIdup = sundayTasksVar[idvalue - 1];
        sundayTasksVar[idvalue - 1] = sundayTopIdup;
        sundayTasksVar[idvalue] = sundayDownIdup;

        sundayTopIdupState = sundayTasksState[idvalue];
        sundayDownIdupState = sundayTasksState[idvalue - 1];
        sundayTasksState[idvalue - 1] = sundayTopIdupState;
        sundayTasksState[idvalue] = sundayDownIdupState;
        setTasksSunday({
            tasks: JSON.parse(JSON.stringify(sundayTasksVar)),
            state: JSON.parse(JSON.stringify(sundayTasksState))
        })
        
        localStorage.setItem('localstoragetaskssunday', JSON.stringify(sundayTasksVar))
        localStorage.setItem('localstoragestatesunday', JSON.stringify(sundayTasksState))
        
        
    }
    function downSunday(idvalue) {
        sundayTasksVar = [];
        sundayTasksState = [];
        u = 0;
        TasksSunday.tasks.map((task) => {
            sundayTasksVar.push(task);
            sundayTasksState.push(TasksSunday.state[u]);
            u = u +1;
        });


        sundayTopIdup = sundayTasksVar[idvalue];
        sundayDownIdup = sundayTasksVar[idvalue - 1];

        sundayTasksVar[idvalue - 1] = sundayTopIdup;
        sundayTasksVar[idvalue] = sundayDownIdup;

        sundayTopIdupState = sundayTasksState[idvalue];
        sundayDownIdupState = sundayTasksState[idvalue - 1];

        sundayTasksState[idvalue - 1] = sundayTopIdupState;
        sundayTasksState[idvalue] = sundayDownIdupState;
        setTasksSunday({
            tasks: JSON.parse(JSON.stringify(sundayTasksVar)),
            state: JSON.parse(JSON.stringify(sundayTasksState))
        })
        
        localStorage.setItem('localstoragetaskssunday', JSON.stringify(sundayTasksVar))
        localStorage.setItem('localstoragestatesunday', JSON.stringify(sundayTasksState))
        
    }

    var setArrowWithLength;
    return (
        <Body>
        <div className="body">
        <div className="bodycontentbox">
            <div className="weekday">
            <div className="weekdaytop">
                <div className="weekdayname">
                    <p className="weekdayinitial">M</p> 
                    <p className="weekdaycontinuation"> onday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {MondayNoteVar=event.target.value}} className="DayNoteInput" placeholder={MondayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setMondayNote({daynote: `${event.target.value}`}); localStorage.setItem('mondaydaynote', event.target.value)}}}></input>
                        <div className="addButton" onClick={() => {setMondayNote({daynote: `${MondayNoteVar}`}); localStorage.setItem('mondaydaynote', MondayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksMonday.tasks.map(task => (
                    <div className="task"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="Arrowb" opacity="0"></FaArrowUp> : <FaArrowUp className="Arrow" id={x} onClick={(event) => { upMonday(event.currentTarget.id)}}></FaArrowUp>}
                        
                        <div className="taskbody">
                          <div id={j} onClick={(event) => {changeMonday(event.currentTarget.id)}}>
                             <Taskcheckbox className="checkbox" status={TasksMonday.state[i]}>
                                 {
                                     i = i + 1
                                 }
                                 {
                                     j = j + 1
                                 }
                             </Taskcheckbox>
                          </div>
                          <h3 className="tasktitle">
                              {TasksMonday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTask" id={x} onClick={(event) => deleteMonday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksMonday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="Arrowb" opacity="0"> </FaArrowDown> : <FaArrowDown className="Arrow" id={x + 1} onClick={(event) => { downMonday(event.currentTarget.id) }}></FaArrowDown>}
                        <p hidden="hidden">
                              {
                                x = x + 1
                              }
                          </p>
                    </div>
                ))
                }
                {
                    reseti()
                }
                {
                    resetk()
                }
                {
                    resetx()
                }
                {
                    resetj()
                }
                <div className="task">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitle">Add task</h3>
                        
                        
                    </div>
                    <div className="addTask">
                            <h3 className="addtasktitle">New task</h3>
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {MondayTaskAdd=event.target.value}} className="addTaskInput" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskMonday(event.target.value)}}}></input>
                                <div className="addTaskButton" onClick={() =>addTaskMonday(MondayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="weekday">
            <div className="weekdaytop">
                <div className="weekdayname">
                    <p className="weekdayinitial">T</p> 
                    <p className="weekdaycontinuation"> uesday</p> 
                </div>
                
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {TuesdayNoteVar=event.target.value}} className="DayNoteInput" placeholder={TuesdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setTuesdayNote({daynote: `${event.target.value}`}); localStorage.setItem('tuesdaydaynote', event.target.value)}}}></input>
                        <div className="addButton" onClick={() => {setTuesdayNote({daynote: `${TuesdayNoteVar}`}); localStorage.setItem('tuesdaydaynote', TuesdayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
               {
                   TasksTuesday.tasks.map(task => (
                    <div className="task" key={"2" + i}>
                    {x === 0 ? <FaArrowUp className="Arrowb" opacity="0" id={x}></FaArrowUp> : <FaArrowUp className="Arrow" id={x} onClick={(event) => { upTuesday(event.currentTarget.id)}}></FaArrowUp>}
                    <div className="taskbody">
                      <div id={j} onClick={(event) => {changeTuesday(event.currentTarget.id)}}>
                         <Taskcheckbox className="checkbox" status={TasksTuesday.state[i]}>
                              {
                                  i = i + 1
                              }
                              {
                                  j = j + 1
                              }
                         </Taskcheckbox>
                      </div>
                      <h3 className="tasktitle">
                              {TasksTuesday.tasks[k]} 
                              <p hidden="hidden">
                                  {
                                  k = k + 1
                                  }
                              </p>
                      </h3>
                      <FaRegTrashAlt className="deleteTask" id={x} onClick={(event) => deleteTuesday(event.currentTarget.id)}></FaRegTrashAlt>
                      
                    </div>
                    <p hidden="hidden">
                        {
                            setArrowWithLength = TasksTuesday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="Arrowb" opacity="0"> </FaArrowDown> : <FaArrowDown className="Arrow" id={x + 1} onClick={(event) => { downTuesday(event.currentTarget.id) }}></FaArrowDown>}
                        <p hidden="hidden">
                              {
                                x = x + 1
                              }
                          </p>
                </div>
                ))
                }
                {
                    reseti()
                }
                {
                    resetk()
                }
                {
                    resetx()
                }
                {
                    resetj()
                }
                <div className="task">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitle">Add task</h3>
                    </div>
                    <div className="addTask">
                            <h3 className="addtasktitle">New task</h3>
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {TuesdayTaskAdd=event.target.value}} className="addTaskInput" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskTuesday(event.target.value)}}}></input>
                                <div className="addTaskButton" onClick={() => addTaskTuesday(TuesdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
            </div>



            <div className="weekday">
            <div className="weekdaytop">
                <div className="weekdayname">
                    <p className="weekdayinitial">W</p> 
                    <p className="weekdaycontinuation"> ednesday</p> 
                </div>
                
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {WednesdayNoteVar=event.target.value}} className="DayNoteInput" placeholder={WednesdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setWednesdayNote({daynote: `${event.target.value}`}); localStorage.setItem('wednesdaydaynote', event.target.value)}}}></input>
                        <div className="addButton" onClick={() => {setWednesdayNote({daynote: `${WednesdayNoteVar}`}); localStorage.setItem('wednesdaydaynote', WednesdayNoteVar)}}>EDIT</div>
                    </div>
                </div>     
                
            </div>
            {
                   TasksWednesday.tasks.map(task => (

                    <div className="task" key={"3" + i}>
                        {x === 0 ? <FaArrowUp className="Arrowb" opacity="0" id={x}></FaArrowUp> : <FaArrowUp className="Arrow" id={x} onClick={(event) => { upWednesday(event.currentTarget.id)}}></FaArrowUp>}
                        <div className="taskbody">
                          <div id={j} onClick={(event) => {changeWednesday(event.currentTarget.id)}}>
                             <Taskcheckbox className="checkbox" status={TasksWednesday.state[i]}>
                                  {
                                      i = i + 1
                                  }
                                  {
                                      j = j + 1
                                  }
                             </Taskcheckbox>
                          </div>
                          <h3 className="tasktitle">
                              {TasksWednesday.tasks[k]} 
                              <p hidden="hidden">
                                  {
                                  k = k + 1
                                  }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTask" id={x} onClick={(event) => deleteWednesday(event.currentTarget.id)}></FaRegTrashAlt>
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksWednesday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="Arrowb" opacity="0"> </FaArrowDown> : <FaArrowDown className="Arrow" id={x + 1} onClick={(event) => { downWednesday(event.currentTarget.id) }}></FaArrowDown>}
                        <p hidden="hidden">
                              {
                                x = x + 1
                              }
                          </p>
                    </div>
            ))
                }
                {
                    reseti()
                }
                {
                    resetk()
                }  
                {
                    resetx()
                }
                {
                    resetj()
                }
                <div className="task">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitle">Add task</h3>
                        
                        
                    </div>
                    <div className="addTask">
                            <h3 className="addtasktitle">New task</h3>
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {WednesdayTaskAdd=event.target.value}} className="addTaskInput" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskWednesday(event.target.value)}}}></input>
                                <div className="addTaskButton" onClick={() =>addTaskWednesday(WednesdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
            </div>



            <div className="weekday">
            <div className="weekdaytop">
                <div className="weekdayname">
                    <p className="weekdayinitial">T</p> 
                    <p className="weekdaycontinuation"> hursday</p> 
                </div>
                
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {ThursdayNoteVar=event.target.value}} className="DayNoteInput" placeholder={ThursdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setThursdayNote({daynote: `${event.target.value}`}); localStorage.setItem('thursdaydaynote', event.target.value)}}}></input>
                        <div className="addButton" onClick={() => {setThursdayNote({daynote: `${ThursdayNoteVar}`}); localStorage.setItem('thursdaydaynote', ThursdayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
            {
                   TasksThursday.tasks.map(task => (
                    <div className="task" key={"4" + i}> 
                    {x === 0 ? <FaArrowUp className="Arrowb" opacity="0" id={x}></FaArrowUp> : <FaArrowUp className="Arrow" id={x} onClick={(event) => { upThursday(event.currentTarget.id)}}></FaArrowUp>}
                        <div className="taskbody">
                          <div id={j} onClick={(event) => {changeThursday(event.currentTarget.id)}}>
                             <Taskcheckbox className="checkbox" status={TasksThursday.state[i]}>
                                  {
                                      i = i + 1
                                  }
                                  {
                                      j = j + 1
                                  }
                             </Taskcheckbox>
                          </div>
                          <h3 className="tasktitle">
                              {TasksThursday.tasks[k]} 
                              <p hidden="hidden">
                                  {
                                  k = k + 1
                                  }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTask" id={x} onClick={(event) => deleteThursday(event.currentTarget.id)}></FaRegTrashAlt>
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksThursday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="Arrowb" opacity="0"> </FaArrowDown> : <FaArrowDown className="Arrow" id={x + 1} onClick={(event) => { downThursday(event.currentTarget.id) }}></FaArrowDown>}
                        <p hidden="hidden">
                              {
                                x = x + 1
                              }
                          </p>
                    </div>
                ))
                }
                {
                    reseti()
                }
                {
                    resetk()
                }
                {
                    resetx()
                }
                {
                    resetj()
                }
                <div className="task">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitle">Add task</h3>
                        
                        
                    </div>
                    <div className="addTask">
                            <h3 className="addtasktitle">New task</h3>
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {ThursdayTaskAdd=event.target.value}} className="addTaskInput" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskThursday(event.target.value)}}}></input>
                                <div className="addTaskButton" onClick={() =>addTaskThursday(ThursdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
            </div>



            <div className="weekday">
            <div className="weekdaytop">
                <div className="weekdayname">
                    <p className="weekdayinitial">F</p> 
                    <p className="weekdaycontinuation"> riday</p> 
                </div>
                
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {FridayNoteVar=event.target.value}} className="DayNoteInput" placeholder={FridayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setFridayNote({daynote: `${event.target.value}`}); localStorage.setItem('fridaydaynote', event.target.value)}}}></input>
                        <div className="addButton" onClick={() => {setFridayNote({daynote: `${FridayNoteVar}`}); localStorage.setItem('fridaydaynote', FridayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksFriday.tasks.map(task => (
                    <div className="task" key={"5" + i}>
                        {x === 0 ? <FaArrowUp className="Arrowb" opacity="0" id={x}></FaArrowUp> : <FaArrowUp className="Arrow" id={x} onClick={(event) => { upFriday(event.currentTarget.id)}}></FaArrowUp>}
                        <div className="taskbody">
                          <div id={j} onClick={(event) => {changeFriday(event.currentTarget.id)}}>
                             <Taskcheckbox className="checkbox" status={TasksFriday.state[i]}>
                                  {
                                      i = i + 1
                                  }
                                  {
                                      j = j + 1
                                  }
                             </Taskcheckbox>
                          </div>
                          <h3 className="tasktitle">
                              {TasksFriday.tasks[k]} 
                              <p hidden="hidden">
                                  {
                                  k = k + 1
                                  }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTask" id={x} onClick={(event) => deleteFriday(event.currentTarget.id)}></FaRegTrashAlt>
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksFriday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="Arrowb" opacity="0"> </FaArrowDown> : <FaArrowDown className="Arrow" id={x + 1} onClick={(event) => { downFriday(event.currentTarget.id) }}></FaArrowDown>}
                        <p hidden="hidden">
                              {
                                x = x + 1
                              }
                          </p>
                    </div>
                ))
                }
                {
                    reseti()
                }
                {
                    resetk()
                }
                {
                    resetx()
                }
                {
                    resetj()
                }
                <div className="task">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitle">Add task</h3>
                        
                        
                    </div>
                    <div className="addTask">
                            <h3 className="addtasktitle">New task</h3>
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {FridayTaskAdd=event.target.value}} className="addTaskInput" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskFriday(event.target.value)}}}></input>
                                <div className="addTaskButton" onClick={() =>addTaskFriday(FridayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
            </div>



            <div className="weekday">
            <div className="weekdaytop">
                <div className="weekdayname">
                    <p className="weekdayinitial">S</p> 
                    <p className="weekdaycontinuation"> aturday</p> 
                </div>
                
                <div>
                   <div className="daynote">
                        <input maxLength="18" onChange={(event) => {SaturdayNoteVar=event.target.value}} className="DayNoteInput" placeholder={SaturdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setSaturdayNote({daynote: `${event.target.value}`}); localStorage.setItem('saturdaydaynote', event.target.value)}}}></input>
                        <div className="addButton" onClick={() => {setSaturdayNote({daynote: `${SaturdayNoteVar}`}); localStorage.setItem('saturdaydaynote', SaturdayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
            {
                TasksSaturday.tasks.map(task => (
                    <div className="task" key={"6" + i}>
                        {x === 0 ? <FaArrowUp className="Arrowb" opacity="0" id={x}></FaArrowUp> : <FaArrowUp className="Arrow" id={x} onClick={(event) => { upSaturday(event.currentTarget.id)}}></FaArrowUp>}
                        <div className="taskbody">
                          <div id={j} onClick={(event) => {changeSaturday(event.currentTarget.id)}}>
                             <Taskcheckbox className="checkbox" status={TasksSaturday.state[i]}>
                                  {
                                      i = i + 1
                                  }
                                  {
                                      j = j + 1
                                  }
                             </Taskcheckbox>
                          </div>
                          <h3 className="tasktitle">
                              {TasksSaturday.tasks[k]} 
                              <p hidden="hidden">
                                  {
                                  k = k + 1
                                  }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTask" id={x} onClick={(event) => deleteSaturday(event.currentTarget.id)}></FaRegTrashAlt>
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksSaturday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="Arrowb" opacity="0"> </FaArrowDown> : <FaArrowDown className="Arrow" id={x + 1} onClick={(event) => { downSaturday(event.currentTarget.id) }}></FaArrowDown>}
                        <p hidden="hidden">
                              {
                                x = x + 1
                              }
                          </p>
                    </div>
                ))
            }
            {
                reseti()
            }
            {
                resetk()
            }
            {
                resetx()
            }
            {
                resetj()
            }
            <div className="task">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitle">Add task</h3>
                        
                        
                    </div>
                    <div className="addTask">
                            <h3 className="addtasktitle">New task</h3>
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {SaturdayTaskAdd=event.target.value}} className="addTaskInput" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskSaturday(event.target.value)}}}></input>
                                <div className="addTaskButton" onClick={() =>addTaskSaturday(SaturdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
            </div>



            <div className="weekday">
            <div className="weekdaytop">
                <div className="weekdayname">
                    <p className="weekdayinitial">S</p> 
                    <p className="weekdaycontinuation"> unday</p> 
                </div>
                
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {SundayNoteVar=event.target.value}} className="DayNoteInput" placeholder={SundayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setSundayNote({daynote: `${event.target.value}`}); localStorage.setItem('sundaydaynote', event.target.value)}}}></input>
                        <div className="addButton" onClick={() => {setSundayNote({daynote: `${SundayNoteVar}`}); localStorage.setItem('sundaydaynote', SundayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksSunday.tasks.map(task => (
                    <div className="task" key={"0" + i}> 
                    {x === 0 ? <FaArrowUp className="Arrowb" opacity="0" id={x}></FaArrowUp> : <FaArrowUp className="Arrow" id={x} onClick={(event) => { upSunday(event.currentTarget.id)}}></FaArrowUp>}
                        <div className="taskbody">
                          <div id={j} onClick={(event) => {changeSunday(event.currentTarget.id)}}>
                             <Taskcheckbox className="checkbox" status={TasksSunday.state[i]}>
                                  {
                                      i = i + 1
                                  }
                                  {
                                      j = j + 1
                                  }
                             </Taskcheckbox>
                          </div>
                          <h3 className="tasktitle">
                              {TasksSunday.tasks[k]} 
                              <p hidden="hidden">
                                  {
                                  k = k + 1
                                  }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTask" id={x} onClick={(event) => deleteSunday(event.currentTarget.id)}></FaRegTrashAlt>
                        </div> 
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksSunday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="Arrowb" opacity="0"> </FaArrowDown> : <FaArrowDown className="Arrow" id={x + 1} onClick={(event) => { downSunday(event.currentTarget.id) }}></FaArrowDown>}
                        <p hidden="hidden">
                              {
                                x = x + 1
                              }
                          </p>
                        
                    </div>
                    
                ))
                
                }
                {
                    reseti()
                }
                {
                    resetk()
                }
                {
                    resetx()
                }
                {
                    resetj()
                }
                <div className="task">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitle">Add task</h3>
                        
                        
                    </div>
                    <div className="addTask">
                            <h3 className="addtasktitle">New task</h3>
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {SundayTaskAdd=event.target.value}} className="addTaskInput" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskSunday(event.target.value)}}}></input>
                                <div className="addTaskButton" onClick={() =>addTaskSunday(SundayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="databox">
            <div className="displays">
                <Display number={isNaN(A/TotalState) ? "0%" : Math.floor(A/TotalState*100) + "%"} description="done today"></Display>
                <Display number={isNaN(B/TotalSumState) ? "0%" : Math.floor((B/TotalSumState)*100) + "%"} description="done this week"></Display>
            </div>
            <p onClick={() => reset()} className="reset">Reset</p>
        </div>
        </div>
        </div>
        </Body>
    );
}

export default Body;
