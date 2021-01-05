import React, { useEffect, useState } from 'react';
import { FaInfoCircle, FaRegTrashAlt } from "react-icons/fa"

import Taskcheckbox from '../Taskcheckbox/Taskcheckbox';
import Display from '../Display/Display';

import styled from 'styled-components';

function Body() {
    //TasksStates
    let [ TasksMonday, setTasksMonday ] = useState({
        tasks : [
            "1",
            "2",
            "3"
        ],
        state : [
            "Y",
            "N",
            "X"
        ]
        
    })

    let [ MondayNote, setMondayNote] = useState({
        daynote: ""
    })
    let mondaydaynotetorage;
    useEffect(() => {
        mondaydaynotetorage = localStorage.getItem('mondaydaynote')
        setMondayNote({daynote: mondaydaynotetorage})
    }, [])
    

    let [ TasksTuesday, setTasksTuesday ] = useState({
        tasks : ["1"],
        state : ["Y"],
        
    });

    let [ TuesdayNote, setTuesdayNote] = useState({
        daynote: ""
    })
    let tuesdaydaynotetorage;
    useEffect(() => {
        tuesdaydaynotetorage = localStorage.getItem('tuesdaydaynote')
        setTuesdayNote({daynote: tuesdaydaynotetorage})
    }, [])

    let [ TasksWednesday, setTasksWednesday ] = useState({
        tasks : [
            "1",
            "2",
            "3"
        ],
        state : [
            "Y",
            "N",
            "X"
        ],
        
    });

    let [ WednesdayNote, setWednesdayNote] = useState({
        daynote: ""
    })
    let wednesdaydaynotetorage;
    useEffect(() => {
        wednesdaydaynotetorage = localStorage.getItem('wednesdaydaynote')
        setWednesdayNote({daynote: wednesdaydaynotetorage})
    }, [])

    let [ TasksThursday, setTasksThursday ] = useState({
        tasks : [
            "1",
            "2",
            "3"
        ],
        state : [
            "Y",
            "N",
            "X"
        ],
        
    });

    let [ ThursdayNote, setThursdayNote] = useState({
        daynote: ""
    })
    let thursdaydaynotetorage;
    useEffect(() => {
        thursdaydaynotetorage = localStorage.getItem('thursdaydaynote')
        setThursdayNote({daynote: thursdaydaynotetorage})
    }, [])

    let [ TasksFriday, setTasksFriday ] = useState({
        tasks : [
            "1",
            "2",
            "3"
        ],
        state : [
            "Y",
            "N",
            "X"
        ],
        
    });

    let [ FridayNote, setFridayNote] = useState({
        daynote: ""
    })
    let fridaydaynotetorage;
    useEffect(() => {
        fridaydaynotetorage = localStorage.getItem('fridaydaynote')
        setFridayNote({daynote: fridaydaynotetorage})
    }, [])

    let [ TasksSaturday, setTasksSaturday ] = useState({
        tasks : [
            "1",
            "2",
            "3"
        ],
        state : [
            "Y",
            "N",
            "X"
        ],
        
    });

    let [ SaturdayNote, setSaturdayNote] = useState({
        daynote: ""
    })
    let saturdaydaynotetorage;
    useEffect(() => {
        saturdaydaynotetorage = localStorage.getItem('saturdaydaynote')
        setSaturdayNote({daynote: saturdaydaynotetorage})
    }, [])

    let [ TasksSunday, setTasksSunday ] = useState({
        tasks : [
            "1",
            "2",
            "3"
        ],
        state : [
            "Y",
            "N",
            "X"
        ],
        
    });

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
    var total = [0, 0 ,0 , 0, 0, 0, 0];

    function Total() {
        total[3] = TasksSunday.tasks.length;
        total[4] = TasksMonday.tasks.length;
        total[5] = TasksTuesday.tasks.length;
        total[6] = TasksWednesday.tasks.length;
        total[0] = TasksThursday.tasks.length;
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
        if (weekday === 0) {
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
        getWeekdayPercentage(5)
    }, [TasksTuesday])

    useEffect(() => {
        getWeekdayPercentage(6)
    }, [TasksWednesday])

    useEffect(() => {
        getWeekdayPercentage(0)
    }, [TasksThursday])

    useEffect(() => {
        getWeekdayPercentage(1)
    }, [TasksFriday])

    useEffect(() => {
        getWeekdayPercentage(2)
    }, [TasksSaturday])

    useEffect(() => {
        getWeekdayPercentage(3)
    }, [TasksSunday])

    useEffect(() => {
        getWeekdayPercentage(4)
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
    
    .bodycontentbox:hover .selectwarning {
        opacity: 0%;
        width: 0;
        
    }
    
    .selectwarning {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        transition: 0.25s;
    }
    
    .iconinfo {
        height: 102px;
        width: 102px;
    }
    
    .taskbody {
        display: flex;
        flex-direction: row;
        align-items: center;
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
        transition: 0.25s;
    }
    
    .task:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07)
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
        transition: 0.25s;
    }
    .task:hover .addTask {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskForm {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        padding-bottom: 12px;
        transition: 0.25s;
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
        transition: 0.25s;
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
        transition: 0.25s;
    }
    }
    .addButton:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .weekday:hover .DayNoteInput {
        height: 15px;
        width: 153px;
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
    }
    .weekday:hover .addTaskButton {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
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
        transition: 0.25s;
        visibility: hidden;
        cursor: pointer;
    }
    }
    .addTaskButton:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);
        transition: 0.25s;
    }
    .weekday:hover .addTaskInput {
        height: 15px;
        width: 75%;
        outline: 0;
        padding: 6px;
        visibility: visible;
        font-size: 15px;
        pointer-events: auto;
        transition: 0.25s;
        
    }
    .addTaskInput:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .addTaskInput::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInput::-moz-placeholder {
        color: white;
    }
    .addTaskInput:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInput:-moz-placeholder {
        color: white;
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
    }
    
    function deleteMonday(a) {
        console.log(a)
        mondayTasksVar = [];
        mondayTasksState = [];
        TasksMonday.tasks.map((task) => {
            mondayTasksVar.push(task);
        });
        TasksMonday.state.map((task) => {
            mondayTasksVar.push(task);
        });
        mondayTasksVar.splice(a, 1);
        mondayTasksState.splice(a, 1);
        setTasksMonday({
            tasks: JSON.parse(JSON.stringify(mondayTasksVar)),
            state: JSON.parse(JSON.stringify(mondayTasksState))
        })
    }

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
                    <div className="task"  key={i}>
                        <div className="taskbody">
                          <div>
                             <Taskcheckbox className="checkbox" key={"1" + i} status={TasksMonday.state[i]}>
                                 {
                                     i = i + 1
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
                          <FaRegTrashAlt className="deleteTask"></FaRegTrashAlt>
                        </div>
                        
                    </div>
                ))
                }
                {
                    reseti()
                }
                {
                    resetk()
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
                    <div className="taskbody">
                      <div>
                         <Taskcheckbox className="checkbox"  status={TasksTuesday.state[i]}>
                              {
                              i = i + 1
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
                      <FaRegTrashAlt className="deleteTask"></FaRegTrashAlt>
                    </div>
                    
                </div>
                ))
                }
                {
                    reseti()
                }
                {
                    resetk()
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
                        <div className="taskbody">
                          <div>
                             <Taskcheckbox className="checkbox" status={TasksWednesday.state[i]}>
                                  {
                                  i = i + 1
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
                          <FaRegTrashAlt className="deleteTask"></FaRegTrashAlt>
                        </div>
                        
                    </div>
            ))
                }
                {
                    reseti()
                }
                {
                    resetk()
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
                        <div className="taskbody">
                          <div>
                             <Taskcheckbox className="checkbox" status={TasksThursday.state[i]}>
                                  {
                                  i = i + 1
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
                          <FaRegTrashAlt className="deleteTask"></FaRegTrashAlt>
                        </div>
                        
                    </div>
                ))
                }
                {
                    reseti()
                }
                {
                    resetk()
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
                        <div className="taskbody">
                          <div>
                             <Taskcheckbox className="checkbox" status={TasksFriday.state[i]}>
                                  {
                                  i = i + 1
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
                          <FaRegTrashAlt className="deleteTask"></FaRegTrashAlt>
                        </div>
                        
                    </div>
                ))
                }
                {
                    reseti()
                }
                {
                resetk()
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
                        <div className="taskbody">
                          <div>
                             <Taskcheckbox className="checkbox" status={TasksSaturday.state[i]}>
                                  {
                                  i = i + 1
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
                          <FaRegTrashAlt className="deleteTask"></FaRegTrashAlt>
                        </div>
                        
                    </div>
                ))
            }
            {
            reseti()
            }
            {
                resetk()
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
                        <div className="taskbody">
                          <div>
                             <Taskcheckbox className="checkbox" status={TasksSunday.state[i]}>
                                  {
                                  i = i + 1
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
                          <FaRegTrashAlt className="deleteTask"></FaRegTrashAlt>
                        </div> 
                            
                        
                    </div>
                    
                ))
                
                }
                {
                    reseti()
                }
                {
                    resetk()
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

            
            <div className="selectwarning">
                <FaInfoCircle className="iconinfo" fill="white" fillOpacity="70%" ></FaInfoCircle>
                <br></br>
                <br></br>
                <b>INFO</b>
                <br></br>
                <p>
                    This is the 11th development version!
                </p>
                <p>
                    Thank you for your support! :D
                </p>
            </div>
        </div>
        <div>
        <div className="databox">
            <div className="displays">
                <Display number={isNaN(A/TotalState) ? "0%" : Math.floor(A/TotalState*100) + "%"} description="work done today"></Display>
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
