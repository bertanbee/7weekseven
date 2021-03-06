


import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt, FaArrowUp, FaArrowDown, FaAngleRight, FaAngleLeft } from "react-icons/fa"

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









    //cssfunctions
    const [ hoverEffectsMonday, setHoverEffectsMonday ] = useState(false);
    const [ expandMondayWidth, setExpandMondayWidth ] = useState("0px");
    const [ justifyContentMonday, setJustifyContentMonday ]= useState("center");
    const [ fontsizeInitialMonday, setFontsizeInitialMonday ] = useState("25px");
    const [ colorInitialMonday, setColorInitialMonday ] = useState("rgba(223, 223, 223, 0.6)");
    const [ fontsizeContinuationMonday, setFontsizeContinuationMonday ] = useState("0px");
    const [ weekdayWidthMonday, setWeekdayWidthMonday ] = useState("auto");
    const [ weekdayContentWidthMonday, setWeekdayContentWidthMonday ] = useState("60px");
    const [ dayNoteInputHeightMonday, setDayNoteInputHeightMonday ] = useState("0px");
    const [ dayNoteInputWidthMonday, setDayNoteInputWidthMonday ] = useState("0px");
    const [ dayNoteInputVisibilityMonday, setDayNoteInputVisibilityMonday ] = useState("hidden");
    const [ dayNoteInputPointerEventsMonday, setDayNoteInputPointerEventsMonday ] = useState("none");
    const [ dayNoteInputFontSizeMonday, setDayNoteInputFontSizeMonday ] = useState("0px");
    const [ dayNoteInputPaddingMonday, setDayNoteInputPaddingMonday ] = useState("0px");
    const [ addButtonWidthMonday, setAddButtonWidthMonday ] = useState("0px");
    const [ addButtonHeightMonday, setAddButtonHeightMonday ] = useState("0px");
    const [ addButtonFontSizeMonday, setAddButtonFontSizeMonday ] = useState("0px");
    const [ addButtonPaddingMonday, setAddButtonPaddingMonday ] = useState("0px");
    const [ addButtonVisibilityMonday, setAddButtonVisibilityMonday ] = useState("hidden");
    const [ taskTitleWidthMonday, setTaskTitleWidthMonday ] = useState("0%");
    const [ taskTitleHeightMonday, setTaskTitleHeightMonday ] = useState("0");
    const [ taskTitleOpacityMonday, setTaskTitleOpacityMonday ] = useState(0);
    const [ addTaskInputWidthMonday, setAddTaskInputWidthMonday ] = useState("0%");
    const [ addTaskInputHeightMonday, setAddTaskInputHeightMonday ] = useState("0");
    const [ addTaskInputVisibilityMonday, setAddTaskInputVisibilityMonday ] = useState("hidden");
    const [ addTaskInputPaddingMonday, setAddTaskInputPaddingMonday ] = useState("0px");
    const [ addTaskInputPointerEventsMonday, setAddTaskInputPointerEventsMonday ] = useState("none");
    const [ addTaskInputFontSizeMonday, setAddTaskInputFontSizeMonday ] = useState("none");
    const [ addTaskButtonWidthMonday, setAddTaskButtonWidthMonday ] = useState("0px");
    const [ addTaskButtonHeightMonday, setAddTaskButtonHeightMonday ] = useState("0px");
    const [ addTaskButtonMarginLeftMonday, setAddTaskButtonMarginLeftMonday ] = useState("0px");
    const [ addTaskButtonPaddingMonday, setAddTaskButtonPaddingMonday ] = useState("0px");
    const [ addTaskFontSizeMonday, setAddTaskFontSizeMonday ] = useState("0px");
    const [ addTaskVisibilityMonday, setAddTaskVisibilityMonday ] = useState("hidden");


    function expandMonday() {
        if (hoverEffectsMonday === false) {
        setHoverEffectsMonday(true);
        setJustifyContentMonday("space-between");
        setFontsizeInitialMonday("40px");
        setColorInitialMonday("rgba(54, 40, 255, 0.6)");
        setFontsizeContinuationMonday("20px");
        setWeekdayWidthMonday("40%");
        setWeekdayContentWidthMonday("100%");
        setDayNoteInputHeightMonday("26px");
        setDayNoteInputWidthMonday("180px");
        setDayNoteInputVisibilityMonday("visible");
        setDayNoteInputPointerEventsMonday("auto");
        setDayNoteInputFontSizeMonday("15px");
        setDayNoteInputPaddingMonday("0px");
        setAddButtonWidthMonday("60px");
        setAddButtonHeightMonday("15px");
        setAddButtonFontSizeMonday("17px");
        setAddButtonPaddingMonday("6px");
        setAddButtonVisibilityMonday("visible");
        setExpandMondayWidth("30px");
        setTaskTitleWidthMonday("100%");
        setTaskTitleHeightMonday("auto");
        setTaskTitleOpacityMonday(0.6);
        setAddTaskInputWidthMonday("75%");
        setAddTaskInputHeightMonday("15px");
        setAddTaskInputVisibilityMonday("visible");
        setAddTaskInputPaddingMonday("6px");
        setAddTaskInputPointerEventsMonday("auto");
        setAddTaskInputFontSizeMonday("15px");
        setAddTaskButtonWidthMonday("10%");
        setAddTaskButtonHeightMonday("15px");
        setAddTaskButtonMarginLeftMonday("3px");
        setAddTaskButtonPaddingMonday("6px");
        setAddTaskFontSizeMonday("17px");
        setAddTaskVisibilityMonday("visible");



        if (hoverEffectsTuesday === true) {
        setHoverEffectsTuesday(false);
        setJustifyContentTuesday("center");
        setFontsizeInitialTuesday("25px");
        setColorInitialTuesday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationTuesday("0px");
        setWeekdayWidthTuesday("auto");
        setWeekdayContentWidthTuesday("60px");
        setDayNoteInputHeightTuesday("0px");
        setDayNoteInputWidthTuesday("0px");
        setDayNoteInputVisibilityTuesday("hidden");
        setDayNoteInputPointerEventsTuesday("none");
        setDayNoteInputFontSizeTuesday("0px");
        setDayNoteInputPaddingTuesday("0px");
        setAddButtonWidthTuesday("0px");
        setAddButtonHeightTuesday("0px");
        setAddButtonFontSizeTuesday("0px");
        setAddButtonPaddingTuesday("0px");
        setAddButtonVisibilityTuesday("hidden");
        setExpandTuesdayWidth("0px");
        setTaskTitleWidthTuesday("0%");
        setTaskTitleHeightTuesday("0");
        setTaskTitleOpacityTuesday(0);
        setAddTaskInputWidthTuesday("0%");
        setAddTaskInputHeightTuesday("0px");
        setAddTaskInputVisibilityTuesday("hidden");
        setAddTaskInputPaddingTuesday("0px");
        setAddTaskInputPointerEventsTuesday("node");
        setAddTaskInputFontSizeTuesday("none");
        setAddTaskButtonWidthTuesday("0px");
        setAddTaskButtonHeightTuesday("0px");
        setAddTaskButtonMarginLeftTuesday("0px");
        setAddTaskButtonPaddingTuesday("0px");
        setAddTaskFontSizeTuesday("0px");
        setAddTaskVisibilityTuesday("hidden");
        } else if (hoverEffectsWednesday) {
        setHoverEffectsWednesday(false);
        setJustifyContentWednesday("center");
        setFontsizeInitialWednesday("25px");
        setColorInitialWednesday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationWednesday("0px");
        setWeekdayWidthWednesday("auto");
        setWeekdayContentWidthWednesday("60px");
        setDayNoteInputHeightWednesday("0px");
        setDayNoteInputWidthWednesday("0px");
        setDayNoteInputVisibilityWednesday("hidden");
        setDayNoteInputPointerEventsWednesday("none");
        setDayNoteInputFontSizeWednesday("0px");
        setDayNoteInputPaddingWednesday("0px");
        setAddButtonWidthWednesday("0px");
        setAddButtonHeightWednesday("0px");
        setAddButtonFontSizeWednesday("0px");
        setAddButtonPaddingWednesday("0px");
        setAddButtonVisibilityWednesday("hidden");
        setExpandWednesdayWidth("0px");
        setTaskTitleWidthWednesday("0%");
        setTaskTitleHeightWednesday("0");
        setTaskTitleOpacityWednesday(0);
        setAddTaskInputWidthWednesday("0%");
        setAddTaskInputHeightWednesday("0px");
        setAddTaskInputVisibilityWednesday("hidden");
        setAddTaskInputPaddingWednesday("0px");
        setAddTaskInputPointerEventsWednesday("node");
        setAddTaskInputFontSizeWednesday("none");
        setAddTaskButtonWidthWednesday("0px");
        setAddTaskButtonHeightWednesday("0px");
        setAddTaskButtonMarginLeftWednesday("0px");
        setAddTaskButtonPaddingWednesday("0px");
        setAddTaskFontSizeWednesday("0px");
        setAddTaskVisibilityWednesday("hidden");
        } else if (hoverEffectsThursday === true) {
        setHoverEffectsThursday(false);
        setJustifyContentThursday("center");
        setFontsizeInitialThursday("25px");
        setColorInitialThursday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationThursday("0px");
        setWeekdayWidthThursday("auto");
        setWeekdayContentWidthThursday("60px");
        setDayNoteInputHeightThursday("0px");
        setDayNoteInputWidthThursday("0px");
        setDayNoteInputVisibilityThursday("hidden");
        setDayNoteInputPointerEventsThursday("none");
        setDayNoteInputFontSizeThursday("0px");
        setDayNoteInputPaddingThursday("0px");
        setAddButtonWidthThursday("0px");
        setAddButtonHeightThursday("0px");
        setAddButtonFontSizeThursday("0px");
        setAddButtonPaddingThursday("0px");
        setAddButtonVisibilityThursday("hidden");
        setExpandThursdayWidth("0px");
        setTaskTitleWidthThursday("0%");
        setTaskTitleHeightThursday("0");
        setTaskTitleOpacityThursday(0);
        setAddTaskInputWidthThursday("0%");
        setAddTaskInputHeightThursday("0px");
        setAddTaskInputVisibilityThursday("hidden");
        setAddTaskInputPaddingThursday("0px");
        setAddTaskInputPointerEventsThursday("node");
        setAddTaskInputFontSizeThursday("none");
        setAddTaskButtonWidthThursday("0px");
        setAddTaskButtonHeightThursday("0px");
        setAddTaskButtonMarginLeftThursday("0px");
        setAddTaskButtonPaddingThursday("0px");
        setAddTaskFontSizeThursday("0px");
        setAddTaskVisibilityThursday("hidden");
        } else if (hoverEffectsFriday) {
        setHoverEffectsFriday(false);
        setJustifyContentFriday("center");
        setFontsizeInitialFriday("25px");
        setColorInitialFriday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationFriday("0px");
        setWeekdayWidthFriday("auto");
        setWeekdayContentWidthFriday("60px");
        setDayNoteInputHeightFriday("0px");
        setDayNoteInputWidthFriday("0px");
        setDayNoteInputVisibilityFriday("hidden");
        setDayNoteInputPointerEventsFriday("none");
        setDayNoteInputFontSizeFriday("0px");
        setDayNoteInputPaddingFriday("0px");
        setAddButtonWidthFriday("0px");
        setAddButtonHeightFriday("0px");
        setAddButtonFontSizeFriday("0px");
        setAddButtonPaddingFriday("0px");
        setAddButtonVisibilityFriday("hidden");
        setExpandFridayWidth("0px");
        setTaskTitleWidthFriday("0%");
        setTaskTitleHeightFriday("0");
        setTaskTitleOpacityFriday(0);
        setAddTaskInputWidthFriday("0%");
        setAddTaskInputHeightFriday("0px");
        setAddTaskInputVisibilityFriday("hidden");
        setAddTaskInputPaddingFriday("0px");
        setAddTaskInputPointerEventsFriday("node");
        setAddTaskInputFontSizeFriday("none");
        setAddTaskButtonWidthFriday("0px");
        setAddTaskButtonHeightFriday("0px");
        setAddTaskButtonMarginLeftFriday("0px");
        setAddTaskButtonPaddingFriday("0px");
        setAddTaskFontSizeFriday("0px");
        setAddTaskVisibilityFriday("hidden");
        } else if (hoverEffectsSaturday === true) {
        setHoverEffectsSaturday(false);
        setJustifyContentSaturday("center");
        setFontsizeInitialSaturday("25px");
        setColorInitialSaturday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationSaturday("0px");
        setWeekdayWidthSaturday("auto");
        setWeekdayContentWidthSaturday("60px");
        setDayNoteInputHeightSaturday("0px");
        setDayNoteInputWidthSaturday("0px");
        setDayNoteInputVisibilitySaturday("hidden");
        setDayNoteInputPointerEventsSaturday("none");
        setDayNoteInputFontSizeSaturday("0px");
        setDayNoteInputPaddingSaturday("0px");
        setAddButtonWidthSaturday("0px");
        setAddButtonHeightSaturday("0px");
        setAddButtonFontSizeSaturday("0px");
        setAddButtonPaddingSaturday("0px");
        setAddButtonVisibilitySaturday("hidden");
        setExpandSaturdayWidth("0px");
        setTaskTitleWidthSaturday("0%");
        setTaskTitleHeightSaturday("0");
        setTaskTitleOpacitySaturday(0);
        setAddTaskInputWidthSaturday("0%");
        setAddTaskInputHeightSaturday("0px");
        setAddTaskInputVisibilitySaturday("hidden");
        setAddTaskInputPaddingSaturday("0px");
        setAddTaskInputPointerEventsSaturday("node");
        setAddTaskInputFontSizeSaturday("none");
        setAddTaskButtonWidthSaturday("0px");
        setAddTaskButtonHeightSaturday("0px");
        setAddTaskButtonMarginLeftSaturday("0px");
        setAddTaskButtonPaddingSaturday("0px");
        setAddTaskFontSizeSaturday("0px");
        setAddTaskVisibilitySaturday("hidden");
        } else if (hoverEffectsSunday === true) {
        setHoverEffectsSunday(false);
        setJustifyContentSunday("center");
        setFontsizeInitialSunday("25px");
        setColorInitialSunday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationSunday("0px");
        setWeekdayWidthSunday("auto");
        setWeekdayContentWidthSunday("60px");
        setDayNoteInputHeightSunday("0px");
        setDayNoteInputWidthSunday("0px");
        setDayNoteInputVisibilitySunday("hidden");
        setDayNoteInputPointerEventsSunday("none");
        setDayNoteInputFontSizeSunday("0px");
        setDayNoteInputPaddingSunday("0px");
        setAddButtonWidthSunday("0px");
        setAddButtonHeightSunday("0px");
        setAddButtonFontSizeSunday("0px");
        setAddButtonPaddingSunday("0px");
        setAddButtonVisibilitySunday("hidden");
        setExpandSundayWidth("0px");
        setTaskTitleWidthSunday("0%");
        setTaskTitleHeightSunday("0");
        setTaskTitleOpacitySunday(0);
        setAddTaskInputWidthSunday("0%");
        setAddTaskInputHeightSunday("0px");
        setAddTaskInputVisibilitySunday("hidden");
        setAddTaskInputPaddingSunday("0px");
        setAddTaskInputPointerEventsSunday("node");
        setAddTaskInputFontSizeSunday("none");
        setAddTaskButtonWidthSunday("0px");
        setAddTaskButtonHeightSunday("0px");
        setAddTaskButtonMarginLeftSunday("0px");
        setAddTaskButtonPaddingSunday("0px");
        setAddTaskFontSizeSunday("0px");
        setAddTaskVisibilitySunday("hidden");
        }
        
        } else {
        setHoverEffectsMonday(false);
        setJustifyContentMonday("center");
        setFontsizeInitialMonday("25px");
        setColorInitialMonday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationMonday("0px");
        setWeekdayWidthMonday("auto");
        setWeekdayContentWidthMonday("60px");
        setDayNoteInputHeightMonday("0px");
        setDayNoteInputWidthMonday("0px");
        setDayNoteInputVisibilityMonday("hidden");
        setDayNoteInputPointerEventsMonday("none");
        setDayNoteInputFontSizeMonday("0px");
        setDayNoteInputPaddingMonday("0px");
        setAddButtonWidthMonday("0px");
        setAddButtonHeightMonday("0px");
        setAddButtonFontSizeMonday("0px");
        setAddButtonPaddingMonday("0px");
        setAddButtonVisibilityMonday("hidden");
        setExpandMondayWidth("0px");
        setTaskTitleWidthMonday("0%");
        setTaskTitleHeightMonday("0");
        setTaskTitleOpacityMonday(0);
        setAddTaskInputWidthMonday("0%");
        setAddTaskInputHeightMonday("0px");
        setAddTaskInputVisibilityMonday("hidden");
        setAddTaskInputPaddingMonday("0px");
        setAddTaskInputPointerEventsMonday("node");
        setAddTaskInputFontSizeMonday("none");
        setAddTaskButtonWidthMonday("0px");
        setAddTaskButtonHeightMonday("0px");
        setAddTaskButtonMarginLeftMonday("0px");
        setAddTaskButtonPaddingMonday("0px");
        setAddTaskFontSizeMonday("0px");
        setAddTaskVisibilityMonday("hidden");
        }
    }
    const [ hoverEffectsTuesday, setHoverEffectsTuesday ] = useState(false);
    const [ expandTuesdayWidth, setExpandTuesdayWidth ] = useState("0px");
    const [ justifyContentTuesday, setJustifyContentTuesday ]= useState("center");
    const [ fontsizeInitialTuesday, setFontsizeInitialTuesday ] = useState("25px");
    const [ colorInitialTuesday, setColorInitialTuesday ] = useState("rgba(223, 223, 223, 0.6)");
    const [ fontsizeContinuationTuesday, setFontsizeContinuationTuesday ] = useState("0px");
    const [ weekdayWidthTuesday, setWeekdayWidthTuesday ] = useState("auto");
    const [ weekdayContentWidthTuesday, setWeekdayContentWidthTuesday ] = useState("60px");
    const [ dayNoteInputHeightTuesday, setDayNoteInputHeightTuesday ] = useState("0px");
    const [ dayNoteInputWidthTuesday, setDayNoteInputWidthTuesday ] = useState("0px");
    const [ dayNoteInputVisibilityTuesday, setDayNoteInputVisibilityTuesday ] = useState("hidden");
    const [ dayNoteInputPointerEventsTuesday, setDayNoteInputPointerEventsTuesday ] = useState("none");
    const [ dayNoteInputFontSizeTuesday, setDayNoteInputFontSizeTuesday ] = useState("0px");
    const [ dayNoteInputPaddingTuesday, setDayNoteInputPaddingTuesday ] = useState("0px");
    const [ addButtonWidthTuesday, setAddButtonWidthTuesday ] = useState("0px");
    const [ addButtonHeightTuesday, setAddButtonHeightTuesday ] = useState("0px");
    const [ addButtonFontSizeTuesday, setAddButtonFontSizeTuesday ] = useState("0px");
    const [ addButtonPaddingTuesday, setAddButtonPaddingTuesday ] = useState("0px");
    const [ addButtonVisibilityTuesday, setAddButtonVisibilityTuesday ] = useState("hidden");
    const [ taskTitleWidthTuesday, setTaskTitleWidthTuesday ] = useState("0%");
    const [ taskTitleHeightTuesday, setTaskTitleHeightTuesday ] = useState("0");
    const [ taskTitleOpacityTuesday, setTaskTitleOpacityTuesday ] = useState(0);
    const [ addTaskInputWidthTuesday, setAddTaskInputWidthTuesday ] = useState("0%");
    const [ addTaskInputHeightTuesday, setAddTaskInputHeightTuesday ] = useState("0");
    const [ addTaskInputVisibilityTuesday, setAddTaskInputVisibilityTuesday ] = useState("hidden");
    const [ addTaskInputPaddingTuesday, setAddTaskInputPaddingTuesday ] = useState("0px");
    const [ addTaskInputPointerEventsTuesday, setAddTaskInputPointerEventsTuesday ] = useState("none");
    const [ addTaskInputFontSizeTuesday, setAddTaskInputFontSizeTuesday ] = useState("none");
    const [ addTaskButtonWidthTuesday, setAddTaskButtonWidthTuesday ] = useState("0px");
    const [ addTaskButtonHeightTuesday, setAddTaskButtonHeightTuesday ] = useState("0px");
    const [ addTaskButtonMarginLeftTuesday, setAddTaskButtonMarginLeftTuesday ] = useState("0px");
    const [ addTaskButtonPaddingTuesday, setAddTaskButtonPaddingTuesday ] = useState("0px");
    const [ addTaskFontSizeTuesday, setAddTaskFontSizeTuesday ] = useState("0px");
    const [ addTaskVisibilityTuesday, setAddTaskVisibilityTuesday ] = useState("hidden");

    function expandTuesday() {
        if (hoverEffectsTuesday === false) {
        setHoverEffectsTuesday(true);
        setJustifyContentTuesday("space-between");
        setFontsizeInitialTuesday("40px");
        setColorInitialTuesday("rgba(54, 40, 255, 0.6)");
        setFontsizeContinuationTuesday("20px");
        setWeekdayWidthTuesday("40%");
        setWeekdayContentWidthTuesday("100%");
        setDayNoteInputHeightTuesday("26px");
        setDayNoteInputWidthTuesday("180px");
        setDayNoteInputVisibilityTuesday("visible");
        setDayNoteInputPointerEventsTuesday("auto");
        setDayNoteInputFontSizeTuesday("15px");
        setDayNoteInputPaddingTuesday("0px");
        setAddButtonWidthTuesday("60px");
        setAddButtonHeightTuesday("15px");
        setAddButtonFontSizeTuesday("17px");
        setAddButtonPaddingTuesday("6px");
        setAddButtonVisibilityTuesday("visible");
        setExpandTuesdayWidth("30px");
        setTaskTitleWidthTuesday("100%");
        setTaskTitleHeightTuesday("auto");
        setTaskTitleOpacityTuesday(0.6);
        setAddTaskInputWidthTuesday("75%");
        setAddTaskInputHeightTuesday("15px");
        setAddTaskInputVisibilityTuesday("visible");
        setAddTaskInputPaddingTuesday("6px");
        setAddTaskInputPointerEventsTuesday("auto");
        setAddTaskInputFontSizeTuesday("15px");
        setAddTaskButtonWidthTuesday("10%");
        setAddTaskButtonHeightTuesday("15px");
        setAddTaskButtonMarginLeftTuesday("3px");
        setAddTaskButtonPaddingTuesday("6px");
        setAddTaskFontSizeTuesday("17px");
        setAddTaskVisibilityTuesday("visible");





        if (hoverEffectsMonday === true) {
            setHoverEffectsMonday(false);
            setJustifyContentMonday("center");
            setFontsizeInitialMonday("25px");
            setColorInitialMonday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationMonday("0px");
            setWeekdayWidthMonday("auto");
            setWeekdayContentWidthMonday("60px");
            setDayNoteInputHeightMonday("0px");
            setDayNoteInputWidthMonday("0px");
            setDayNoteInputVisibilityMonday("hidden");
            setDayNoteInputPointerEventsMonday("none");
            setDayNoteInputFontSizeMonday("0px");
            setDayNoteInputPaddingMonday("0px");
            setAddButtonWidthMonday("0px");
            setAddButtonHeightMonday("0px");
            setAddButtonFontSizeMonday("0px");
            setAddButtonPaddingMonday("0px");
            setAddButtonVisibilityMonday("hidden");
            setExpandMondayWidth("0px");
            setTaskTitleWidthMonday("0%");
            setTaskTitleHeightMonday("0");
            setTaskTitleOpacityMonday(0);
            setAddTaskInputWidthMonday("0%");
            setAddTaskInputHeightMonday("0px");
            setAddTaskInputVisibilityMonday("hidden");
            setAddTaskInputPaddingMonday("0px");
            setAddTaskInputPointerEventsMonday("node");
            setAddTaskInputFontSizeMonday("none");
            setAddTaskButtonWidthMonday("0px");
            setAddTaskButtonHeightMonday("0px");
            setAddTaskButtonMarginLeftMonday("0px");
            setAddTaskButtonPaddingMonday("0px");
            setAddTaskFontSizeMonday("0px");
            setAddTaskVisibilityMonday("hidden");
            }  else if (hoverEffectsWednesday) {
            setHoverEffectsWednesday(false);
            setJustifyContentWednesday("center");
            setFontsizeInitialWednesday("25px");
            setColorInitialWednesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationWednesday("0px");
            setWeekdayWidthWednesday("auto");
            setWeekdayContentWidthWednesday("60px");
            setDayNoteInputHeightWednesday("0px");
            setDayNoteInputWidthWednesday("0px");
            setDayNoteInputVisibilityWednesday("hidden");
            setDayNoteInputPointerEventsWednesday("none");
            setDayNoteInputFontSizeWednesday("0px");
            setDayNoteInputPaddingWednesday("0px");
            setAddButtonWidthWednesday("0px");
            setAddButtonHeightWednesday("0px");
            setAddButtonFontSizeWednesday("0px");
            setAddButtonPaddingWednesday("0px");
            setAddButtonVisibilityWednesday("hidden");
            setExpandWednesdayWidth("0px");
            setTaskTitleWidthWednesday("0%");
            setTaskTitleHeightWednesday("0");
            setTaskTitleOpacityWednesday(0);
            setAddTaskInputWidthWednesday("0%");
            setAddTaskInputHeightWednesday("0px");
            setAddTaskInputVisibilityWednesday("hidden");
            setAddTaskInputPaddingWednesday("0px");
            setAddTaskInputPointerEventsWednesday("node");
            setAddTaskInputFontSizeWednesday("none");
            setAddTaskButtonWidthWednesday("0px");
            setAddTaskButtonHeightWednesday("0px");
            setAddTaskButtonMarginLeftWednesday("0px");
            setAddTaskButtonPaddingWednesday("0px");
            setAddTaskFontSizeWednesday("0px");
            setAddTaskVisibilityWednesday("hidden");
            } else if (hoverEffectsThursday === true) {
            setHoverEffectsThursday(false);
            setJustifyContentThursday("center");
            setFontsizeInitialThursday("25px");
            setColorInitialThursday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationThursday("0px");
            setWeekdayWidthThursday("auto");
            setWeekdayContentWidthThursday("60px");
            setDayNoteInputHeightThursday("0px");
            setDayNoteInputWidthThursday("0px");
            setDayNoteInputVisibilityThursday("hidden");
            setDayNoteInputPointerEventsThursday("none");
            setDayNoteInputFontSizeThursday("0px");
            setDayNoteInputPaddingThursday("0px");
            setAddButtonWidthThursday("0px");
            setAddButtonHeightThursday("0px");
            setAddButtonFontSizeThursday("0px");
            setAddButtonPaddingThursday("0px");
            setAddButtonVisibilityThursday("hidden");
            setExpandThursdayWidth("0px");
            setTaskTitleWidthThursday("0%");
            setTaskTitleHeightThursday("0");
            setTaskTitleOpacityThursday(0);
            setAddTaskInputWidthThursday("0%");
            setAddTaskInputHeightThursday("0px");
            setAddTaskInputVisibilityThursday("hidden");
            setAddTaskInputPaddingThursday("0px");
            setAddTaskInputPointerEventsThursday("node");
            setAddTaskInputFontSizeThursday("none");
            setAddTaskButtonWidthThursday("0px");
            setAddTaskButtonHeightThursday("0px");
            setAddTaskButtonMarginLeftThursday("0px");
            setAddTaskButtonPaddingThursday("0px");
            setAddTaskFontSizeThursday("0px");
            setAddTaskVisibilityThursday("hidden");
            } else if (hoverEffectsFriday) {
            setHoverEffectsFriday(false);
            setJustifyContentFriday("center");
            setFontsizeInitialFriday("25px");
            setColorInitialFriday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationFriday("0px");
            setWeekdayWidthFriday("auto");
            setWeekdayContentWidthFriday("60px");
            setDayNoteInputHeightFriday("0px");
            setDayNoteInputWidthFriday("0px");
            setDayNoteInputVisibilityFriday("hidden");
            setDayNoteInputPointerEventsFriday("none");
            setDayNoteInputFontSizeFriday("0px");
            setDayNoteInputPaddingFriday("0px");
            setAddButtonWidthFriday("0px");
            setAddButtonHeightFriday("0px");
            setAddButtonFontSizeFriday("0px");
            setAddButtonPaddingFriday("0px");
            setAddButtonVisibilityFriday("hidden");
            setExpandFridayWidth("0px");
            setTaskTitleWidthFriday("0%");
            setTaskTitleHeightFriday("0");
            setTaskTitleOpacityFriday(0);
            setAddTaskInputWidthFriday("0%");
            setAddTaskInputHeightFriday("0px");
            setAddTaskInputVisibilityFriday("hidden");
            setAddTaskInputPaddingFriday("0px");
            setAddTaskInputPointerEventsFriday("node");
            setAddTaskInputFontSizeFriday("none");
            setAddTaskButtonWidthFriday("0px");
            setAddTaskButtonHeightFriday("0px");
            setAddTaskButtonMarginLeftFriday("0px");
            setAddTaskButtonPaddingFriday("0px");
            setAddTaskFontSizeFriday("0px");
            setAddTaskVisibilityFriday("hidden");
            } else if (hoverEffectsSaturday === true) {
            setHoverEffectsSaturday(false);
            setJustifyContentSaturday("center");
            setFontsizeInitialSaturday("25px");
            setColorInitialSaturday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSaturday("0px");
            setWeekdayWidthSaturday("auto");
            setWeekdayContentWidthSaturday("60px");
            setDayNoteInputHeightSaturday("0px");
            setDayNoteInputWidthSaturday("0px");
            setDayNoteInputVisibilitySaturday("hidden");
            setDayNoteInputPointerEventsSaturday("none");
            setDayNoteInputFontSizeSaturday("0px");
            setDayNoteInputPaddingSaturday("0px");
            setAddButtonWidthSaturday("0px");
            setAddButtonHeightSaturday("0px");
            setAddButtonFontSizeSaturday("0px");
            setAddButtonPaddingSaturday("0px");
            setAddButtonVisibilitySaturday("hidden");
            setExpandSaturdayWidth("0px");
            setTaskTitleWidthSaturday("0%");
            setTaskTitleHeightSaturday("0");
            setTaskTitleOpacitySaturday(0);
            setAddTaskInputWidthSaturday("0%");
            setAddTaskInputHeightSaturday("0px");
            setAddTaskInputVisibilitySaturday("hidden");
            setAddTaskInputPaddingSaturday("0px");
            setAddTaskInputPointerEventsSaturday("node");
            setAddTaskInputFontSizeSaturday("none");
            setAddTaskButtonWidthSaturday("0px");
            setAddTaskButtonHeightSaturday("0px");
            setAddTaskButtonMarginLeftSaturday("0px");
            setAddTaskButtonPaddingSaturday("0px");
            setAddTaskFontSizeSaturday("0px");
            setAddTaskVisibilitySaturday("hidden");
            } else if (hoverEffectsSunday === true) {
            setHoverEffectsSunday(false);
            setJustifyContentSunday("center");
            setFontsizeInitialSunday("25px");
            setColorInitialSunday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSunday("0px");
            setWeekdayWidthSunday("auto");
            setWeekdayContentWidthSunday("60px");
            setDayNoteInputHeightSunday("0px");
            setDayNoteInputWidthSunday("0px");
            setDayNoteInputVisibilitySunday("hidden");
            setDayNoteInputPointerEventsSunday("none");
            setDayNoteInputFontSizeSunday("0px");
            setDayNoteInputPaddingSunday("0px");
            setAddButtonWidthSunday("0px");
            setAddButtonHeightSunday("0px");
            setAddButtonFontSizeSunday("0px");
            setAddButtonPaddingSunday("0px");
            setAddButtonVisibilitySunday("hidden");
            setExpandSundayWidth("0px");
            setTaskTitleWidthSunday("0%");
            setTaskTitleHeightSunday("0");
            setTaskTitleOpacitySunday(0);
            setAddTaskInputWidthSunday("0%");
            setAddTaskInputHeightSunday("0px");
            setAddTaskInputVisibilitySunday("hidden");
            setAddTaskInputPaddingSunday("0px");
            setAddTaskInputPointerEventsSunday("node");
            setAddTaskInputFontSizeSunday("none");
            setAddTaskButtonWidthSunday("0px");
            setAddTaskButtonHeightSunday("0px");
            setAddTaskButtonMarginLeftSunday("0px");
            setAddTaskButtonPaddingSunday("0px");
            setAddTaskFontSizeSunday("0px");
            setAddTaskVisibilitySunday("hidden");
            }
        } else {
        setHoverEffectsTuesday(false);
        setJustifyContentTuesday("center");
        setFontsizeInitialTuesday("25px");
        setColorInitialTuesday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationTuesday("0px");
        setWeekdayWidthTuesday("auto");
        setWeekdayContentWidthTuesday("60px");
        setDayNoteInputHeightTuesday("0px");
        setDayNoteInputWidthTuesday("0px");
        setDayNoteInputVisibilityTuesday("hidden");
        setDayNoteInputPointerEventsTuesday("none");
        setDayNoteInputFontSizeTuesday("0px");
        setDayNoteInputPaddingTuesday("0px");
        setAddButtonWidthTuesday("0px");
        setAddButtonHeightTuesday("0px");
        setAddButtonFontSizeTuesday("0px");
        setAddButtonPaddingTuesday("0px");
        setAddButtonVisibilityTuesday("hidden");
        setExpandTuesdayWidth("0px");
        setTaskTitleWidthTuesday("0%");
        setTaskTitleHeightTuesday("0");
        setTaskTitleOpacityTuesday(0);
        setAddTaskInputWidthTuesday("0%");
        setAddTaskInputHeightTuesday("0px");
        setAddTaskInputVisibilityTuesday("hidden");
        setAddTaskInputPaddingTuesday("0px");
        setAddTaskInputPointerEventsTuesday("node");
        setAddTaskInputFontSizeTuesday("none");
        setAddTaskButtonWidthTuesday("0px");
        setAddTaskButtonHeightTuesday("0px");
        setAddTaskButtonMarginLeftTuesday("0px");
        setAddTaskButtonPaddingTuesday("0px");
        setAddTaskFontSizeTuesday("0px");
        setAddTaskVisibilityTuesday("hidden");
        }
    }


    const [ hoverEffectsWednesday, setHoverEffectsWednesday ] = useState(false);
    const [ expandWednesdayWidth, setExpandWednesdayWidth ] = useState("0px");
    const [ justifyContentWednesday, setJustifyContentWednesday ]= useState("center");
    const [ fontsizeInitialWednesday, setFontsizeInitialWednesday ] = useState("25px");
    const [ colorInitialWednesday, setColorInitialWednesday ] = useState("rgba(223, 223, 223, 0.6)");
    const [ fontsizeContinuationWednesday, setFontsizeContinuationWednesday ] = useState("0px");
    const [ weekdayWidthWednesday, setWeekdayWidthWednesday ] = useState("auto");
    const [ weekdayContentWidthWednesday, setWeekdayContentWidthWednesday ] = useState("60px");
    const [ dayNoteInputHeightWednesday, setDayNoteInputHeightWednesday ] = useState("0px");
    const [ dayNoteInputWidthWednesday, setDayNoteInputWidthWednesday ] = useState("0px");
    const [ dayNoteInputVisibilityWednesday, setDayNoteInputVisibilityWednesday ] = useState("hidden");
    const [ dayNoteInputPointerEventsWednesday, setDayNoteInputPointerEventsWednesday ] = useState("none");
    const [ dayNoteInputFontSizeWednesday, setDayNoteInputFontSizeWednesday ] = useState("0px");
    const [ dayNoteInputPaddingWednesday, setDayNoteInputPaddingWednesday ] = useState("0px");
    const [ addButtonWidthWednesday, setAddButtonWidthWednesday ] = useState("0px");
    const [ addButtonHeightWednesday, setAddButtonHeightWednesday ] = useState("0px");
    const [ addButtonFontSizeWednesday, setAddButtonFontSizeWednesday ] = useState("0px");
    const [ addButtonPaddingWednesday, setAddButtonPaddingWednesday ] = useState("0px");
    const [ addButtonVisibilityWednesday, setAddButtonVisibilityWednesday ] = useState("hidden");
    const [ taskTitleWidthWednesday, setTaskTitleWidthWednesday ] = useState("0%");
    const [ taskTitleHeightWednesday, setTaskTitleHeightWednesday ] = useState("0");
    const [ taskTitleOpacityWednesday, setTaskTitleOpacityWednesday ] = useState(0);
    const [ addTaskInputWidthWednesday, setAddTaskInputWidthWednesday ] = useState("0%");
    const [ addTaskInputHeightWednesday, setAddTaskInputHeightWednesday ] = useState("0");
    const [ addTaskInputVisibilityWednesday, setAddTaskInputVisibilityWednesday ] = useState("hidden");
    const [ addTaskInputPaddingWednesday, setAddTaskInputPaddingWednesday ] = useState("0px");
    const [ addTaskInputPointerEventsWednesday, setAddTaskInputPointerEventsWednesday ] = useState("none");
    const [ addTaskInputFontSizeWednesday, setAddTaskInputFontSizeWednesday ] = useState("none");
    const [ addTaskButtonWidthWednesday, setAddTaskButtonWidthWednesday ] = useState("0px");
    const [ addTaskButtonHeightWednesday, setAddTaskButtonHeightWednesday ] = useState("0px");
    const [ addTaskButtonMarginLeftWednesday, setAddTaskButtonMarginLeftWednesday ] = useState("0px");
    const [ addTaskButtonPaddingWednesday, setAddTaskButtonPaddingWednesday ] = useState("0px");
    const [ addTaskFontSizeWednesday, setAddTaskFontSizeWednesday ] = useState("0px");
    const [ addTaskVisibilityWednesday, setAddTaskVisibilityWednesday ] = useState("hidden");

    function expandWednesday() {
        if (hoverEffectsWednesday === false) {
        setHoverEffectsWednesday(true);
        setJustifyContentWednesday("space-between");
        setFontsizeInitialWednesday("40px");
        setColorInitialWednesday("rgba(54, 40, 255, 0.6)");
        setFontsizeContinuationWednesday("20px");
        setWeekdayWidthWednesday("42%");
        setWeekdayContentWidthWednesday("100%");
        setDayNoteInputHeightWednesday("26px");
        setDayNoteInputWidthWednesday("180px");
        setDayNoteInputVisibilityWednesday("visible");
        setDayNoteInputPointerEventsWednesday("auto");
        setDayNoteInputFontSizeWednesday("15px");
        setDayNoteInputPaddingWednesday("0px");
        setAddButtonWidthWednesday("60px");
        setAddButtonHeightWednesday("15px");
        setAddButtonFontSizeWednesday("17px");
        setAddButtonPaddingWednesday("6px");
        setAddButtonVisibilityWednesday("visible");
        setExpandWednesdayWidth("30px");
        setTaskTitleWidthWednesday("100%");
        setTaskTitleHeightWednesday("auto");
        setTaskTitleOpacityWednesday(0.6);
        setAddTaskInputWidthWednesday("75%");
        setAddTaskInputHeightWednesday("15px");
        setAddTaskInputVisibilityWednesday("visible");
        setAddTaskInputPaddingWednesday("6px");
        setAddTaskInputPointerEventsWednesday("auto");
        setAddTaskInputFontSizeWednesday("15px");
        setAddTaskButtonWidthWednesday("10%");
        setAddTaskButtonHeightWednesday("15px");
        setAddTaskButtonMarginLeftWednesday("3px");
        setAddTaskButtonPaddingWednesday("6px");
        setAddTaskFontSizeWednesday("17px");
        setAddTaskVisibilityWednesday("visible");





        if (hoverEffectsMonday === true) {
            setHoverEffectsMonday(false);
            setJustifyContentMonday("center");
            setFontsizeInitialMonday("25px");
            setColorInitialMonday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationMonday("0px");
            setWeekdayWidthMonday("auto");
            setWeekdayContentWidthMonday("60px");
            setDayNoteInputHeightMonday("0px");
            setDayNoteInputWidthMonday("0px");
            setDayNoteInputVisibilityMonday("hidden");
            setDayNoteInputPointerEventsMonday("none");
            setDayNoteInputFontSizeMonday("0px");
            setDayNoteInputPaddingMonday("0px");
            setAddButtonWidthMonday("0px");
            setAddButtonHeightMonday("0px");
            setAddButtonFontSizeMonday("0px");
            setAddButtonPaddingMonday("0px");
            setAddButtonVisibilityMonday("hidden");
            setExpandMondayWidth("0px");
            setTaskTitleWidthMonday("0%");
            setTaskTitleHeightMonday("0");
            setTaskTitleOpacityMonday(0);
            setAddTaskInputWidthMonday("0%");
            setAddTaskInputHeightMonday("0px");
            setAddTaskInputVisibilityMonday("hidden");
            setAddTaskInputPaddingMonday("0px");
            setAddTaskInputPointerEventsMonday("node");
            setAddTaskInputFontSizeMonday("none");
            setAddTaskButtonWidthMonday("0px");
            setAddTaskButtonHeightMonday("0px");
            setAddTaskButtonMarginLeftMonday("0px");
            setAddTaskButtonPaddingMonday("0px");
            setAddTaskFontSizeMonday("0px");
            setAddTaskVisibilityMonday("hidden");
            } else if (hoverEffectsTuesday === true) {
            setHoverEffectsTuesday(false);
            setJustifyContentTuesday("center");
            setFontsizeInitialTuesday("25px");
            setColorInitialTuesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationTuesday("0px");
            setWeekdayWidthTuesday("auto");
            setWeekdayContentWidthTuesday("60px");
            setDayNoteInputHeightTuesday("0px");
            setDayNoteInputWidthTuesday("0px");
            setDayNoteInputVisibilityTuesday("hidden");
            setDayNoteInputPointerEventsTuesday("none");
            setDayNoteInputFontSizeTuesday("0px");
            setDayNoteInputPaddingTuesday("0px");
            setAddButtonWidthTuesday("0px");
            setAddButtonHeightTuesday("0px");
            setAddButtonFontSizeTuesday("0px");
            setAddButtonPaddingTuesday("0px");
            setAddButtonVisibilityTuesday("hidden");
            setExpandTuesdayWidth("0px");
            setTaskTitleWidthTuesday("0%");
            setTaskTitleHeightTuesday("0");
            setTaskTitleOpacityTuesday(0);
            setAddTaskInputWidthTuesday("0%");
            setAddTaskInputHeightTuesday("0px");
            setAddTaskInputVisibilityTuesday("hidden");
            setAddTaskInputPaddingTuesday("0px");
            setAddTaskInputPointerEventsTuesday("node");
            setAddTaskInputFontSizeTuesday("none");
            setAddTaskButtonWidthTuesday("0px");
            setAddTaskButtonHeightTuesday("0px");
            setAddTaskButtonMarginLeftTuesday("0px");
            setAddTaskButtonPaddingTuesday("0px");
            setAddTaskFontSizeTuesday("0px");
            setAddTaskVisibilityTuesday("hidden");
            } else if (hoverEffectsThursday === true) {
            setHoverEffectsThursday(false);
            setJustifyContentThursday("center");
            setFontsizeInitialThursday("25px");
            setColorInitialThursday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationThursday("0px");
            setWeekdayWidthThursday("auto");
            setWeekdayContentWidthThursday("60px");
            setDayNoteInputHeightThursday("0px");
            setDayNoteInputWidthThursday("0px");
            setDayNoteInputVisibilityThursday("hidden");
            setDayNoteInputPointerEventsThursday("none");
            setDayNoteInputFontSizeThursday("0px");
            setDayNoteInputPaddingThursday("0px");
            setAddButtonWidthThursday("0px");
            setAddButtonHeightThursday("0px");
            setAddButtonFontSizeThursday("0px");
            setAddButtonPaddingThursday("0px");
            setAddButtonVisibilityThursday("hidden");
            setExpandThursdayWidth("0px");
            setTaskTitleWidthThursday("0%");
            setTaskTitleHeightThursday("0");
            setTaskTitleOpacityThursday(0);
            setAddTaskInputWidthThursday("0%");
            setAddTaskInputHeightThursday("0px");
            setAddTaskInputVisibilityThursday("hidden");
            setAddTaskInputPaddingThursday("0px");
            setAddTaskInputPointerEventsThursday("node");
            setAddTaskInputFontSizeThursday("none");
            setAddTaskButtonWidthThursday("0px");
            setAddTaskButtonHeightThursday("0px");
            setAddTaskButtonMarginLeftThursday("0px");
            setAddTaskButtonPaddingThursday("0px");
            setAddTaskFontSizeThursday("0px");
            setAddTaskVisibilityThursday("hidden");
            } else if (hoverEffectsFriday) {
            setHoverEffectsFriday(false);
            setJustifyContentFriday("center");
            setFontsizeInitialFriday("25px");
            setColorInitialFriday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationFriday("0px");
            setWeekdayWidthFriday("auto");
            setWeekdayContentWidthFriday("60px");
            setDayNoteInputHeightFriday("0px");
            setDayNoteInputWidthFriday("0px");
            setDayNoteInputVisibilityFriday("hidden");
            setDayNoteInputPointerEventsFriday("none");
            setDayNoteInputFontSizeFriday("0px");
            setDayNoteInputPaddingFriday("0px");
            setAddButtonWidthFriday("0px");
            setAddButtonHeightFriday("0px");
            setAddButtonFontSizeFriday("0px");
            setAddButtonPaddingFriday("0px");
            setAddButtonVisibilityFriday("hidden");
            setExpandFridayWidth("0px");
            setTaskTitleWidthFriday("0%");
            setTaskTitleHeightFriday("0");
            setTaskTitleOpacityFriday(0);
            setAddTaskInputWidthFriday("0%");
            setAddTaskInputHeightFriday("0px");
            setAddTaskInputVisibilityFriday("hidden");
            setAddTaskInputPaddingFriday("0px");
            setAddTaskInputPointerEventsFriday("node");
            setAddTaskInputFontSizeFriday("none");
            setAddTaskButtonWidthFriday("0px");
            setAddTaskButtonHeightFriday("0px");
            setAddTaskButtonMarginLeftFriday("0px");
            setAddTaskButtonPaddingFriday("0px");
            setAddTaskFontSizeFriday("0px");
            setAddTaskVisibilityFriday("hidden");
            } else if (hoverEffectsSaturday === true) {
            setHoverEffectsSaturday(false);
            setJustifyContentSaturday("center");
            setFontsizeInitialSaturday("25px");
            setColorInitialSaturday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSaturday("0px");
            setWeekdayWidthSaturday("auto");
            setWeekdayContentWidthSaturday("60px");
            setDayNoteInputHeightSaturday("0px");
            setDayNoteInputWidthSaturday("0px");
            setDayNoteInputVisibilitySaturday("hidden");
            setDayNoteInputPointerEventsSaturday("none");
            setDayNoteInputFontSizeSaturday("0px");
            setDayNoteInputPaddingSaturday("0px");
            setAddButtonWidthSaturday("0px");
            setAddButtonHeightSaturday("0px");
            setAddButtonFontSizeSaturday("0px");
            setAddButtonPaddingSaturday("0px");
            setAddButtonVisibilitySaturday("hidden");
            setExpandSaturdayWidth("0px");
            setTaskTitleWidthSaturday("0%");
            setTaskTitleHeightSaturday("0");
            setTaskTitleOpacitySaturday(0);
            setAddTaskInputWidthSaturday("0%");
            setAddTaskInputHeightSaturday("0px");
            setAddTaskInputVisibilitySaturday("hidden");
            setAddTaskInputPaddingSaturday("0px");
            setAddTaskInputPointerEventsSaturday("node");
            setAddTaskInputFontSizeSaturday("none");
            setAddTaskButtonWidthSaturday("0px");
            setAddTaskButtonHeightSaturday("0px");
            setAddTaskButtonMarginLeftSaturday("0px");
            setAddTaskButtonPaddingSaturday("0px");
            setAddTaskFontSizeSaturday("0px");
            setAddTaskVisibilitySaturday("hidden");
            } else if (hoverEffectsSunday === true) {
            setHoverEffectsSunday(false);
            setJustifyContentSunday("center");
            setFontsizeInitialSunday("25px");
            setColorInitialSunday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSunday("0px");
            setWeekdayWidthSunday("auto");
            setWeekdayContentWidthSunday("60px");
            setDayNoteInputHeightSunday("0px");
            setDayNoteInputWidthSunday("0px");
            setDayNoteInputVisibilitySunday("hidden");
            setDayNoteInputPointerEventsSunday("none");
            setDayNoteInputFontSizeSunday("0px");
            setDayNoteInputPaddingSunday("0px");
            setAddButtonWidthSunday("0px");
            setAddButtonHeightSunday("0px");
            setAddButtonFontSizeSunday("0px");
            setAddButtonPaddingSunday("0px");
            setAddButtonVisibilitySunday("hidden");
            setExpandSundayWidth("0px");
            setTaskTitleWidthSunday("0%");
            setTaskTitleHeightSunday("0");
            setTaskTitleOpacitySunday(0);
            setAddTaskInputWidthSunday("0%");
            setAddTaskInputHeightSunday("0px");
            setAddTaskInputVisibilitySunday("hidden");
            setAddTaskInputPaddingSunday("0px");
            setAddTaskInputPointerEventsSunday("node");
            setAddTaskInputFontSizeSunday("none");
            setAddTaskButtonWidthSunday("0px");
            setAddTaskButtonHeightSunday("0px");
            setAddTaskButtonMarginLeftSunday("0px");
            setAddTaskButtonPaddingSunday("0px");
            setAddTaskFontSizeSunday("0px");
            setAddTaskVisibilitySunday("hidden");
            }
        } else {
        setHoverEffectsWednesday(false);
        setJustifyContentWednesday("center");
        setFontsizeInitialWednesday("25px");
        setColorInitialWednesday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationWednesday("0px");
        setWeekdayWidthWednesday("auto");
        setWeekdayContentWidthWednesday("60px");
        setDayNoteInputHeightWednesday("0px");
        setDayNoteInputWidthWednesday("0px");
        setDayNoteInputVisibilityWednesday("hidden");
        setDayNoteInputPointerEventsWednesday("none");
        setDayNoteInputFontSizeWednesday("0px");
        setDayNoteInputPaddingWednesday("0px");
        setAddButtonWidthWednesday("0px");
        setAddButtonHeightWednesday("0px");
        setAddButtonFontSizeWednesday("0px");
        setAddButtonPaddingWednesday("0px");
        setAddButtonVisibilityWednesday("hidden");
        setExpandWednesdayWidth("0px");
        setTaskTitleWidthWednesday("0%");
        setTaskTitleHeightWednesday("0");
        setTaskTitleOpacityWednesday(0);
        setAddTaskInputWidthWednesday("0%");
        setAddTaskInputHeightWednesday("0px");
        setAddTaskInputVisibilityWednesday("hidden");
        setAddTaskInputPaddingWednesday("0px");
        setAddTaskInputPointerEventsWednesday("node");
        setAddTaskInputFontSizeWednesday("none");
        setAddTaskButtonWidthWednesday("0px");
        setAddTaskButtonHeightWednesday("0px");
        setAddTaskButtonMarginLeftWednesday("0px");
        setAddTaskButtonPaddingWednesday("0px");
        setAddTaskFontSizeWednesday("0px");
        setAddTaskVisibilityWednesday("hidden");
        }
    }



    const [ hoverEffectsThursday, setHoverEffectsThursday ] = useState(false);
    const [ expandThursdayWidth, setExpandThursdayWidth ] = useState("0px");
    const [ justifyContentThursday, setJustifyContentThursday ]= useState("center");
    const [ fontsizeInitialThursday, setFontsizeInitialThursday ] = useState("25px");
    const [ colorInitialThursday, setColorInitialThursday ] = useState("rgba(223, 223, 223, 0.6)");
    const [ fontsizeContinuationThursday, setFontsizeContinuationThursday ] = useState("0px");
    const [ weekdayWidthThursday, setWeekdayWidthThursday ] = useState("auto");
    const [ weekdayContentWidthThursday, setWeekdayContentWidthThursday ] = useState("60px");
    const [ dayNoteInputHeightThursday, setDayNoteInputHeightThursday ] = useState("0px");
    const [ dayNoteInputWidthThursday, setDayNoteInputWidthThursday ] = useState("0px");
    const [ dayNoteInputVisibilityThursday, setDayNoteInputVisibilityThursday ] = useState("hidden");
    const [ dayNoteInputPointerEventsThursday, setDayNoteInputPointerEventsThursday ] = useState("none");
    const [ dayNoteInputFontSizeThursday, setDayNoteInputFontSizeThursday ] = useState("0px");
    const [ dayNoteInputPaddingThursday, setDayNoteInputPaddingThursday ] = useState("0px");
    const [ addButtonWidthThursday, setAddButtonWidthThursday ] = useState("0px");
    const [ addButtonHeightThursday, setAddButtonHeightThursday ] = useState("0px");
    const [ addButtonFontSizeThursday, setAddButtonFontSizeThursday ] = useState("0px");
    const [ addButtonPaddingThursday, setAddButtonPaddingThursday ] = useState("0px");
    const [ addButtonVisibilityThursday, setAddButtonVisibilityThursday ] = useState("hidden");
    const [ taskTitleWidthThursday, setTaskTitleWidthThursday ] = useState("0%");
    const [ taskTitleHeightThursday, setTaskTitleHeightThursday ] = useState("0");
    const [ taskTitleOpacityThursday, setTaskTitleOpacityThursday ] = useState(0);
    const [ addTaskInputWidthThursday, setAddTaskInputWidthThursday ] = useState("0%");
    const [ addTaskInputHeightThursday, setAddTaskInputHeightThursday ] = useState("0");
    const [ addTaskInputVisibilityThursday, setAddTaskInputVisibilityThursday ] = useState("hidden");
    const [ addTaskInputPaddingThursday, setAddTaskInputPaddingThursday ] = useState("0px");
    const [ addTaskInputPointerEventsThursday, setAddTaskInputPointerEventsThursday ] = useState("none");
    const [ addTaskInputFontSizeThursday, setAddTaskInputFontSizeThursday ] = useState("none");
    const [ addTaskButtonWidthThursday, setAddTaskButtonWidthThursday ] = useState("0px");
    const [ addTaskButtonHeightThursday, setAddTaskButtonHeightThursday ] = useState("0px");
    const [ addTaskButtonMarginLeftThursday, setAddTaskButtonMarginLeftThursday ] = useState("0px");
    const [ addTaskButtonPaddingThursday, setAddTaskButtonPaddingThursday ] = useState("0px");
    const [ addTaskFontSizeThursday, setAddTaskFontSizeThursday ] = useState("0px");
    const [ addTaskVisibilityThursday, setAddTaskVisibilityThursday ] = useState("hidden");

    function expandThursday() {
        if (hoverEffectsThursday === false) {
        setHoverEffectsThursday(true);
        setJustifyContentThursday("space-between");
        setFontsizeInitialThursday("40px");
        setColorInitialThursday("rgba(54, 40, 255, 0.6)");
        setFontsizeContinuationThursday("20px");
        setWeekdayWidthThursday("40%");
        setWeekdayContentWidthThursday("100%");
        setDayNoteInputHeightThursday("26px");
        setDayNoteInputWidthThursday("180px");
        setDayNoteInputVisibilityThursday("visible");
        setDayNoteInputPointerEventsThursday("auto");
        setDayNoteInputFontSizeThursday("15px");
        setDayNoteInputPaddingThursday("0px");
        setAddButtonWidthThursday("60px");
        setAddButtonHeightThursday("15px");
        setAddButtonFontSizeThursday("17px");
        setAddButtonPaddingThursday("6px");
        setAddButtonVisibilityThursday("visible");
        setExpandThursdayWidth("30px");
        setTaskTitleWidthThursday("100%");
        setTaskTitleHeightThursday("auto");
        setTaskTitleOpacityThursday(0.6);
        setAddTaskInputWidthThursday("75%");
        setAddTaskInputHeightThursday("15px");
        setAddTaskInputVisibilityThursday("visible");
        setAddTaskInputPaddingThursday("6px");
        setAddTaskInputPointerEventsThursday("auto");
        setAddTaskInputFontSizeThursday("15px");
        setAddTaskButtonWidthThursday("10%");
        setAddTaskButtonHeightThursday("15px");
        setAddTaskButtonMarginLeftThursday("3px");
        setAddTaskButtonPaddingThursday("6px");
        setAddTaskFontSizeThursday("17px");
        setAddTaskVisibilityThursday("visible");






        if (hoverEffectsMonday === true) {
            setHoverEffectsMonday(false);
            setJustifyContentMonday("center");
            setFontsizeInitialMonday("25px");
            setColorInitialMonday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationMonday("0px");
            setWeekdayWidthMonday("auto");
            setWeekdayContentWidthMonday("60px");
            setDayNoteInputHeightMonday("0px");
            setDayNoteInputWidthMonday("0px");
            setDayNoteInputVisibilityMonday("hidden");
            setDayNoteInputPointerEventsMonday("none");
            setDayNoteInputFontSizeMonday("0px");
            setDayNoteInputPaddingMonday("0px");
            setAddButtonWidthMonday("0px");
            setAddButtonHeightMonday("0px");
            setAddButtonFontSizeMonday("0px");
            setAddButtonPaddingMonday("0px");
            setAddButtonVisibilityMonday("hidden");
            setExpandMondayWidth("0px");
            setTaskTitleWidthMonday("0%");
            setTaskTitleHeightMonday("0");
            setTaskTitleOpacityMonday(0);
            setAddTaskInputWidthMonday("0%");
            setAddTaskInputHeightMonday("0px");
            setAddTaskInputVisibilityMonday("hidden");
            setAddTaskInputPaddingMonday("0px");
            setAddTaskInputPointerEventsMonday("node");
            setAddTaskInputFontSizeMonday("none");
            setAddTaskButtonWidthMonday("0px");
            setAddTaskButtonHeightMonday("0px");
            setAddTaskButtonMarginLeftMonday("0px");
            setAddTaskButtonPaddingMonday("0px");
            setAddTaskFontSizeMonday("0px");
            setAddTaskVisibilityMonday("hidden");
            } else if (hoverEffectsTuesday === true) {
            setHoverEffectsTuesday(false);
            setJustifyContentTuesday("center");
            setFontsizeInitialTuesday("25px");
            setColorInitialTuesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationTuesday("0px");
            setWeekdayWidthTuesday("auto");
            setWeekdayContentWidthTuesday("60px");
            setDayNoteInputHeightTuesday("0px");
            setDayNoteInputWidthTuesday("0px");
            setDayNoteInputVisibilityTuesday("hidden");
            setDayNoteInputPointerEventsTuesday("none");
            setDayNoteInputFontSizeTuesday("0px");
            setDayNoteInputPaddingTuesday("0px");
            setAddButtonWidthTuesday("0px");
            setAddButtonHeightTuesday("0px");
            setAddButtonFontSizeTuesday("0px");
            setAddButtonPaddingTuesday("0px");
            setAddButtonVisibilityTuesday("hidden");
            setExpandTuesdayWidth("0px");
            setTaskTitleWidthTuesday("0%");
            setTaskTitleHeightTuesday("0");
            setTaskTitleOpacityTuesday(0);
            setAddTaskInputWidthTuesday("0%");
            setAddTaskInputHeightTuesday("0px");
            setAddTaskInputVisibilityTuesday("hidden");
            setAddTaskInputPaddingTuesday("0px");
            setAddTaskInputPointerEventsTuesday("node");
            setAddTaskInputFontSizeTuesday("none");
            setAddTaskButtonWidthTuesday("0px");
            setAddTaskButtonHeightTuesday("0px");
            setAddTaskButtonMarginLeftTuesday("0px");
            setAddTaskButtonPaddingTuesday("0px");
            setAddTaskFontSizeTuesday("0px");
            setAddTaskVisibilityTuesday("hidden");
            } else if (hoverEffectsWednesday) {
            setHoverEffectsWednesday(false);
            setJustifyContentWednesday("center");
            setFontsizeInitialWednesday("25px");
            setColorInitialWednesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationWednesday("0px");
            setWeekdayWidthWednesday("auto");
            setWeekdayContentWidthWednesday("60px");
            setDayNoteInputHeightWednesday("0px");
            setDayNoteInputWidthWednesday("0px");
            setDayNoteInputVisibilityWednesday("hidden");
            setDayNoteInputPointerEventsWednesday("none");
            setDayNoteInputFontSizeWednesday("0px");
            setDayNoteInputPaddingWednesday("0px");
            setAddButtonWidthWednesday("0px");
            setAddButtonHeightWednesday("0px");
            setAddButtonFontSizeWednesday("0px");
            setAddButtonPaddingWednesday("0px");
            setAddButtonVisibilityWednesday("hidden");
            setExpandWednesdayWidth("0px");
            setTaskTitleWidthWednesday("0%");
            setTaskTitleHeightWednesday("0");
            setTaskTitleOpacityWednesday(0);
            setAddTaskInputWidthWednesday("0%");
            setAddTaskInputHeightWednesday("0px");
            setAddTaskInputVisibilityWednesday("hidden");
            setAddTaskInputPaddingWednesday("0px");
            setAddTaskInputPointerEventsWednesday("node");
            setAddTaskInputFontSizeWednesday("none");
            setAddTaskButtonWidthWednesday("0px");
            setAddTaskButtonHeightWednesday("0px");
            setAddTaskButtonMarginLeftWednesday("0px");
            setAddTaskButtonPaddingWednesday("0px");
            setAddTaskFontSizeWednesday("0px");
            setAddTaskVisibilityWednesday("hidden");
            } else if (hoverEffectsFriday) {
            setHoverEffectsFriday(false);
            setJustifyContentFriday("center");
            setFontsizeInitialFriday("25px");
            setColorInitialFriday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationFriday("0px");
            setWeekdayWidthFriday("auto");
            setWeekdayContentWidthFriday("60px");
            setDayNoteInputHeightFriday("0px");
            setDayNoteInputWidthFriday("0px");
            setDayNoteInputVisibilityFriday("hidden");
            setDayNoteInputPointerEventsFriday("none");
            setDayNoteInputFontSizeFriday("0px");
            setDayNoteInputPaddingFriday("0px");
            setAddButtonWidthFriday("0px");
            setAddButtonHeightFriday("0px");
            setAddButtonFontSizeFriday("0px");
            setAddButtonPaddingFriday("0px");
            setAddButtonVisibilityFriday("hidden");
            setExpandFridayWidth("0px");
            setTaskTitleWidthFriday("0%");
            setTaskTitleHeightFriday("0");
            setTaskTitleOpacityFriday(0);
            setAddTaskInputWidthFriday("0%");
            setAddTaskInputHeightFriday("0px");
            setAddTaskInputVisibilityFriday("hidden");
            setAddTaskInputPaddingFriday("0px");
            setAddTaskInputPointerEventsFriday("node");
            setAddTaskInputFontSizeFriday("none");
            setAddTaskButtonWidthFriday("0px");
            setAddTaskButtonHeightFriday("0px");
            setAddTaskButtonMarginLeftFriday("0px");
            setAddTaskButtonPaddingFriday("0px");
            setAddTaskFontSizeFriday("0px");
            setAddTaskVisibilityFriday("hidden");
            } else if (hoverEffectsSaturday === true) {
            setHoverEffectsSaturday(false);
            setJustifyContentSaturday("center");
            setFontsizeInitialSaturday("25px");
            setColorInitialSaturday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSaturday("0px");
            setWeekdayWidthSaturday("auto");
            setWeekdayContentWidthSaturday("60px");
            setDayNoteInputHeightSaturday("0px");
            setDayNoteInputWidthSaturday("0px");
            setDayNoteInputVisibilitySaturday("hidden");
            setDayNoteInputPointerEventsSaturday("none");
            setDayNoteInputFontSizeSaturday("0px");
            setDayNoteInputPaddingSaturday("0px");
            setAddButtonWidthSaturday("0px");
            setAddButtonHeightSaturday("0px");
            setAddButtonFontSizeSaturday("0px");
            setAddButtonPaddingSaturday("0px");
            setAddButtonVisibilitySaturday("hidden");
            setExpandSaturdayWidth("0px");
            setTaskTitleWidthSaturday("0%");
            setTaskTitleHeightSaturday("0");
            setTaskTitleOpacitySaturday(0);
            setAddTaskInputWidthSaturday("0%");
            setAddTaskInputHeightSaturday("0px");
            setAddTaskInputVisibilitySaturday("hidden");
            setAddTaskInputPaddingSaturday("0px");
            setAddTaskInputPointerEventsSaturday("node");
            setAddTaskInputFontSizeSaturday("none");
            setAddTaskButtonWidthSaturday("0px");
            setAddTaskButtonHeightSaturday("0px");
            setAddTaskButtonMarginLeftSaturday("0px");
            setAddTaskButtonPaddingSaturday("0px");
            setAddTaskFontSizeSaturday("0px");
            setAddTaskVisibilitySaturday("hidden");
            } else if (hoverEffectsSunday === true) {
            setHoverEffectsSunday(false);
            setJustifyContentSunday("center");
            setFontsizeInitialSunday("25px");
            setColorInitialSunday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSunday("0px");
            setWeekdayWidthSunday("auto");
            setWeekdayContentWidthSunday("60px");
            setDayNoteInputHeightSunday("0px");
            setDayNoteInputWidthSunday("0px");
            setDayNoteInputVisibilitySunday("hidden");
            setDayNoteInputPointerEventsSunday("none");
            setDayNoteInputFontSizeSunday("0px");
            setDayNoteInputPaddingSunday("0px");
            setAddButtonWidthSunday("0px");
            setAddButtonHeightSunday("0px");
            setAddButtonFontSizeSunday("0px");
            setAddButtonPaddingSunday("0px");
            setAddButtonVisibilitySunday("hidden");
            setExpandSundayWidth("0px");
            setTaskTitleWidthSunday("0%");
            setTaskTitleHeightSunday("0");
            setTaskTitleOpacitySunday(0);
            setAddTaskInputWidthSunday("0%");
            setAddTaskInputHeightSunday("0px");
            setAddTaskInputVisibilitySunday("hidden");
            setAddTaskInputPaddingSunday("0px");
            setAddTaskInputPointerEventsSunday("node");
            setAddTaskInputFontSizeSunday("none");
            setAddTaskButtonWidthSunday("0px");
            setAddTaskButtonHeightSunday("0px");
            setAddTaskButtonMarginLeftSunday("0px");
            setAddTaskButtonPaddingSunday("0px");
            setAddTaskFontSizeSunday("0px");
            setAddTaskVisibilitySunday("hidden");
            }
        } else {
        setHoverEffectsThursday(false);
        setJustifyContentThursday("center");
        setFontsizeInitialThursday("25px");
        setColorInitialThursday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationThursday("0px");
        setWeekdayWidthThursday("auto");
        setWeekdayContentWidthThursday("60px");
        setDayNoteInputHeightThursday("0px");
        setDayNoteInputWidthThursday("0px");
        setDayNoteInputVisibilityThursday("hidden");
        setDayNoteInputPointerEventsThursday("none");
        setDayNoteInputFontSizeThursday("0px");
        setDayNoteInputPaddingThursday("0px");
        setAddButtonWidthThursday("0px");
        setAddButtonHeightThursday("0px");
        setAddButtonFontSizeThursday("0px");
        setAddButtonPaddingThursday("0px");
        setAddButtonVisibilityThursday("hidden");
        setExpandThursdayWidth("0px");
        setTaskTitleWidthThursday("0%");
        setTaskTitleHeightThursday("0");
        setTaskTitleOpacityThursday(0);
        setAddTaskInputWidthThursday("0%");
        setAddTaskInputHeightThursday("0px");
        setAddTaskInputVisibilityThursday("hidden");
        setAddTaskInputPaddingThursday("0px");
        setAddTaskInputPointerEventsThursday("node");
        setAddTaskInputFontSizeThursday("none");
        setAddTaskButtonWidthThursday("0px");
        setAddTaskButtonHeightThursday("0px");
        setAddTaskButtonMarginLeftThursday("0px");
        setAddTaskButtonPaddingThursday("0px");
        setAddTaskFontSizeThursday("0px");
        setAddTaskVisibilityThursday("hidden");
        }
    }



    const [ hoverEffectsFriday, setHoverEffectsFriday ] = useState(false);
    const [ expandFridayWidth, setExpandFridayWidth ] = useState("0px");
    const [ justifyContentFriday, setJustifyContentFriday ]= useState("center");
    const [ fontsizeInitialFriday, setFontsizeInitialFriday ] = useState("25px");
    const [ colorInitialFriday, setColorInitialFriday ] = useState("rgba(223, 223, 223, 0.6)");
    const [ fontsizeContinuationFriday, setFontsizeContinuationFriday ] = useState("0px");
    const [ weekdayWidthFriday, setWeekdayWidthFriday ] = useState("auto");
    const [ weekdayContentWidthFriday, setWeekdayContentWidthFriday ] = useState("60px");
    const [ dayNoteInputHeightFriday, setDayNoteInputHeightFriday ] = useState("0px");
    const [ dayNoteInputWidthFriday, setDayNoteInputWidthFriday ] = useState("0px");
    const [ dayNoteInputVisibilityFriday, setDayNoteInputVisibilityFriday ] = useState("hidden");
    const [ dayNoteInputPointerEventsFriday, setDayNoteInputPointerEventsFriday ] = useState("none");
    const [ dayNoteInputFontSizeFriday, setDayNoteInputFontSizeFriday ] = useState("0px");
    const [ dayNoteInputPaddingFriday, setDayNoteInputPaddingFriday ] = useState("0px");
    const [ addButtonWidthFriday, setAddButtonWidthFriday ] = useState("0px");
    const [ addButtonHeightFriday, setAddButtonHeightFriday ] = useState("0px");
    const [ addButtonFontSizeFriday, setAddButtonFontSizeFriday ] = useState("0px");
    const [ addButtonPaddingFriday, setAddButtonPaddingFriday ] = useState("0px");
    const [ addButtonVisibilityFriday, setAddButtonVisibilityFriday ] = useState("hidden");
    const [ taskTitleWidthFriday, setTaskTitleWidthFriday ] = useState("0%");
    const [ taskTitleHeightFriday, setTaskTitleHeightFriday ] = useState("0");
    const [ taskTitleOpacityFriday, setTaskTitleOpacityFriday ] = useState(0);
    const [ addTaskInputWidthFriday, setAddTaskInputWidthFriday ] = useState("0%");
    const [ addTaskInputHeightFriday, setAddTaskInputHeightFriday ] = useState("0");
    const [ addTaskInputVisibilityFriday, setAddTaskInputVisibilityFriday ] = useState("hidden");
    const [ addTaskInputPaddingFriday, setAddTaskInputPaddingFriday ] = useState("0px");
    const [ addTaskInputPointerEventsFriday, setAddTaskInputPointerEventsFriday ] = useState("none");
    const [ addTaskInputFontSizeFriday, setAddTaskInputFontSizeFriday ] = useState("none");
    const [ addTaskButtonWidthFriday, setAddTaskButtonWidthFriday ] = useState("0px");
    const [ addTaskButtonHeightFriday, setAddTaskButtonHeightFriday ] = useState("0px");
    const [ addTaskButtonMarginLeftFriday, setAddTaskButtonMarginLeftFriday ] = useState("0px");
    const [ addTaskButtonPaddingFriday, setAddTaskButtonPaddingFriday ] = useState("0px");
    const [ addTaskFontSizeFriday, setAddTaskFontSizeFriday ] = useState("0px");
    const [ addTaskVisibilityFriday, setAddTaskVisibilityFriday ] = useState("hidden");

    function expandFriday() {
        if (hoverEffectsFriday === false) {
        setHoverEffectsFriday(true);
        setJustifyContentFriday("space-between");
        setFontsizeInitialFriday("40px");
        setColorInitialFriday("rgba(54, 40, 255, 0.6)");
        setFontsizeContinuationFriday("20px");
        setWeekdayWidthFriday("40%");
        setWeekdayContentWidthFriday("100%");
        setDayNoteInputHeightFriday("26px");
        setDayNoteInputWidthFriday("180px");
        setDayNoteInputVisibilityFriday("visible");
        setDayNoteInputPointerEventsFriday("auto");
        setDayNoteInputFontSizeFriday("15px");
        setDayNoteInputPaddingFriday("0px");
        setAddButtonWidthFriday("60px");
        setAddButtonHeightFriday("15px");
        setAddButtonFontSizeFriday("17px");
        setAddButtonPaddingFriday("6px");
        setAddButtonVisibilityFriday("visible");
        setExpandFridayWidth("30px");
        setTaskTitleWidthFriday("100%");
        setTaskTitleHeightFriday("auto");
        setTaskTitleOpacityFriday(0.6);
        setAddTaskInputWidthFriday("75%");
        setAddTaskInputHeightFriday("15px");
        setAddTaskInputVisibilityFriday("visible");
        setAddTaskInputPaddingFriday("6px");
        setAddTaskInputPointerEventsFriday("auto");
        setAddTaskInputFontSizeFriday("15px");
        setAddTaskButtonWidthFriday("10%");
        setAddTaskButtonHeightFriday("15px");
        setAddTaskButtonMarginLeftFriday("3px");
        setAddTaskButtonPaddingFriday("6px");
        setAddTaskFontSizeFriday("17px");
        setAddTaskVisibilityFriday("visible");






        if (hoverEffectsMonday === true) {
            setHoverEffectsMonday(false);
            setJustifyContentMonday("center");
            setFontsizeInitialMonday("25px");
            setColorInitialMonday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationMonday("0px");
            setWeekdayWidthMonday("auto");
            setWeekdayContentWidthMonday("60px");
            setDayNoteInputHeightMonday("0px");
            setDayNoteInputWidthMonday("0px");
            setDayNoteInputVisibilityMonday("hidden");
            setDayNoteInputPointerEventsMonday("none");
            setDayNoteInputFontSizeMonday("0px");
            setDayNoteInputPaddingMonday("0px");
            setAddButtonWidthMonday("0px");
            setAddButtonHeightMonday("0px");
            setAddButtonFontSizeMonday("0px");
            setAddButtonPaddingMonday("0px");
            setAddButtonVisibilityMonday("hidden");
            setExpandMondayWidth("0px");
            setTaskTitleWidthMonday("0%");
            setTaskTitleHeightMonday("0");
            setTaskTitleOpacityMonday(0);
            setAddTaskInputWidthMonday("0%");
            setAddTaskInputHeightMonday("0px");
            setAddTaskInputVisibilityMonday("hidden");
            setAddTaskInputPaddingMonday("0px");
            setAddTaskInputPointerEventsMonday("node");
            setAddTaskInputFontSizeMonday("none");
            setAddTaskButtonWidthMonday("0px");
            setAddTaskButtonHeightMonday("0px");
            setAddTaskButtonMarginLeftMonday("0px");
            setAddTaskButtonPaddingMonday("0px");
            setAddTaskFontSizeMonday("0px");
            setAddTaskVisibilityMonday("hidden");
            } else if (hoverEffectsTuesday === true) {
            setHoverEffectsTuesday(false);
            setJustifyContentTuesday("center");
            setFontsizeInitialTuesday("25px");
            setColorInitialTuesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationTuesday("0px");
            setWeekdayWidthTuesday("auto");
            setWeekdayContentWidthTuesday("60px");
            setDayNoteInputHeightTuesday("0px");
            setDayNoteInputWidthTuesday("0px");
            setDayNoteInputVisibilityTuesday("hidden");
            setDayNoteInputPointerEventsTuesday("none");
            setDayNoteInputFontSizeTuesday("0px");
            setDayNoteInputPaddingTuesday("0px");
            setAddButtonWidthTuesday("0px");
            setAddButtonHeightTuesday("0px");
            setAddButtonFontSizeTuesday("0px");
            setAddButtonPaddingTuesday("0px");
            setAddButtonVisibilityTuesday("hidden");
            setExpandTuesdayWidth("0px");
            setTaskTitleWidthTuesday("0%");
            setTaskTitleHeightTuesday("0");
            setTaskTitleOpacityTuesday(0);
            setAddTaskInputWidthTuesday("0%");
            setAddTaskInputHeightTuesday("0px");
            setAddTaskInputVisibilityTuesday("hidden");
            setAddTaskInputPaddingTuesday("0px");
            setAddTaskInputPointerEventsTuesday("node");
            setAddTaskInputFontSizeTuesday("none");
            setAddTaskButtonWidthTuesday("0px");
            setAddTaskButtonHeightTuesday("0px");
            setAddTaskButtonMarginLeftTuesday("0px");
            setAddTaskButtonPaddingTuesday("0px");
            setAddTaskFontSizeTuesday("0px");
            setAddTaskVisibilityTuesday("hidden");
            } else if (hoverEffectsWednesday) {
            setHoverEffectsWednesday(false);
            setJustifyContentWednesday("center");
            setFontsizeInitialWednesday("25px");
            setColorInitialWednesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationWednesday("0px");
            setWeekdayWidthWednesday("auto");
            setWeekdayContentWidthWednesday("60px");
            setDayNoteInputHeightWednesday("0px");
            setDayNoteInputWidthWednesday("0px");
            setDayNoteInputVisibilityWednesday("hidden");
            setDayNoteInputPointerEventsWednesday("none");
            setDayNoteInputFontSizeWednesday("0px");
            setDayNoteInputPaddingWednesday("0px");
            setAddButtonWidthWednesday("0px");
            setAddButtonHeightWednesday("0px");
            setAddButtonFontSizeWednesday("0px");
            setAddButtonPaddingWednesday("0px");
            setAddButtonVisibilityWednesday("hidden");
            setExpandWednesdayWidth("0px");
            setTaskTitleWidthWednesday("0%");
            setTaskTitleHeightWednesday("0");
            setTaskTitleOpacityWednesday(0);
            setAddTaskInputWidthWednesday("0%");
            setAddTaskInputHeightWednesday("0px");
            setAddTaskInputVisibilityWednesday("hidden");
            setAddTaskInputPaddingWednesday("0px");
            setAddTaskInputPointerEventsWednesday("node");
            setAddTaskInputFontSizeWednesday("none");
            setAddTaskButtonWidthWednesday("0px");
            setAddTaskButtonHeightWednesday("0px");
            setAddTaskButtonMarginLeftWednesday("0px");
            setAddTaskButtonPaddingWednesday("0px");
            setAddTaskFontSizeWednesday("0px");
            setAddTaskVisibilityWednesday("hidden");
            } else if (hoverEffectsThursday === true) {
            setHoverEffectsThursday(false);
            setJustifyContentThursday("center");
            setFontsizeInitialThursday("25px");
            setColorInitialThursday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationThursday("0px");
            setWeekdayWidthThursday("auto");
            setWeekdayContentWidthThursday("60px");
            setDayNoteInputHeightThursday("0px");
            setDayNoteInputWidthThursday("0px");
            setDayNoteInputVisibilityThursday("hidden");
            setDayNoteInputPointerEventsThursday("none");
            setDayNoteInputFontSizeThursday("0px");
            setDayNoteInputPaddingThursday("0px");
            setAddButtonWidthThursday("0px");
            setAddButtonHeightThursday("0px");
            setAddButtonFontSizeThursday("0px");
            setAddButtonPaddingThursday("0px");
            setAddButtonVisibilityThursday("hidden");
            setExpandThursdayWidth("0px");
            setTaskTitleWidthThursday("0%");
            setTaskTitleHeightThursday("0");
            setTaskTitleOpacityThursday(0);
            setAddTaskInputWidthThursday("0%");
            setAddTaskInputHeightThursday("0px");
            setAddTaskInputVisibilityThursday("hidden");
            setAddTaskInputPaddingThursday("0px");
            setAddTaskInputPointerEventsThursday("node");
            setAddTaskInputFontSizeThursday("none");
            setAddTaskButtonWidthThursday("0px");
            setAddTaskButtonHeightThursday("0px");
            setAddTaskButtonMarginLeftThursday("0px");
            setAddTaskButtonPaddingThursday("0px");
            setAddTaskFontSizeThursday("0px");
            setAddTaskVisibilityThursday("hidden");
            } else if (hoverEffectsSaturday === true) {
            setHoverEffectsSaturday(false);
            setJustifyContentSaturday("center");
            setFontsizeInitialSaturday("25px");
            setColorInitialSaturday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSaturday("0px");
            setWeekdayWidthSaturday("auto");
            setWeekdayContentWidthSaturday("60px");
            setDayNoteInputHeightSaturday("0px");
            setDayNoteInputWidthSaturday("0px");
            setDayNoteInputVisibilitySaturday("hidden");
            setDayNoteInputPointerEventsSaturday("none");
            setDayNoteInputFontSizeSaturday("0px");
            setDayNoteInputPaddingSaturday("0px");
            setAddButtonWidthSaturday("0px");
            setAddButtonHeightSaturday("0px");
            setAddButtonFontSizeSaturday("0px");
            setAddButtonPaddingSaturday("0px");
            setAddButtonVisibilitySaturday("hidden");
            setExpandSaturdayWidth("0px");
            setTaskTitleWidthSaturday("0%");
            setTaskTitleHeightSaturday("0");
            setTaskTitleOpacitySaturday(0);
            setAddTaskInputWidthSaturday("0%");
            setAddTaskInputHeightSaturday("0px");
            setAddTaskInputVisibilitySaturday("hidden");
            setAddTaskInputPaddingSaturday("0px");
            setAddTaskInputPointerEventsSaturday("node");
            setAddTaskInputFontSizeSaturday("none");
            setAddTaskButtonWidthSaturday("0px");
            setAddTaskButtonHeightSaturday("0px");
            setAddTaskButtonMarginLeftSaturday("0px");
            setAddTaskButtonPaddingSaturday("0px");
            setAddTaskFontSizeSaturday("0px");
            setAddTaskVisibilitySaturday("hidden");
            } else if (hoverEffectsSunday === true) {
            setHoverEffectsSunday(false);
            setJustifyContentSunday("center");
            setFontsizeInitialSunday("25px");
            setColorInitialSunday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSunday("0px");
            setWeekdayWidthSunday("auto");
            setWeekdayContentWidthSunday("60px");
            setDayNoteInputHeightSunday("0px");
            setDayNoteInputWidthSunday("0px");
            setDayNoteInputVisibilitySunday("hidden");
            setDayNoteInputPointerEventsSunday("none");
            setDayNoteInputFontSizeSunday("0px");
            setDayNoteInputPaddingSunday("0px");
            setAddButtonWidthSunday("0px");
            setAddButtonHeightSunday("0px");
            setAddButtonFontSizeSunday("0px");
            setAddButtonPaddingSunday("0px");
            setAddButtonVisibilitySunday("hidden");
            setExpandSundayWidth("0px");
            setTaskTitleWidthSunday("0%");
            setTaskTitleHeightSunday("0");
            setTaskTitleOpacitySunday(0);
            setAddTaskInputWidthSunday("0%");
            setAddTaskInputHeightSunday("0px");
            setAddTaskInputVisibilitySunday("hidden");
            setAddTaskInputPaddingSunday("0px");
            setAddTaskInputPointerEventsSunday("node");
            setAddTaskInputFontSizeSunday("none");
            setAddTaskButtonWidthSunday("0px");
            setAddTaskButtonHeightSunday("0px");
            setAddTaskButtonMarginLeftSunday("0px");
            setAddTaskButtonPaddingSunday("0px");
            setAddTaskFontSizeSunday("0px");
            setAddTaskVisibilitySunday("hidden");
            }
        } else {
        setHoverEffectsFriday(false);
        setJustifyContentFriday("center");
        setFontsizeInitialFriday("25px");
        setColorInitialFriday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationFriday("0px");
        setWeekdayWidthFriday("auto");
        setWeekdayContentWidthFriday("60px");
        setDayNoteInputHeightFriday("0px");
        setDayNoteInputWidthFriday("0px");
        setDayNoteInputVisibilityFriday("hidden");
        setDayNoteInputPointerEventsFriday("none");
        setDayNoteInputFontSizeFriday("0px");
        setDayNoteInputPaddingFriday("0px");
        setAddButtonWidthFriday("0px");
        setAddButtonHeightFriday("0px");
        setAddButtonFontSizeFriday("0px");
        setAddButtonPaddingFriday("0px");
        setAddButtonVisibilityFriday("hidden");
        setExpandFridayWidth("0px");
        setTaskTitleWidthFriday("0%");
        setTaskTitleHeightFriday("0");
        setTaskTitleOpacityFriday(0);
        setAddTaskInputWidthFriday("0%");
        setAddTaskInputHeightFriday("0px");
        setAddTaskInputVisibilityFriday("hidden");
        setAddTaskInputPaddingFriday("0px");
        setAddTaskInputPointerEventsFriday("node");
        setAddTaskInputFontSizeFriday("none");
        setAddTaskButtonWidthFriday("0px");
        setAddTaskButtonHeightFriday("0px");
        setAddTaskButtonMarginLeftFriday("0px");
        setAddTaskButtonPaddingFriday("0px");
        setAddTaskFontSizeFriday("0px");
        setAddTaskVisibilityFriday("hidden");
        }
    }


    const [ hoverEffectsSaturday, setHoverEffectsSaturday ] = useState(false);
    const [ expandSaturdayWidth, setExpandSaturdayWidth ] = useState("0px");
    const [ justifyContentSaturday, setJustifyContentSaturday ]= useState("center");
    const [ fontsizeInitialSaturday, setFontsizeInitialSaturday ] = useState("25px");
    const [ colorInitialSaturday, setColorInitialSaturday ] = useState("rgba(223, 223, 223, 0.6)");
    const [ fontsizeContinuationSaturday, setFontsizeContinuationSaturday ] = useState("0px");
    const [ weekdayWidthSaturday, setWeekdayWidthSaturday ] = useState("auto");
    const [ weekdayContentWidthSaturday, setWeekdayContentWidthSaturday ] = useState("60px");
    const [ dayNoteInputHeightSaturday, setDayNoteInputHeightSaturday ] = useState("0px");
    const [ dayNoteInputWidthSaturday, setDayNoteInputWidthSaturday ] = useState("0px");
    const [ dayNoteInputVisibilitySaturday, setDayNoteInputVisibilitySaturday ] = useState("hidden");
    const [ dayNoteInputPointerEventsSaturday, setDayNoteInputPointerEventsSaturday ] = useState("none");
    const [ dayNoteInputFontSizeSaturday, setDayNoteInputFontSizeSaturday ] = useState("0px");
    const [ dayNoteInputPaddingSaturday, setDayNoteInputPaddingSaturday ] = useState("0px");
    const [ addButtonWidthSaturday, setAddButtonWidthSaturday ] = useState("0px");
    const [ addButtonHeightSaturday, setAddButtonHeightSaturday ] = useState("0px");
    const [ addButtonFontSizeSaturday, setAddButtonFontSizeSaturday ] = useState("0px");
    const [ addButtonPaddingSaturday, setAddButtonPaddingSaturday ] = useState("0px");
    const [ addButtonVisibilitySaturday, setAddButtonVisibilitySaturday ] = useState("hidden");
    const [ taskTitleWidthSaturday, setTaskTitleWidthSaturday ] = useState("0%");
    const [ taskTitleHeightSaturday, setTaskTitleHeightSaturday ] = useState("0");
    const [ taskTitleOpacitySaturday, setTaskTitleOpacitySaturday ] = useState(0);
    const [ addTaskInputWidthSaturday, setAddTaskInputWidthSaturday ] = useState("0%");
    const [ addTaskInputHeightSaturday, setAddTaskInputHeightSaturday ] = useState("0");
    const [ addTaskInputVisibilitySaturday, setAddTaskInputVisibilitySaturday ] = useState("hidden");
    const [ addTaskInputPaddingSaturday, setAddTaskInputPaddingSaturday ] = useState("0px");
    const [ addTaskInputPointerEventsSaturday, setAddTaskInputPointerEventsSaturday ] = useState("none");
    const [ addTaskInputFontSizeSaturday, setAddTaskInputFontSizeSaturday ] = useState("none");
    const [ addTaskButtonWidthSaturday, setAddTaskButtonWidthSaturday ] = useState("0px");
    const [ addTaskButtonHeightSaturday, setAddTaskButtonHeightSaturday ] = useState("0px");
    const [ addTaskButtonMarginLeftSaturday, setAddTaskButtonMarginLeftSaturday ] = useState("0px");
    const [ addTaskButtonPaddingSaturday, setAddTaskButtonPaddingSaturday ] = useState("0px");
    const [ addTaskFontSizeSaturday, setAddTaskFontSizeSaturday ] = useState("0px");
    const [ addTaskVisibilitySaturday, setAddTaskVisibilitySaturday ] = useState("hidden");

    function expandSaturday() {
        if (hoverEffectsSaturday === false) {
        setHoverEffectsSaturday(true);
        setJustifyContentSaturday("space-between");
        setFontsizeInitialSaturday("40px");
        setColorInitialSaturday("rgba(54, 40, 255, 0.6)");
        setFontsizeContinuationSaturday("20px");
        setWeekdayWidthSaturday("40%");
        setWeekdayContentWidthSaturday("100%");
        setDayNoteInputHeightSaturday("26px");
        setDayNoteInputWidthSaturday("180px");
        setDayNoteInputVisibilitySaturday("visible");
        setDayNoteInputPointerEventsSaturday("auto");
        setDayNoteInputFontSizeSaturday("15px");
        setDayNoteInputPaddingSaturday("0px");
        setAddButtonWidthSaturday("60px");
        setAddButtonHeightSaturday("15px");
        setAddButtonFontSizeSaturday("17px");
        setAddButtonPaddingSaturday("6px");
        setAddButtonVisibilitySaturday("visible");
        setExpandSaturdayWidth("30px");
        setTaskTitleWidthSaturday("100%");
        setTaskTitleHeightSaturday("auto");
        setTaskTitleOpacitySaturday(0.6);
        setAddTaskInputWidthSaturday("75%");
        setAddTaskInputHeightSaturday("15px");
        setAddTaskInputVisibilitySaturday("visible");
        setAddTaskInputPaddingSaturday("6px");
        setAddTaskInputPointerEventsSaturday("auto");
        setAddTaskInputFontSizeSaturday("15px");
        setAddTaskButtonWidthSaturday("10%");
        setAddTaskButtonHeightSaturday("15px");
        setAddTaskButtonMarginLeftSaturday("3px");
        setAddTaskButtonPaddingSaturday("6px");
        setAddTaskFontSizeSaturday("17px");
        setAddTaskVisibilitySaturday("visible");





        if (hoverEffectsMonday === true) {
            setHoverEffectsMonday(false);
            setJustifyContentMonday("center");
            setFontsizeInitialMonday("25px");
            setColorInitialMonday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationMonday("0px");
            setWeekdayWidthMonday("auto");
            setWeekdayContentWidthMonday("60px");
            setDayNoteInputHeightMonday("0px");
            setDayNoteInputWidthMonday("0px");
            setDayNoteInputVisibilityMonday("hidden");
            setDayNoteInputPointerEventsMonday("none");
            setDayNoteInputFontSizeMonday("0px");
            setDayNoteInputPaddingMonday("0px");
            setAddButtonWidthMonday("0px");
            setAddButtonHeightMonday("0px");
            setAddButtonFontSizeMonday("0px");
            setAddButtonPaddingMonday("0px");
            setAddButtonVisibilityMonday("hidden");
            setExpandMondayWidth("0px");
            setTaskTitleWidthMonday("0%");
            setTaskTitleHeightMonday("0");
            setTaskTitleOpacityMonday(0);
            setAddTaskInputWidthMonday("0%");
            setAddTaskInputHeightMonday("0px");
            setAddTaskInputVisibilityMonday("hidden");
            setAddTaskInputPaddingMonday("0px");
            setAddTaskInputPointerEventsMonday("node");
            setAddTaskInputFontSizeMonday("none");
            setAddTaskButtonWidthMonday("0px");
            setAddTaskButtonHeightMonday("0px");
            setAddTaskButtonMarginLeftMonday("0px");
            setAddTaskButtonPaddingMonday("0px");
            setAddTaskFontSizeMonday("0px");
            setAddTaskVisibilityMonday("hidden");
            } else if (hoverEffectsTuesday === true) {
            setHoverEffectsTuesday(false);
            setJustifyContentTuesday("center");
            setFontsizeInitialTuesday("25px");
            setColorInitialTuesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationTuesday("0px");
            setWeekdayWidthTuesday("auto");
            setWeekdayContentWidthTuesday("60px");
            setDayNoteInputHeightTuesday("0px");
            setDayNoteInputWidthTuesday("0px");
            setDayNoteInputVisibilityTuesday("hidden");
            setDayNoteInputPointerEventsTuesday("none");
            setDayNoteInputFontSizeTuesday("0px");
            setDayNoteInputPaddingTuesday("0px");
            setAddButtonWidthTuesday("0px");
            setAddButtonHeightTuesday("0px");
            setAddButtonFontSizeTuesday("0px");
            setAddButtonPaddingTuesday("0px");
            setAddButtonVisibilityTuesday("hidden");
            setExpandTuesdayWidth("0px");
            setTaskTitleWidthTuesday("0%");
            setTaskTitleHeightTuesday("0");
            setTaskTitleOpacityTuesday(0);
            setAddTaskInputWidthTuesday("0%");
            setAddTaskInputHeightTuesday("0px");
            setAddTaskInputVisibilityTuesday("hidden");
            setAddTaskInputPaddingTuesday("0px");
            setAddTaskInputPointerEventsTuesday("node");
            setAddTaskInputFontSizeTuesday("none");
            setAddTaskButtonWidthTuesday("0px");
            setAddTaskButtonHeightTuesday("0px");
            setAddTaskButtonMarginLeftTuesday("0px");
            setAddTaskButtonPaddingTuesday("0px");
            setAddTaskFontSizeTuesday("0px");
            setAddTaskVisibilityTuesday("hidden");
            } else if (hoverEffectsWednesday) {
            setHoverEffectsWednesday(false);
            setJustifyContentWednesday("center");
            setFontsizeInitialWednesday("25px");
            setColorInitialWednesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationWednesday("0px");
            setWeekdayWidthWednesday("auto");
            setWeekdayContentWidthWednesday("60px");
            setDayNoteInputHeightWednesday("0px");
            setDayNoteInputWidthWednesday("0px");
            setDayNoteInputVisibilityWednesday("hidden");
            setDayNoteInputPointerEventsWednesday("none");
            setDayNoteInputFontSizeWednesday("0px");
            setDayNoteInputPaddingWednesday("0px");
            setAddButtonWidthWednesday("0px");
            setAddButtonHeightWednesday("0px");
            setAddButtonFontSizeWednesday("0px");
            setAddButtonPaddingWednesday("0px");
            setAddButtonVisibilityWednesday("hidden");
            setExpandWednesdayWidth("0px");
            setTaskTitleWidthWednesday("0%");
            setTaskTitleHeightWednesday("0");
            setTaskTitleOpacityWednesday(0);
            setAddTaskInputWidthWednesday("0%");
            setAddTaskInputHeightWednesday("0px");
            setAddTaskInputVisibilityWednesday("hidden");
            setAddTaskInputPaddingWednesday("0px");
            setAddTaskInputPointerEventsWednesday("node");
            setAddTaskInputFontSizeWednesday("none");
            setAddTaskButtonWidthWednesday("0px");
            setAddTaskButtonHeightWednesday("0px");
            setAddTaskButtonMarginLeftWednesday("0px");
            setAddTaskButtonPaddingWednesday("0px");
            setAddTaskFontSizeWednesday("0px");
            setAddTaskVisibilityWednesday("hidden");
            } else if (hoverEffectsThursday === true) {
            setHoverEffectsThursday(false);
            setJustifyContentThursday("center");
            setFontsizeInitialThursday("25px");
            setColorInitialThursday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationThursday("0px");
            setWeekdayWidthThursday("auto");
            setWeekdayContentWidthThursday("60px");
            setDayNoteInputHeightThursday("0px");
            setDayNoteInputWidthThursday("0px");
            setDayNoteInputVisibilityThursday("hidden");
            setDayNoteInputPointerEventsThursday("none");
            setDayNoteInputFontSizeThursday("0px");
            setDayNoteInputPaddingThursday("0px");
            setAddButtonWidthThursday("0px");
            setAddButtonHeightThursday("0px");
            setAddButtonFontSizeThursday("0px");
            setAddButtonPaddingThursday("0px");
            setAddButtonVisibilityThursday("hidden");
            setExpandThursdayWidth("0px");
            setTaskTitleWidthThursday("0%");
            setTaskTitleHeightThursday("0");
            setTaskTitleOpacityThursday(0);
            setAddTaskInputWidthThursday("0%");
            setAddTaskInputHeightThursday("0px");
            setAddTaskInputVisibilityThursday("hidden");
            setAddTaskInputPaddingThursday("0px");
            setAddTaskInputPointerEventsThursday("node");
            setAddTaskInputFontSizeThursday("none");
            setAddTaskButtonWidthThursday("0px");
            setAddTaskButtonHeightThursday("0px");
            setAddTaskButtonMarginLeftThursday("0px");
            setAddTaskButtonPaddingThursday("0px");
            setAddTaskFontSizeThursday("0px");
            setAddTaskVisibilityThursday("hidden");
            } else if (hoverEffectsFriday) {
            setHoverEffectsFriday(false);
            setJustifyContentFriday("center");
            setFontsizeInitialFriday("25px");
            setColorInitialFriday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationFriday("0px");
            setWeekdayWidthFriday("auto");
            setWeekdayContentWidthFriday("60px");
            setDayNoteInputHeightFriday("0px");
            setDayNoteInputWidthFriday("0px");
            setDayNoteInputVisibilityFriday("hidden");
            setDayNoteInputPointerEventsFriday("none");
            setDayNoteInputFontSizeFriday("0px");
            setDayNoteInputPaddingFriday("0px");
            setAddButtonWidthFriday("0px");
            setAddButtonHeightFriday("0px");
            setAddButtonFontSizeFriday("0px");
            setAddButtonPaddingFriday("0px");
            setAddButtonVisibilityFriday("hidden");
            setExpandFridayWidth("0px");
            setTaskTitleWidthFriday("0%");
            setTaskTitleHeightFriday("0");
            setTaskTitleOpacityFriday(0);
            setAddTaskInputWidthFriday("0%");
            setAddTaskInputHeightFriday("0px");
            setAddTaskInputVisibilityFriday("hidden");
            setAddTaskInputPaddingFriday("0px");
            setAddTaskInputPointerEventsFriday("node");
            setAddTaskInputFontSizeFriday("none");
            setAddTaskButtonWidthFriday("0px");
            setAddTaskButtonHeightFriday("0px");
            setAddTaskButtonMarginLeftFriday("0px");
            setAddTaskButtonPaddingFriday("0px");
            setAddTaskFontSizeFriday("0px");
            setAddTaskVisibilityFriday("hidden");
            } else if (hoverEffectsSunday === true) {
            setHoverEffectsSunday(false);
            setJustifyContentSunday("center");
            setFontsizeInitialSunday("25px");
            setColorInitialSunday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSunday("0px");
            setWeekdayWidthSunday("auto");
            setWeekdayContentWidthSunday("60px");
            setDayNoteInputHeightSunday("0px");
            setDayNoteInputWidthSunday("0px");
            setDayNoteInputVisibilitySunday("hidden");
            setDayNoteInputPointerEventsSunday("none");
            setDayNoteInputFontSizeSunday("0px");
            setDayNoteInputPaddingSunday("0px");
            setAddButtonWidthSunday("0px");
            setAddButtonHeightSunday("0px");
            setAddButtonFontSizeSunday("0px");
            setAddButtonPaddingSunday("0px");
            setAddButtonVisibilitySunday("hidden");
            setExpandSundayWidth("0px");
            setTaskTitleWidthSunday("0%");
            setTaskTitleHeightSunday("0");
            setTaskTitleOpacitySunday(0);
            setAddTaskInputWidthSunday("0%");
            setAddTaskInputHeightSunday("0px");
            setAddTaskInputVisibilitySunday("hidden");
            setAddTaskInputPaddingSunday("0px");
            setAddTaskInputPointerEventsSunday("node");
            setAddTaskInputFontSizeSunday("none");
            setAddTaskButtonWidthSunday("0px");
            setAddTaskButtonHeightSunday("0px");
            setAddTaskButtonMarginLeftSunday("0px");
            setAddTaskButtonPaddingSunday("0px");
            setAddTaskFontSizeSunday("0px");
            setAddTaskVisibilitySunday("hidden");
            }
        } else {
        setHoverEffectsSaturday(false);
        setJustifyContentSaturday("center");
        setFontsizeInitialSaturday("25px");
        setColorInitialSaturday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationSaturday("0px");
        setWeekdayWidthSaturday("auto");
        setWeekdayContentWidthSaturday("60px");
        setDayNoteInputHeightSaturday("0px");
        setDayNoteInputWidthSaturday("0px");
        setDayNoteInputVisibilitySaturday("hidden");
        setDayNoteInputPointerEventsSaturday("none");
        setDayNoteInputFontSizeSaturday("0px");
        setDayNoteInputPaddingSaturday("0px");
        setAddButtonWidthSaturday("0px");
        setAddButtonHeightSaturday("0px");
        setAddButtonFontSizeSaturday("0px");
        setAddButtonPaddingSaturday("0px");
        setAddButtonVisibilitySaturday("hidden");
        setExpandSaturdayWidth("0px");
        setTaskTitleWidthSaturday("0%");
        setTaskTitleHeightSaturday("0");
        setTaskTitleOpacitySaturday(0);
        setAddTaskInputWidthSaturday("0%");
        setAddTaskInputHeightSaturday("0px");
        setAddTaskInputVisibilitySaturday("hidden");
        setAddTaskInputPaddingSaturday("0px");
        setAddTaskInputPointerEventsSaturday("node");
        setAddTaskInputFontSizeSaturday("none");
        setAddTaskButtonWidthSaturday("0px");
        setAddTaskButtonHeightSaturday("0px");
        setAddTaskButtonMarginLeftSaturday("0px");
        setAddTaskButtonPaddingSaturday("0px");
        setAddTaskFontSizeSaturday("0px");
        setAddTaskVisibilitySaturday("hidden");
        }
    }


    const [ hoverEffectsSunday, setHoverEffectsSunday ] = useState(false);
    const [ expandSundayWidth, setExpandSundayWidth ] = useState("0px");
    const [ justifyContentSunday, setJustifyContentSunday ]= useState("center");
    const [ fontsizeInitialSunday, setFontsizeInitialSunday ] = useState("25px");
    const [ colorInitialSunday, setColorInitialSunday ] = useState("rgba(223, 223, 223, 0.6)");
    const [ fontsizeContinuationSunday, setFontsizeContinuationSunday ] = useState("0px");
    const [ weekdayWidthSunday, setWeekdayWidthSunday ] = useState("auto");
    const [ weekdayContentWidthSunday, setWeekdayContentWidthSunday ] = useState("60px");
    const [ dayNoteInputHeightSunday, setDayNoteInputHeightSunday ] = useState("0px");
    const [ dayNoteInputWidthSunday, setDayNoteInputWidthSunday ] = useState("0px");
    const [ dayNoteInputVisibilitySunday, setDayNoteInputVisibilitySunday ] = useState("hidden");
    const [ dayNoteInputPointerEventsSunday, setDayNoteInputPointerEventsSunday ] = useState("none");
    const [ dayNoteInputFontSizeSunday, setDayNoteInputFontSizeSunday ] = useState("0px");
    const [ dayNoteInputPaddingSunday, setDayNoteInputPaddingSunday ] = useState("0px");
    const [ addButtonWidthSunday, setAddButtonWidthSunday ] = useState("0px");
    const [ addButtonHeightSunday, setAddButtonHeightSunday ] = useState("0px");
    const [ addButtonFontSizeSunday, setAddButtonFontSizeSunday ] = useState("0px");
    const [ addButtonPaddingSunday, setAddButtonPaddingSunday ] = useState("0px");
    const [ addButtonVisibilitySunday, setAddButtonVisibilitySunday ] = useState("hidden");
    const [ taskTitleWidthSunday, setTaskTitleWidthSunday ] = useState("0%");
    const [ taskTitleHeightSunday, setTaskTitleHeightSunday ] = useState("0");
    const [ taskTitleOpacitySunday, setTaskTitleOpacitySunday ] = useState(0);
    const [ addTaskInputWidthSunday, setAddTaskInputWidthSunday ] = useState("0%");
    const [ addTaskInputHeightSunday, setAddTaskInputHeightSunday ] = useState("0");
    const [ addTaskInputVisibilitySunday, setAddTaskInputVisibilitySunday ] = useState("hidden");
    const [ addTaskInputPaddingSunday, setAddTaskInputPaddingSunday ] = useState("0px");
    const [ addTaskInputPointerEventsSunday, setAddTaskInputPointerEventsSunday ] = useState("none");
    const [ addTaskInputFontSizeSunday, setAddTaskInputFontSizeSunday ] = useState("none");
    const [ addTaskButtonWidthSunday, setAddTaskButtonWidthSunday ] = useState("0px");
    const [ addTaskButtonHeightSunday, setAddTaskButtonHeightSunday ] = useState("0px");
    const [ addTaskButtonMarginLeftSunday, setAddTaskButtonMarginLeftSunday ] = useState("0px");
    const [ addTaskButtonPaddingSunday, setAddTaskButtonPaddingSunday ] = useState("0px");
    const [ addTaskFontSizeSunday, setAddTaskFontSizeSunday ] = useState("0px");
    const [ addTaskVisibilitySunday, setAddTaskVisibilitySunday ] = useState("hidden");

    function expandSunday() {
        if (hoverEffectsSunday === false) {
        setHoverEffectsSunday(true);
        setJustifyContentSunday("space-between");
        setFontsizeInitialSunday("40px");
        setColorInitialSunday("rgba(54, 40, 255, 0.6)");
        setFontsizeContinuationSunday("20px");
        setWeekdayWidthSunday("40%");
        setWeekdayContentWidthSunday("100%");
        setDayNoteInputHeightSunday("26px");
        setDayNoteInputWidthSunday("180px");
        setDayNoteInputVisibilitySunday("visible");
        setDayNoteInputPointerEventsSunday("auto");
        setDayNoteInputFontSizeSunday("15px");
        setDayNoteInputPaddingSunday("0px");
        setAddButtonWidthSunday("60px");
        setAddButtonHeightSunday("15px");
        setAddButtonFontSizeSunday("17px");
        setAddButtonPaddingSunday("6px");
        setAddButtonVisibilitySunday("visible");
        setExpandSundayWidth("30px");
        setTaskTitleWidthSunday("100%");
        setTaskTitleHeightSunday("auto");
        setTaskTitleOpacitySunday(0.6);
        setAddTaskInputWidthSunday("75%");
        setAddTaskInputHeightSunday("15px");
        setAddTaskInputVisibilitySunday("visible");
        setAddTaskInputPaddingSunday("6px");
        setAddTaskInputPointerEventsSunday("auto");
        setAddTaskInputFontSizeSunday("15px");
        setAddTaskButtonWidthSunday("10%");
        setAddTaskButtonHeightSunday("15px");
        setAddTaskButtonMarginLeftSunday("3px");
        setAddTaskButtonPaddingSunday("6px");
        setAddTaskFontSizeSunday("17px");
        setAddTaskVisibilitySunday("visible");





        if (hoverEffectsMonday === true) {
            setHoverEffectsMonday(false);
            setJustifyContentMonday("center");
            setFontsizeInitialMonday("25px");
            setColorInitialMonday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationMonday("0px");
            setWeekdayWidthMonday("auto");
            setWeekdayContentWidthMonday("60px");
            setDayNoteInputHeightMonday("0px");
            setDayNoteInputWidthMonday("0px");
            setDayNoteInputVisibilityMonday("hidden");
            setDayNoteInputPointerEventsMonday("none");
            setDayNoteInputFontSizeMonday("0px");
            setDayNoteInputPaddingMonday("0px");
            setAddButtonWidthMonday("0px");
            setAddButtonHeightMonday("0px");
            setAddButtonFontSizeMonday("0px");
            setAddButtonPaddingMonday("0px");
            setAddButtonVisibilityMonday("hidden");
            setExpandMondayWidth("0px");
            setTaskTitleWidthMonday("0%");
            setTaskTitleHeightMonday("0");
            setTaskTitleOpacityMonday(0);
            setAddTaskInputWidthMonday("0%");
            setAddTaskInputHeightMonday("0px");
            setAddTaskInputVisibilityMonday("hidden");
            setAddTaskInputPaddingMonday("0px");
            setAddTaskInputPointerEventsMonday("node");
            setAddTaskInputFontSizeMonday("none");
            setAddTaskButtonWidthMonday("0px");
            setAddTaskButtonHeightMonday("0px");
            setAddTaskButtonMarginLeftMonday("0px");
            setAddTaskButtonPaddingMonday("0px");
            setAddTaskFontSizeMonday("0px");
            setAddTaskVisibilityMonday("hidden");
            } else if (hoverEffectsTuesday === true) {
            setHoverEffectsTuesday(false);
            setJustifyContentTuesday("center");
            setFontsizeInitialTuesday("25px");
            setColorInitialTuesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationTuesday("0px");
            setWeekdayWidthTuesday("auto");
            setWeekdayContentWidthTuesday("60px");
            setDayNoteInputHeightTuesday("0px");
            setDayNoteInputWidthTuesday("0px");
            setDayNoteInputVisibilityTuesday("hidden");
            setDayNoteInputPointerEventsTuesday("none");
            setDayNoteInputFontSizeTuesday("0px");
            setDayNoteInputPaddingTuesday("0px");
            setAddButtonWidthTuesday("0px");
            setAddButtonHeightTuesday("0px");
            setAddButtonFontSizeTuesday("0px");
            setAddButtonPaddingTuesday("0px");
            setAddButtonVisibilityTuesday("hidden");
            setExpandTuesdayWidth("0px");
            setTaskTitleWidthTuesday("0%");
            setTaskTitleHeightTuesday("0");
            setTaskTitleOpacityTuesday(0);
            setAddTaskInputWidthTuesday("0%");
            setAddTaskInputHeightTuesday("0px");
            setAddTaskInputVisibilityTuesday("hidden");
            setAddTaskInputPaddingTuesday("0px");
            setAddTaskInputPointerEventsTuesday("node");
            setAddTaskInputFontSizeTuesday("none");
            setAddTaskButtonWidthTuesday("0px");
            setAddTaskButtonHeightTuesday("0px");
            setAddTaskButtonMarginLeftTuesday("0px");
            setAddTaskButtonPaddingTuesday("0px");
            setAddTaskFontSizeTuesday("0px");
            setAddTaskVisibilityTuesday("hidden");
            } else if (hoverEffectsWednesday) {
            setHoverEffectsWednesday(false);
            setJustifyContentWednesday("center");
            setFontsizeInitialWednesday("25px");
            setColorInitialWednesday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationWednesday("0px");
            setWeekdayWidthWednesday("auto");
            setWeekdayContentWidthWednesday("60px");
            setDayNoteInputHeightWednesday("0px");
            setDayNoteInputWidthWednesday("0px");
            setDayNoteInputVisibilityWednesday("hidden");
            setDayNoteInputPointerEventsWednesday("none");
            setDayNoteInputFontSizeWednesday("0px");
            setDayNoteInputPaddingWednesday("0px");
            setAddButtonWidthWednesday("0px");
            setAddButtonHeightWednesday("0px");
            setAddButtonFontSizeWednesday("0px");
            setAddButtonPaddingWednesday("0px");
            setAddButtonVisibilityWednesday("hidden");
            setExpandWednesdayWidth("0px");
            setTaskTitleWidthWednesday("0%");
            setTaskTitleHeightWednesday("0");
            setTaskTitleOpacityWednesday(0);
            setAddTaskInputWidthWednesday("0%");
            setAddTaskInputHeightWednesday("0px");
            setAddTaskInputVisibilityWednesday("hidden");
            setAddTaskInputPaddingWednesday("0px");
            setAddTaskInputPointerEventsWednesday("node");
            setAddTaskInputFontSizeWednesday("none");
            setAddTaskButtonWidthWednesday("0px");
            setAddTaskButtonHeightWednesday("0px");
            setAddTaskButtonMarginLeftWednesday("0px");
            setAddTaskButtonPaddingWednesday("0px");
            setAddTaskFontSizeWednesday("0px");
            setAddTaskVisibilityWednesday("hidden");
            } else if (hoverEffectsThursday === true) {
            setHoverEffectsThursday(false);
            setJustifyContentThursday("center");
            setFontsizeInitialThursday("25px");
            setColorInitialThursday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationThursday("0px");
            setWeekdayWidthThursday("auto");
            setWeekdayContentWidthThursday("60px");
            setDayNoteInputHeightThursday("0px");
            setDayNoteInputWidthThursday("0px");
            setDayNoteInputVisibilityThursday("hidden");
            setDayNoteInputPointerEventsThursday("none");
            setDayNoteInputFontSizeThursday("0px");
            setDayNoteInputPaddingThursday("0px");
            setAddButtonWidthThursday("0px");
            setAddButtonHeightThursday("0px");
            setAddButtonFontSizeThursday("0px");
            setAddButtonPaddingThursday("0px");
            setAddButtonVisibilityThursday("hidden");
            setExpandThursdayWidth("0px");
            setTaskTitleWidthThursday("0%");
            setTaskTitleHeightThursday("0");
            setTaskTitleOpacityThursday(0);
            setAddTaskInputWidthThursday("0%");
            setAddTaskInputHeightThursday("0px");
            setAddTaskInputVisibilityThursday("hidden");
            setAddTaskInputPaddingThursday("0px");
            setAddTaskInputPointerEventsThursday("node");
            setAddTaskInputFontSizeThursday("none");
            setAddTaskButtonWidthThursday("0px");
            setAddTaskButtonHeightThursday("0px");
            setAddTaskButtonMarginLeftThursday("0px");
            setAddTaskButtonPaddingThursday("0px");
            setAddTaskFontSizeThursday("0px");
            setAddTaskVisibilityThursday("hidden");
            } else if (hoverEffectsFriday) {
            setHoverEffectsFriday(false);
            setJustifyContentFriday("center");
            setFontsizeInitialFriday("25px");
            setColorInitialFriday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationFriday("0px");
            setWeekdayWidthFriday("auto");
            setWeekdayContentWidthFriday("60px");
            setDayNoteInputHeightFriday("0px");
            setDayNoteInputWidthFriday("0px");
            setDayNoteInputVisibilityFriday("hidden");
            setDayNoteInputPointerEventsFriday("none");
            setDayNoteInputFontSizeFriday("0px");
            setDayNoteInputPaddingFriday("0px");
            setAddButtonWidthFriday("0px");
            setAddButtonHeightFriday("0px");
            setAddButtonFontSizeFriday("0px");
            setAddButtonPaddingFriday("0px");
            setAddButtonVisibilityFriday("hidden");
            setExpandFridayWidth("0px");
            setTaskTitleWidthFriday("0%");
            setTaskTitleHeightFriday("0");
            setTaskTitleOpacityFriday(0);
            setAddTaskInputWidthFriday("0%");
            setAddTaskInputHeightFriday("0px");
            setAddTaskInputVisibilityFriday("hidden");
            setAddTaskInputPaddingFriday("0px");
            setAddTaskInputPointerEventsFriday("node");
            setAddTaskInputFontSizeFriday("none");
            setAddTaskButtonWidthFriday("0px");
            setAddTaskButtonHeightFriday("0px");
            setAddTaskButtonMarginLeftFriday("0px");
            setAddTaskButtonPaddingFriday("0px");
            setAddTaskFontSizeFriday("0px");
            setAddTaskVisibilityFriday("hidden");
            } else if (hoverEffectsSaturday === true) {
            setHoverEffectsSaturday(false);
            setJustifyContentSaturday("center");
            setFontsizeInitialSaturday("25px");
            setColorInitialSaturday("rgba(223, 223, 223, 0.6)");
            setFontsizeContinuationSaturday("0px");
            setWeekdayWidthSaturday("auto");
            setWeekdayContentWidthSaturday("60px");
            setDayNoteInputHeightSaturday("0px");
            setDayNoteInputWidthSaturday("0px");
            setDayNoteInputVisibilitySaturday("hidden");
            setDayNoteInputPointerEventsSaturday("none");
            setDayNoteInputFontSizeSaturday("0px");
            setDayNoteInputPaddingSaturday("0px");
            setAddButtonWidthSaturday("0px");
            setAddButtonHeightSaturday("0px");
            setAddButtonFontSizeSaturday("0px");
            setAddButtonPaddingSaturday("0px");
            setAddButtonVisibilitySaturday("hidden");
            setExpandSaturdayWidth("0px");
            setTaskTitleWidthSaturday("0%");
            setTaskTitleHeightSaturday("0");
            setTaskTitleOpacitySaturday(0);
            setAddTaskInputWidthSaturday("0%");
            setAddTaskInputHeightSaturday("0px");
            setAddTaskInputVisibilitySaturday("hidden");
            setAddTaskInputPaddingSaturday("0px");
            setAddTaskInputPointerEventsSaturday("node");
            setAddTaskInputFontSizeSaturday("none");
            setAddTaskButtonWidthSaturday("0px");
            setAddTaskButtonHeightSaturday("0px");
            setAddTaskButtonMarginLeftSaturday("0px");
            setAddTaskButtonPaddingSaturday("0px");
            setAddTaskFontSizeSaturday("0px");
            setAddTaskVisibilitySaturday("hidden");
            }
        } else {
        setHoverEffectsSunday(false);
        setJustifyContentSunday("center");
        setFontsizeInitialSunday("25px");
        setColorInitialSunday("rgba(223, 223, 223, 0.6)");
        setFontsizeContinuationSunday("0px");
        setWeekdayWidthSunday("auto");
        setWeekdayContentWidthSunday("60px");
        setDayNoteInputHeightSunday("0px");
        setDayNoteInputWidthSunday("0px");
        setDayNoteInputVisibilitySunday("hidden");
        setDayNoteInputPointerEventsSunday("none");
        setDayNoteInputFontSizeSunday("0px");
        setDayNoteInputPaddingSunday("0px");
        setAddButtonWidthSunday("0px");
        setAddButtonHeightSunday("0px");
        setAddButtonFontSizeSunday("0px");
        setAddButtonPaddingSunday("0px");
        setAddButtonVisibilitySunday("hidden");
        setExpandSundayWidth("0px");
        setTaskTitleWidthSunday("0%");
        setTaskTitleHeightSunday("0");
        setTaskTitleOpacitySunday(0);
        setAddTaskInputWidthSunday("0%");
        setAddTaskInputHeightSunday("0px");
        setAddTaskInputVisibilitySunday("hidden");
        setAddTaskInputPaddingSunday("0px");
        setAddTaskInputPointerEventsSunday("node");
        setAddTaskInputFontSizeSunday("none");
        setAddTaskButtonWidthSunday("0px");
        setAddTaskButtonHeightSunday("0px");
        setAddTaskButtonMarginLeftSunday("0px");
        setAddTaskButtonPaddingSunday("0px");
        setAddTaskFontSizeSunday("0px");
        setAddTaskVisibilitySunday("hidden");
        }
    }

    
    
    useEffect(() => {
        if (weekday === 0 || weekday === 7) {
            expandThursday()
        } else if (weekday === 1) {
            expandFriday()
        } else if (weekday === 2) {
            expandSaturday()
        } else if (weekday === 3) {
            expandSunday()
        } else if (weekday === 4) {
            expandMonday()
        } else if (weekday === 5) {
            expandTuesday()
        } else if (weekday === 6) {
            expandWednesday()
        } 
    }, [])

    //CSS


    const Body = styled.div`
    overflow-x: hidden;
    width: 100%;
    padding-bottom: 60px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 1));
    .bodycontentbox {
        background-color:  rgba(0, 0, 0, 0.60);
        padding: 10px;
        margin: 10px;
        width: 77%;
        transition: 0.25s;
        display: flex;
        flex-direction: row;
    }
    
    .bodycontentbox:hover {
        background-color: rgba(0, 0, 0, 0.50);
        transition: 0.25s;
    }
    
    .weekdayname {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    
    .daynote {
        display: flex;
        flex-direction: row;
    }
    .taskbody {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
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
    
    .addTaskForm {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        padding-bottom: 12px;
        transition: 0.25s;
    }
    
    
    .addtasktitle {
        padding-bottom: 12px;
    }
    
    .weekdayMonday {
        width: ${weekdayWidthMonday};
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        trasition: 0.1s;
    } 
    
    
    
    .weekdaycontentMonday:hover {
        background-color: rgba(0, 0, 0, 0.60);
        transition: 0.25s;
    }
    .expandweekdayMonday:hover {
        cursor: pointer;
    }
    .expandweekdayMonday {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.60);
        width: ${expandMondayWidth};
        height: 100%;
        transition: 0.25s;
        align-self: center;
    }
    .weekdayMonday:hover .expandweekdayMonday {
        width: 45px;
        transition: 0.21s;
    }
    .weekdaytopMonday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .weekdaycontentMonday {
        background-color: rgba(0, 0, 0, 0.30);
        width: ${weekdayContentWidthMonday};
        padding: 10px;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
    }
    .weekdaytopMonday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${justifyContentMonday};
    }
    .expandweekdayarrowMonday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .expandweekdayarrowMonday:hover {
        cursor:pointer
    }
    .minimizeweekdayarrowMonday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .minimizeweekdayarrowMonday:hover {
        cursor: pointer;
    }
    .weekdaycontinuationMonday {
        font-size: ${fontsizeContinuationMonday};
        transition: 0.25s;
    }
    
    .weekdayinitialMonday {
        font-size: ${fontsizeInitialMonday};
        transition: 0.25s;
        color: ${colorInitialMonday};
    }
    
    .DayNoteInputMonday {
        height: ${dayNoteInputHeightMonday};
        width: ${dayNoteInputWidthMonday};
        visibility: ${dayNoteInputVisibilityMonday};
        outline: 0;
        background-color: transparent;
        pointer-events: ${dayNoteInputPointerEventsMonday};
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        font-size: ${dayNoteInputFontSizeMonday};
        padding: ${dayNoteInputPaddingMonday};
        transition: 0.25s;
    }
    .DayNoteInputMonday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInputMonday::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputMonday::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputMonday:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInputMonday:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .addButtonMonday {
        width: ${addButtonWidthMonday};
        height: ${addButtonHeightMonday};
        font-size: ${addButtonFontSizeMonday};
        padding: ${addButtonPaddingMonday};
        visibility: ${addButtonVisibilityMonday};
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        
        cursor: pointer;
        transition: 0.25s;
    }
    }
    .addButtonMonday:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .addTaskInputMonday {
        height: 0px;
        width: 0;
        visibility: hidden;
        padding: 0px;
        pointer-events: none;
        font-size: 0px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonMonday {
        width: 0;
        height: 0px;
        margin-left: 0px;
        padding: 0px;
        font-size: 0px;
        visibility: hidden;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    
    
    
    .tasktitleMonday {
        opacity: ${taskTitleOpacityMonday};
        width: ${taskTitleWidthMonday};
        height: ${taskTitleHeightMonday};
        transition: 0.25s;
    }
    
    
    .taskMonday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    ${hoverEffectsMonday === true ? `
    .addTaskMonday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    
    .addingtaskMonday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .addingtaskMonday:hover {
        background-color: rgba(255, 255, 255, 0.07);
    }
    .addTaskInputMonday {
        height: 15px;
        width: 75%;
        visibility: visible;
        padding: 6px;
        pointer-events: auto;
        font-size: 15px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonMonday {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    .taskMonday:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
    }
    
    .taskMonday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskMonday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskMonday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .taskMonday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addingtaskMonday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addTaskMonday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskInputMonday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .taskMonday:hover .deleteTaskMonday {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTaskMonday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .ArrowMonday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .taskMonday:hover .ArrowMonday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .taskMonday:hover .ArrowbMonday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .minimizeweekdayarrowMonday {
        height: 30px;
        width: 30px;
    }
    ` : `
    .weekdayMonday:hover .expandweekdayarrowMonday {
        height: 30px;
        width: 30px;
    }
    .minimizeweekdayarrowMonday {
        height: 0px;
        width: 0px;
    }
    `}
    
    .taskMonday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskMonday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskMonday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .taskMonday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .deleteTaskMonday {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    
    .ArrowMonday {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .addTaskInputMonday::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInputMonday::-moz-placeholder {
        color: white;
    }
    .addTaskInputMonday:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInputMonday:-moz-placeholder {
        color: white;
    }
    .ArrowbMonday {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    .weekdayTuesday {
        width: ${weekdayWidthTuesday};
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        trasition: 0.1s;
    } 
    
    
    
    .weekdaycontentTuesday:hover {
        background-color: rgba(0, 0, 0, 0.60);
        transition: 0.25s;
    }
    .expandweekdayTuesday:hover {
        cursor: pointer;
    }
    .expandweekdayTuesday {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.60);
        width: ${expandTuesdayWidth};
        height: 100%;
        transition: 0.25s;
        align-self: center;
    }
    
    .weekdayTuesday:hover .expandweekdayTuesday {
        width: 45px;
        transition: 0.21s;
    }
    .weekdaytopTuesday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .weekdaycontentTuesday {
        background-color: rgba(0, 0, 0, 0.30);
        width: ${weekdayContentWidthTuesday};
        padding: 10px;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
    }
    .weekdaytopTuesday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${justifyContentTuesday};
    }
    .expandweekdayarrowTuesday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .expandweekdayarrowTuesday:hover {
        cursor:pointer
    }
    .minimizeweekdayarrowTuesday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .minimizeweekdayarrowTuesday:hover {
        cursor: pointer;
    }
    .weekdaycontinuationTuesday {
        font-size: ${fontsizeContinuationTuesday};
        transition: 0.25s;
    }
    
    .weekdayinitialTuesday {
        font-size: ${fontsizeInitialTuesday};
        transition: 0.25s;
        color: ${colorInitialTuesday};
    }
    
    .DayNoteInputTuesday {
        height: ${dayNoteInputHeightTuesday};
        width: ${dayNoteInputWidthTuesday};
        visibility: ${dayNoteInputVisibilityTuesday};
        outline: 0;
        background-color: transparent;
        pointer-events: ${dayNoteInputPointerEventsTuesday};
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        font-size: ${dayNoteInputFontSizeTuesday};
        padding: ${dayNoteInputPaddingTuesday};
        transition: 0.25s;
    }
    .DayNoteInputTuesday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInputTuesday::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputTuesday::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputTuesday:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInputTuesday:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .addButtonTuesday {
        width: ${addButtonWidthTuesday};
        height: ${addButtonHeightTuesday};
        font-size: ${addButtonFontSizeTuesday};
        padding: ${addButtonPaddingTuesday};
        visibility: ${addButtonVisibilityTuesday};
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        
        cursor: pointer;
        transition: 0.25s;
    }
    }
    .addButtonTuesday:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .addTaskInputTuesday {
        height: 0px;
        width: 0;
        visibility: hidden;
        padding: 0px;
        pointer-events: none;
        font-size: 0px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonTuesday {
        width: 0;
        height: 0px;
        margin-left: 0px;
        padding: 0px;
        font-size: 0px;
        visibility: hidden;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    
    
    
    .tasktitleTuesday {
        opacity: ${taskTitleOpacityTuesday};
        width: ${taskTitleWidthTuesday};
        height: ${taskTitleHeightTuesday};
        transition: 0.25s;
    }
    
    
    .taskTuesday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    ${hoverEffectsTuesday === true ? `
    .addTaskTuesday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addingtaskTuesday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .addingtaskTuesday:hover {
        background-color: rgba(255, 255, 255, 0.07);
    }
    .addTaskInputTuesday {
        height: 15px;
        width: 75%;
        visibility: visible;
        padding: 6px;
        pointer-events: auto;
        font-size: 15px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonTuesday {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    .taskTuesday:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
    }
    
    .taskTuesday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskTuesday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskTuesday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .taskTuesday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addingtaskTuesday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addTaskTuesday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskInputTuesday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .taskTuesday:hover .deleteTaskTuesday {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTaskTuesday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .ArrowTuesday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .taskTuesday:hover .ArrowTuesday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .taskTuesday:hover .ArrowbTuesday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .minimizeweekdayarrowTuesday {
        height: 30px;
        width: 30px;
    }
    ` : `
    .weekdayTuesday:hover .expandweekdayarrowTuesday {
        height: 30px;
        width: 30px;
    }
    .minimizeweekdayarrowTuesday {
        height: 0px;
        width: 0px;
    }
    `}
    
    .taskTuesday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskTuesday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskTuesday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .taskTuesday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .deleteTaskTuesday {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    
    .ArrowTuesday {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .addTaskInputTuesday::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInputTuesday::-moz-placeholder {
        color: white;
    }
    .addTaskInputTuesday:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInputTuesday:-moz-placeholder {
        color: white;
    }
    .ArrowbTuesday {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    .weekdayWednesday {
        width: ${weekdayWidthWednesday};
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        trasition: 0.1s;
    } 
    
    
    
    .weekdaycontentWednesday:hover {
        background-color: rgba(0, 0, 0, 0.60);
        transition: 0.25s;
    }
    .expandweekdayWednesday:hover {
        cursor: pointer;
    }
    .expandweekdayWednesday {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.60);
        width: ${expandWednesdayWidth};
        height: 100%;
        transition: 0.25s;
        align-self: center;
    }
    
    .weekdayWednesday:hover .expandweekdayWednesday {
        width: 45px;
        transition: 0.21s;
    }
    .weekdaytopWednesday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .weekdaycontentWednesday {
        background-color: rgba(0, 0, 0, 0.30);
        width: ${weekdayContentWidthWednesday};
        padding: 10px;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
    }
    .weekdaytopWednesday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${justifyContentWednesday};
    }
    .expandweekdayarrowWednesday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .expandweekdayarrowWednesday:hover {
        cursor:pointer
    }
    .minimizeweekdayarrowWednesday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .minimizeweekdayarrowWednesday:hover {
        cursor: pointer;
    }
    .weekdaycontinuationWednesday {
        font-size: ${fontsizeContinuationWednesday};
        transition: 0.25s;
    }
    
    .weekdayinitialWednesday {
        font-size: ${fontsizeInitialWednesday};
        transition: 0.25s;
        color: ${colorInitialWednesday};
    }
    
    .DayNoteInputWednesday {
        height: ${dayNoteInputHeightWednesday};
        width: ${dayNoteInputWidthWednesday};
        visibility: ${dayNoteInputVisibilityWednesday};
        outline: 0;
        background-color: transparent;
        pointer-events: ${dayNoteInputPointerEventsWednesday};
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        font-size: ${dayNoteInputFontSizeWednesday};
        padding: ${dayNoteInputPaddingWednesday};
        transition: 0.25s;
    }
    .DayNoteInputWednesday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInputWednesday::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputWednesday::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputWednesday:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInputWednesday:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .addButtonWednesday {
        width: ${addButtonWidthWednesday};
        height: ${addButtonHeightWednesday};
        font-size: ${addButtonFontSizeWednesday};
        padding: ${addButtonPaddingWednesday};
        visibility: ${addButtonVisibilityWednesday};
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        
        cursor: pointer;
        transition: 0.25s;
    }
    }
    .addButtonWednesday:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .addTaskInputWednesday {
        height: 0px;
        width: 0;
        visibility: hidden;
        padding: 0px;
        pointer-events: none;
        font-size: 0px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonWednesday {
        width: 0;
        height: 0px;
        margin-left: 0px;
        padding: 0px;
        font-size: 0px;
        visibility: hidden;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    
    
    
    .tasktitleWednesday {
        opacity: ${taskTitleOpacityWednesday};
        width: ${taskTitleWidthWednesday};
        height: ${taskTitleHeightWednesday};
        transition: 0.25s;
    }
    
    
    .taskWednesday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    ${hoverEffectsWednesday === true ? `
    .addTaskWednesday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addingtaskWednesday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .addingtaskWednesday:hover {
        background-color: rgba(255, 255, 255, 0.07);
    }
    .addTaskInputWednesday {
        height: 15px;
        width: 75%;
        visibility: visible;
        padding: 6px;
        pointer-events: auto;
        font-size: 15px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonWednesday {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    .taskWednesday:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
    }
    
    .taskWednesday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskWednesday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskWednesday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .taskWednesday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addingtaskWednesday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addTaskWednesday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskInputWednesday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .taskWednesday:hover .deleteTaskWednesday {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTaskWednesday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .ArrowWednesday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .taskWednesday:hover .ArrowWednesday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .taskWednesday:hover .ArrowbWednesday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .minimizeweekdayarrowWednesday {
        height: 30px;
        width: 30px;
    }
    ` : `
    .weekdayWednesday:hover .expandweekdayarrowWednesday {
        height: 30px;
        width: 30px;
    }
    .minimizeweekdayarrowWednesday {
        height: 0px;
        width: 0px;
    }
    `}
    
    .taskWednesday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskWednesday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskWednesday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .taskWednesday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .deleteTaskWednesday {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    
    .ArrowWednesday {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .addTaskInputWednesday::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInputWednesday::-moz-placeholder {
        color: white;
    }
    .addTaskInputWednesday:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInputWednesday:-moz-placeholder {
        color: white;
    }
    .ArrowbWednesday {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    .weekdayThursday {
        width: ${weekdayWidthThursday};
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        trasition: 0.1s;
    } 
    
    
    
    .weekdaycontentThursday:hover {
        background-color: rgba(0, 0, 0, 0.60);
        transition: 0.25s;
    }
    .expandweekdayThursday:hover {
        cursor: pointer;
    }
    .expandweekdayThursday {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.60);
        width: ${expandThursdayWidth};
        height: 100%;
        transition: 0.25s;
        align-self: center;
    }
    
    .weekdayThursday:hover .expandweekdayThursday {
        width: 45px;
        transition: 0.21s;
    }
    .weekdaytopThursday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .weekdaycontentThursday {
        background-color: rgba(0, 0, 0, 0.30);
        width: ${weekdayContentWidthThursday};
        padding: 10px;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
    }
    .weekdaytopThursday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${justifyContentThursday};
    }
    .expandweekdayarrowThursday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .expandweekdayarrowThursday:hover {
        cursor:pointer
    }
    .minimizeweekdayarrowThursday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .minimizeweekdayarrowThursday:hover {
        cursor: pointer;
    }
    .weekdaycontinuationThursday {
        font-size: ${fontsizeContinuationThursday};
        transition: 0.25s;
    }
    
    .weekdayinitialThursday {
        font-size: ${fontsizeInitialThursday};
        transition: 0.25s;
        color: ${colorInitialThursday};
    }
    
    .DayNoteInputThursday {
        height: ${dayNoteInputHeightThursday};
        width: ${dayNoteInputWidthThursday};
        visibility: ${dayNoteInputVisibilityThursday};
        outline: 0;
        background-color: transparent;
        pointer-events: ${dayNoteInputPointerEventsThursday};
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        font-size: ${dayNoteInputFontSizeThursday};
        padding: ${dayNoteInputPaddingThursday};
        transition: 0.25s;
    }
    .DayNoteInputThursday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInputThursday::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputThursday::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputThursday:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInputThursday:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .addButtonThursday {
        width: ${addButtonWidthThursday};
        height: ${addButtonHeightThursday};
        font-size: ${addButtonFontSizeThursday};
        padding: ${addButtonPaddingThursday};
        visibility: ${addButtonVisibilityThursday};
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        
        cursor: pointer;
        transition: 0.25s;
    }
    }
    .addButtonThursday:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .addTaskInputThursday {
        height: 0px;
        width: 0;
        visibility: hidden;
        padding: 0px;
        pointer-events: none;
        font-size: 0px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonThursday {
        width: 0;
        height: 0px;
        margin-left: 0px;
        padding: 0px;
        font-size: 0px;
        visibility: hidden;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    
    
    
    .tasktitleThursday {
        opacity: ${taskTitleOpacityThursday};
        width: ${taskTitleWidthThursday};
        height: ${taskTitleHeightThursday};
        transition: 0.25s;
    }
    
    
    .taskThursday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    ${hoverEffectsThursday === true ? `
    .addTaskThursday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addingtaskThursday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .addingtaskThursday:hover {
        background-color: rgba(255, 255, 255, 0.07);
    }
    .addTaskInputThursday {
        height: 15px;
        width: 75%;
        visibility: visible;
        padding: 6px;
        pointer-events: auto;
        font-size: 15px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonThursday {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    .taskThursday:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
    }
    
    .taskThursday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskThursday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskThursday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .taskThursday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addingtaskThursday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addTaskThursday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskInputThursday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .taskThursday:hover .deleteTaskThursday {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTaskThursday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .ArrowThursday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .taskThursday:hover .ArrowThursday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .taskThursday:hover .ArrowbThursday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .minimizeweekdayarrowThursday {
        height: 30px;
        width: 30px;
    }
    ` : `
    .weekdayThursday:hover .expandweekdayarrowThursday {
        height: 30px;
        width: 30px;
    }
    .minimizeweekdayarrowThursday {
        height: 0px;
        width: 0px;
    }
    `}
    
    .taskThursday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskThursday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskThursday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .taskThursday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .deleteTaskThursday {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    
    .ArrowThursday {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .addTaskInputThursday::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInputThursday::-moz-placeholder {
        color: white;
    }
    .addTaskInputThursday:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInputThursday:-moz-placeholder {
        color: white;
    }
    .ArrowbThursday {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    .weekdayFriday {
        width: ${weekdayWidthFriday};
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        trasition: 0.1s;
    } 
    
    
    
    .weekdaycontentFriday:hover {
        background-color: rgba(0, 0, 0, 0.60);
        transition: 0.25s;
    }
    .expandweekdayFriday:hover {
        cursor: pointer;
    }
    .expandweekdayFriday {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.60);
        width: ${expandFridayWidth};
        height: 100%;
        transition: 0.25s;
        align-self: center;
    }
    
    .weekdayFriday:hover .expandweekdayFriday {
        width: 45px;
        transition: 0.21s;
    }
    .weekdaytopFriday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .weekdaycontentFriday {
        background-color: rgba(0, 0, 0, 0.30);
        width: ${weekdayContentWidthFriday};
        padding: 10px;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
    }
    .weekdaytopFriday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${justifyContentFriday};
    }
    .expandweekdayarrowFriday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .expandweekdayarrowFriday:hover {
        cursor:pointer
    }
    .minimizeweekdayarrowFriday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .minimizeweekdayarrowFriday:hover {
        cursor: pointer;
    }
    .weekdaycontinuationFriday {
        font-size: ${fontsizeContinuationFriday};
        transition: 0.25s;
    }
    
    .weekdayinitialFriday {
        font-size: ${fontsizeInitialFriday};
        transition: 0.25s;
        color: ${colorInitialFriday};
    }
    
    .DayNoteInputFriday {
        height: ${dayNoteInputHeightFriday};
        width: ${dayNoteInputWidthFriday};
        visibility: ${dayNoteInputVisibilityFriday};
        outline: 0;
        background-color: transparent;
        pointer-events: ${dayNoteInputPointerEventsFriday};
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        font-size: ${dayNoteInputFontSizeFriday};
        padding: ${dayNoteInputPaddingFriday};
        transition: 0.25s;
    }
    .DayNoteInputFriday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInputFriday::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputFriday::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputFriday:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInputFriday:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .addButtonFriday {
        width: ${addButtonWidthFriday};
        height: ${addButtonHeightFriday};
        font-size: ${addButtonFontSizeFriday};
        padding: ${addButtonPaddingFriday};
        visibility: ${addButtonVisibilityFriday};
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        
        cursor: pointer;
        transition: 0.25s;
    }
    }
    .addButtonFriday:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .addTaskInputFriday {
        height: 0px;
        width: 0;
        visibility: hidden;
        padding: 0px;
        pointer-events: none;
        font-size: 0px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonFriday {
        width: 0;
        height: 0px;
        margin-left: 0px;
        padding: 0px;
        font-size: 0px;
        visibility: hidden;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    
    
    
    .tasktitleFriday {
        opacity: ${taskTitleOpacityFriday};
        width: ${taskTitleWidthFriday};
        height: ${taskTitleHeightFriday};
        transition: 0.25s;
    }
    
    
    .taskFriday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    ${hoverEffectsFriday === true ? `
    .addTaskFriday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addingtaskFriday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .addingtaskFriday:hover {
        background-color: rgba(255, 255, 255, 0.07);
    }
    .addTaskInputFriday {
        height: 15px;
        width: 75%;
        visibility: visible;
        padding: 6px;
        pointer-events: auto;
        font-size: 15px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonFriday {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    .taskFriday:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
    }
    
    .taskFriday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskFriday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskFriday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .taskFriday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addingtaskFriday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addTaskFriday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskInputFriday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .taskFriday:hover .deleteTaskFriday {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTaskFriday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .ArrowFriday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .taskFriday:hover .ArrowFriday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .taskFriday:hover .ArrowbFriday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .minimizeweekdayarrowFriday {
        height: 30px;
        width: 30px;
    }
    ` : `
    .weekdayFriday:hover .expandweekdayarrowFriday {
        height: 30px;
        width: 30px;
    }
    .minimizeweekdayarrowFriday {
        height: 0px;
        width: 0px;
    }
    `}
    
    .taskFriday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskFriday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskFriday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .taskFriday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .deleteTaskFriday {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    
    .ArrowFriday {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .addTaskInputFriday::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInputFriday::-moz-placeholder {
        color: white;
    }
    .addTaskInputFriday:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInputFriday:-moz-placeholder {
        color: white;
    }
    .ArrowbFriday {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    .weekdaySaturday {
        width: ${weekdayWidthSaturday};
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        trasition: 0.1s;
    } 
    
    
    
    .weekdaycontentSaturday:hover {
        background-color: rgba(0, 0, 0, 0.60);
        transition: 0.25s;
    }
    .expandweekdaySaturday:hover {
        cursor: pointer;
    }
    .expandweekdaySaturday {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.60);
        width: ${expandSaturdayWidth};
        height: 100%;
        transition: 0.25s;
        align-self: center;
    }
    
    .weekdaySaturday:hover .expandweekdaySaturday {
        width: 45px;
        transition: 0.21s;
    }
    .weekdaytopSaturday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .weekdaycontentSaturday {
        background-color: rgba(0, 0, 0, 0.30);
        width: ${weekdayContentWidthSaturday};
        padding: 10px;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
    }
    .weekdaytopSaturday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${justifyContentSaturday};
    }
    .expandweekdayarrowSaturday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .expandweekdayarrowSaturday:hover {
        cursor:pointer
    }
    .minimizeweekdayarrowSaturday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .minimizeweekdayarrowSaturday:hover {
        cursor: pointer;
    }
    .weekdaycontinuationSaturday {
        font-size: ${fontsizeContinuationSaturday};
        transition: 0.25s;
    }
    
    .weekdayinitialSaturday {
        font-size: ${fontsizeInitialSaturday};
        transition: 0.25s;
        color: ${colorInitialSaturday};
    }
    
    .DayNoteInputSaturday {
        height: ${dayNoteInputHeightSaturday};
        width: ${dayNoteInputWidthSaturday};
        visibility: ${dayNoteInputVisibilitySaturday};
        outline: 0;
        background-color: transparent;
        pointer-events: ${dayNoteInputPointerEventsSaturday};
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        font-size: ${dayNoteInputFontSizeSaturday};
        padding: ${dayNoteInputPaddingSaturday};
        transition: 0.25s;
    }
    .DayNoteInputSaturday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInputSaturday::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputSaturday::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputSaturday:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInputSaturday:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .addButtonSaturday {
        width: ${addButtonWidthSaturday};
        height: ${addButtonHeightSaturday};
        font-size: ${addButtonFontSizeSaturday};
        padding: ${addButtonPaddingSaturday};
        visibility: ${addButtonVisibilitySaturday};
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        
        cursor: pointer;
        transition: 0.25s;
    }
    }
    .addButtonSaturday:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .addTaskInputSaturday {
        height: 0px;
        width: 0;
        visibility: hidden;
        padding: 0px;
        pointer-events: none;
        font-size: 0px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonSaturday {
        width: 0;
        height: 0px;
        margin-left: 0px;
        padding: 0px;
        font-size: 0px;
        visibility: hidden;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    
    
    
    .tasktitleSaturday {
        opacity: ${taskTitleOpacitySaturday};
        width: ${taskTitleWidthSaturday};
        height: ${taskTitleHeightSaturday};
        transition: 0.25s;
    }
    
    
    .taskSaturday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    ${hoverEffectsSaturday === true ? `
    .addTaskSaturday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addingtaskSaturday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .addingtaskSaturday:hover {
        background-color: rgba(255, 255, 255, 0.07);
    }
    .addTaskInputSaturday {
        height: 15px;
        width: 75%;
        visibility: visible;
        padding: 6px;
        pointer-events: auto;
        font-size: 15px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonSaturday {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    .taskSaturday:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
    }
    
    .taskSaturday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskSaturday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskSaturday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .taskSaturday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addingtaskSaturday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addTaskSaturday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskInputSaturday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .taskSaturday:hover .deleteTaskSaturday {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTaskSaturday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .ArrowSaturday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .taskSaturday:hover .ArrowSaturday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .taskSaturday:hover .ArrowbSaturday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .minimizeweekdayarrowSaturday {
        height: 30px;
        width: 30px;
    }
    ` : `
    .weekdaySaturday:hover .expandweekdayarrowSaturday {
        height: 30px;
        width: 30px;
    }
    .minimizeweekdayarrowSaturday {
        height: 0px;
        width: 0px;
    }
    `}
    
    .taskSaturday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskSaturday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskSaturday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .taskSaturday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .deleteTaskSaturday {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    
    .ArrowSaturday {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .addTaskInputSaturday::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInputSaturday::-moz-placeholder {
        color: white;
    }
    .addTaskInputSaturday:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInputSaturday:-moz-placeholder {
        color: white;
    }
    .ArrowbSaturday {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    .weekdaySunday {
        width: ${weekdayWidthSunday};
        transition: 0.5s;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        trasition: 0.1s;
    } 
    
    
    
    .weekdaycontentSunday:hover {
        background-color: rgba(0, 0, 0, 0.60);
        transition: 0.25s;
    }
    .expandweekdaySunday:hover {
        cursor: pointer;
    }
    .expandweekdaySunday {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.60);
        width: ${expandSundayWidth};
        height: 100%;
        transition: 0.25s;
        align-self: center;
    }
    
    .weekdaySunday:hover .expandweekdaySunday {
        width: 45px;
        transition: 0.21s;
    }
    .weekdaytopSunday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .weekdaycontentSunday {
        background-color: rgba(0, 0, 0, 0.30);
        width: ${weekdayContentWidthSunday};
        padding: 10px;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
    }
    .weekdaytopSunday {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${justifyContentSunday};
    }
    .expandweekdayarrowSunday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .expandweekdayarrowSunday:hover {
        cursor:pointer
    }
    .minimizeweekdayarrowSunday {
        height: 0;
        width: 0;
        transition: 0.25s;
    }
    .minimizeweekdayarrowSunday:hover {
        cursor: pointer;
    }
    .weekdaycontinuationSunday {
        font-size: ${fontsizeContinuationSunday};
        transition: 0.25s;
    }
    
    .weekdayinitialSunday {
        font-size: ${fontsizeInitialSunday};
        transition: 0.25s;
        color: ${colorInitialSunday};
    }
    
    .DayNoteInputSunday {
        height: ${dayNoteInputHeightSunday};
        width: ${dayNoteInputWidthSunday};
        visibility: ${dayNoteInputVisibilitySunday};
        outline: 0;
        background-color: transparent;
        pointer-events: ${dayNoteInputPointerEventsSunday};
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        font-size: ${dayNoteInputFontSizeSunday};
        padding: ${dayNoteInputPaddingSunday};
        transition: 0.25s;
    }
    .DayNoteInputSunday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .DayNoteInputSunday::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputSunday::-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .DayNoteInputSunday:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    
    .DayNoteInputSunday:-moz-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    .addButtonSunday {
        width: ${addButtonWidthSunday};
        height: ${addButtonHeightSunday};
        font-size: ${addButtonFontSizeSunday};
        padding: ${addButtonPaddingSunday};
        visibility: ${addButtonVisibilitySunday};
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        
        cursor: pointer;
        transition: 0.25s;
    }
    }
    .addButtonSunday:hover {
        color: rgba(0, 0, 0, 0.75);
        background-color: rgba(255, 255, 255, 0.93);;
        transition: 0.25s;
    }
    .addTaskInputSunday {
        height: 0px;
        width: 0;
        visibility: hidden;
        padding: 0px;
        pointer-events: none;
        font-size: 0px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonSunday {
        width: 0;
        height: 0px;
        margin-left: 0px;
        padding: 0px;
        font-size: 0px;
        visibility: hidden;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    
    
    
    .tasktitleSunday {
        opacity: ${taskTitleOpacitySunday};
        width: ${taskTitleWidthSunday};
        height: ${taskTitleHeightSunday};
        transition: 0.25s;
    }
    
    
    .taskSunday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    ${hoverEffectsSunday === true ? `
    .addTaskSunday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addingtaskSunday {
        display: flex;
        transition: 0.25s;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .addingtaskSunday:hover {
        background-color: rgba(255, 255, 255, 0.07);
    }
    .addTaskInputSunday {
        height: 15px;
        width: 75%;
        visibility: visible;
        padding: 6px;
        pointer-events: auto;
        font-size: 15px;
        color: white;
        border-radius: 0;
        border: 1px transparent solid;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: 0;
    }
    .addTaskButtonSunday {
        width: 10%;
        height: 15px;
        margin-left: 3px;
        padding: 6px;
        font-size: 17px;
        visibility: visible;
        display: table-cell;
     	text-align: center;
        color: white;
        vertical-align: middle;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.30);
        border: 1px transparent solid;
        transition: 0.25s;
        
        cursor: pointer;
    }
    .taskSunday:hover {
        padding-top: 6px;
        padding-bottom: 6px;
        transition: 0.25s;
        background-color: rgba(255, 255, 255, 0.07);
    }
    
    .taskSunday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskSunday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    
    .taskSunday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .taskSunday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addingtaskSunday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
        margin-left: 12px;
    }
    .addTaskSunday {
        height: 100%;
        opacity: 1;
        width: 100%;
        margin-top: 6px;
        transition: 0.25s;
    }
    .addTaskInputSunday:hover {
        transition: 0.25s;
        pointer-events: auto;
        border: 1px rgba(255, 255, 255, 0.35) solid;
        border-bottom: 1px white solid;
        background-color: rgba(255, 255, 255, 0.30);
    }
    .taskSunday:hover .deleteTaskSunday {
        height: 15px;
        width: 15px;
        visibility: visible;
        transition: 0.25s;
        margin-right: 12px;
    }
    .deleteTaskSunday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.60);
    }
    .ArrowSunday:hover {
        cursor: pointer;
        fill: rgba(255, 255, 255, 0.75);
        transition: 0.1s;
    }
    .taskSunday:hover .ArrowSunday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .taskSunday:hover .ArrowbSunday {
        height: 18px;
        width: 18px;
        transition: 0.1s;
    }
    .minimizeweekdayarrowSunday {
        height: 30px;
        width: 30px;
    }
    ` : `
    .weekdaySunday:hover .expandweekdayarrowSunday {
        height: 30px;
        width: 30px;
    }
    .minimizeweekdayarrowSunday {
        height: 0px;
        width: 0px;
    }
    `}
    
    .taskSunday:hover .N{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskSunday:hover .Y{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    
    .taskSunday:hover .X{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .taskSunday:hover .A{
        opacity: 50%;
        transition: 0.25s;
        border-radius: 30%;
    }
    .deleteTaskSunday {
        height: 0;
        width: 0;
        visibility: hidden;
        transition: 0.25;
    }
    
    .ArrowSunday {
        height: 0;
        width: 0;
        justify-self: center;
        text-align: center;
        fill: rgba(255, 255, 255, 0.45);
        transition: 0.1s;
    }
    .addTaskInputSunday::-webkit-input-placeholder {
        color: white;
        transition: 0.25s;
    }
    .addTaskInputSunday::-moz-placeholder {
        color: white;
    }
    .addTaskInputSunday:-ms-input-placeholder {
        color: white;
    }
    
    .addTaskInputSunday:-moz-placeholder {
        color: white;
    }
    .ArrowbSunday {
        height: 0;
        width: 0;
        transition: 0.1s;
    }
    
    .databox {
        background-color:  rgba(0, 0, 0, 0.60);
        padding: 10px;
        margin: 10px;
        width: 210px;
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














    //XML
    return (
        <Body>
        <div className="body">
        <div className="bodycontentbox">
            <div className="weekdayMonday">
                <div className="weekdaycontentMonday">
                <div className="weekdaytopMonday">
                <div className="weekdayname">
                    <p className="weekdayinitialMonday">M</p> 
                    <p className="weekdaycontinuationMonday"> onday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {MondayNoteVar=event.target.value}} className="DayNoteInputMonday" placeholder={MondayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setMondayNote({daynote: `${event.target.value}`}); localStorage.setItem('mondaydaynote', event.target.value)}}}></input>
                        <div className="addButtonMonday" onClick={() => {setMondayNote({daynote: `${MondayNoteVar}`}); localStorage.setItem('mondaydaynote', MondayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksMonday.tasks.map(task => (
                    <div className="taskMonday"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="ArrowbMonday" opacity="0"></FaArrowUp> : <FaArrowUp className="ArrowMonday" id={x} onClick={(event) => { upMonday(event.currentTarget.id)}}></FaArrowUp>}
                        
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
                          <h3 className="tasktitleMonday">
                              {TasksMonday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTaskMonday" id={x} onClick={(event) => deleteMonday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksMonday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="ArrowbMonday" opacity="0"> </FaArrowDown> : <FaArrowDown className="ArrowMonday" id={x + 1} onClick={(event) => { downMonday(event.currentTarget.id) }}></FaArrowDown>}
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
                <div className="addingtaskMonday">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitleMonday">Add task</h3>
                        
                        
                    </div>
                    <div className="addTaskMonday">
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {MondayTaskAdd=event.target.value}} className="addTaskInputMonday" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskMonday(event.target.value)}}}></input>
                                <div className="addTaskButtonMonday" onClick={() =>addTaskMonday(MondayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className="expandweekdayMonday" onClick={expandMonday}>
                    <FaAngleRight className="expandweekdayarrowMonday" onClick={expandMonday}></FaAngleRight>
                    <FaAngleLeft className="minimizeweekdayarrowMonday" onClick={expandMonday}></FaAngleLeft>
                </div>
            </div>
            <div className="weekdayTuesday">
                <div className="weekdaycontentTuesday">
                <div className="weekdaytopTuesday">
                <div className="weekdayname">
                    <p className="weekdayinitialTuesday">T</p> 
                    <p className="weekdaycontinuationTuesday"> uesday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {TuesdayNoteVar=event.target.value}} className="DayNoteInputTuesday" placeholder={TuesdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setTuesdayNote({daynote: `${event.target.value}`}); localStorage.setItem('tuesdaydaynote', event.target.value)}}}></input>
                        <div className="addButtonTuesday" onClick={() => {setTuesdayNote({daynote: `${TuesdayNoteVar}`}); localStorage.setItem('tuesdaydaynote', TuesdayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksTuesday.tasks.map(task => (
                    <div className="taskTuesday"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="ArrowbTuesday" opacity="0"></FaArrowUp> : <FaArrowUp className="ArrowTuesday" id={x} onClick={(event) => { upTuesday(event.currentTarget.id)}}></FaArrowUp>}
                        
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
                          <h3 className="tasktitleTuesday">
                              {TasksTuesday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTaskTuesday" id={x} onClick={(event) => deleteTuesday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksTuesday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="ArrowbTuesday" opacity="0"> </FaArrowDown> : <FaArrowDown className="ArrowTuesday" id={x + 1} onClick={(event) => { downTuesday(event.currentTarget.id) }}></FaArrowDown>}
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
                <div className="addingtaskTuesday">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitleTuesday">Add task</h3>
                        
                        
                    </div>
                    <div className="addTaskTuesday">
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {TuesdayTaskAdd=event.target.value}} className="addTaskInputTuesday" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskTuesday(event.target.value)}}}></input>
                                <div className="addTaskButtonTuesday" onClick={() =>addTaskTuesday(TuesdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className="expandweekdayTuesday" onClick={expandTuesday}>
                    <FaAngleRight className="expandweekdayarrowTuesday" onClick={expandTuesday}></FaAngleRight>
                    <FaAngleLeft className="minimizeweekdayarrowTuesday" onClick={expandTuesday}></FaAngleLeft>
                </div>
            </div>

            <div className="weekdayWednesday">
                <div className="weekdaycontentWednesday">
                <div className="weekdaytopWednesday">
                <div className="weekdayname">
                    <p className="weekdayinitialWednesday">W</p> 
                    <p className="weekdaycontinuationWednesday"> ednesday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {WednesdayNoteVar=event.target.value}} className="DayNoteInputWednesday" placeholder={WednesdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setWednesdayNote({daynote: `${event.target.value}`}); localStorage.setItem('wednesdaydaynote', event.target.value)}}}></input>
                        <div className="addButtonWednesday" onClick={() => {setWednesdayNote({daynote: `${WednesdayNoteVar}`}); localStorage.setItem('wednesdaydaynote', WednesdayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksWednesday.tasks.map(task => (
                    <div className="taskWednesday"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="ArrowbWednesday" opacity="0"></FaArrowUp> : <FaArrowUp className="ArrowWednesday" id={x} onClick={(event) => { upWednesday(event.currentTarget.id)}}></FaArrowUp>}
                        
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
                          <h3 className="tasktitleWednesday">
                              {TasksWednesday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTaskWednesday" id={x} onClick={(event) => deleteWednesday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksWednesday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="ArrowbWednesday" opacity="0"> </FaArrowDown> : <FaArrowDown className="ArrowWednesday" id={x + 1} onClick={(event) => { downWednesday(event.currentTarget.id) }}></FaArrowDown>}
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
                <div className="addingtaskWednesday">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitleWednesday">Add task</h3>
                        
                        
                    </div>
                    <div className="addTaskWednesday">
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {WednesdayTaskAdd=event.target.value}} className="addTaskInputWednesday" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskWednesday(event.target.value)}}}></input>
                                <div className="addTaskButtonWednesday" onClick={() =>addTaskWednesday(WednesdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className="expandweekdayWednesday" onClick={expandWednesday}>
                    <FaAngleRight className="expandweekdayarrowWednesday" onClick={expandWednesday}></FaAngleRight>
                    <FaAngleLeft className="minimizeweekdayarrowWednesday" onClick={expandWednesday}></FaAngleLeft>
                </div>
            </div>



            <div className="weekdayThursday">
                <div className="weekdaycontentThursday">
                <div className="weekdaytopThursday">
                <div className="weekdayname">
                    <p className="weekdayinitialThursday">T</p> 
                    <p className="weekdaycontinuationThursday"> hursday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {ThursdayNoteVar=event.target.value}} className="DayNoteInputThursday" placeholder={ThursdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setThursdayNote({daynote: `${event.target.value}`}); localStorage.setItem('thursdaydaynote', event.target.value)}}}></input>
                        <div className="addButtonThursday" onClick={() => {setThursdayNote({daynote: `${ThursdayNoteVar}`}); localStorage.setItem('thursdaydaynote', ThursdayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksThursday.tasks.map(task => (
                    <div className="taskThursday"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="ArrowbThursday" opacity="0"></FaArrowUp> : <FaArrowUp className="ArrowThursday" id={x} onClick={(event) => { upThursday(event.currentTarget.id)}}></FaArrowUp>}
                        
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
                          <h3 className="tasktitleThursday">
                              {TasksThursday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTaskThursday" id={x} onClick={(event) => deleteThursday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksThursday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="ArrowbThursday" opacity="0"> </FaArrowDown> : <FaArrowDown className="ArrowThursday" id={x + 1} onClick={(event) => { downThursday(event.currentTarget.id) }}></FaArrowDown>}
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
                <div className="addingtaskThursday">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitleThursday">Add task</h3>
                        
                        
                    </div>
                    <div className="addTaskThursday">
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {ThursdayTaskAdd=event.target.value}} className="addTaskInputThursday" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskThursday(event.target.value)}}}></input>
                                <div className="addTaskButtonThursday" onClick={() =>addTaskThursday(ThursdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className="expandweekdayThursday" onClick={expandThursday}>
                    <FaAngleRight className="expandweekdayarrowThursday" onClick={expandThursday}></FaAngleRight>
                    <FaAngleLeft className="minimizeweekdayarrowThursday" onClick={expandThursday}></FaAngleLeft>
                </div>
            </div>



            <div className="weekdayFriday">
                <div className="weekdaycontentFriday">
                <div className="weekdaytopFriday">
                <div className="weekdayname">
                    <p className="weekdayinitialFriday">F</p> 
                    <p className="weekdaycontinuationFriday"> riday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {FridayNoteVar=event.target.value}} className="DayNoteInputFriday" placeholder={FridayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setFridayNote({daynote: `${event.target.value}`}); localStorage.setItem('fridaydaynote', event.target.value)}}}></input>
                        <div className="addButtonFriday" onClick={() => {setFridayNote({daynote: `${FridayNoteVar}`}); localStorage.setItem('fridaydaynote', FridayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksFriday.tasks.map(task => (
                    <div className="taskFriday"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="ArrowbFriday" opacity="0"></FaArrowUp> : <FaArrowUp className="ArrowFriday" id={x} onClick={(event) => { upFriday(event.currentTarget.id)}}></FaArrowUp>}
                        
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
                          <h3 className="tasktitleFriday">
                              {TasksFriday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTaskFriday" id={x} onClick={(event) => deleteFriday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksFriday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="ArrowbFriday" opacity="0"> </FaArrowDown> : <FaArrowDown className="ArrowFriday" id={x + 1} onClick={(event) => { downFriday(event.currentTarget.id) }}></FaArrowDown>}
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
                <div className="addingtaskFriday">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitleFriday">Add task</h3>
                        
                        
                    </div>
                    <div className="addTaskFriday">
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {FridayTaskAdd=event.target.value}} className="addTaskInputFriday" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskFriday(event.target.value)}}}></input>
                                <div className="addTaskButtonFriday" onClick={() =>addTaskFriday(FridayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className="expandweekdayFriday" onClick={expandFriday}>
                    <FaAngleRight className="expandweekdayarrowFriday" onClick={expandFriday}></FaAngleRight>
                    <FaAngleLeft className="minimizeweekdayarrowFriday" onClick={expandFriday}></FaAngleLeft>
                </div>
            </div>

            <div className="weekdaySaturday">
                <div className="weekdaycontentSaturday">
                <div className="weekdaytopSaturday">
                <div className="weekdayname">
                    <p className="weekdayinitialSaturday">S</p> 
                    <p className="weekdaycontinuationSaturday"> aturday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {SaturdayNoteVar=event.target.value}} className="DayNoteInputSaturday" placeholder={SaturdayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setSaturdayNote({daynote: `${event.target.value}`}); localStorage.setItem('saturdaydaynote', event.target.value)}}}></input>
                        <div className="addButtonSaturday" onClick={() => {setSaturdayNote({daynote: `${SaturdayNoteVar}`}); localStorage.setItem('saturdaydaynote', SaturdayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksSaturday.tasks.map(task => (
                    <div className="taskSaturday"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="ArrowbSaturday" opacity="0"></FaArrowUp> : <FaArrowUp className="ArrowSaturday" id={x} onClick={(event) => { upSaturday(event.currentTarget.id)}}></FaArrowUp>}
                        
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
                          <h3 className="tasktitleSaturday">
                              {TasksSaturday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTaskSaturday" id={x} onClick={(event) => deleteSaturday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksSaturday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="ArrowbSaturday" opacity="0"> </FaArrowDown> : <FaArrowDown className="ArrowSaturday" id={x + 1} onClick={(event) => { downSaturday(event.currentTarget.id) }}></FaArrowDown>}
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
                <div className="addingtaskSaturday">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitleSaturday">Add task</h3>
                        
                        
                    </div>
                    <div className="addTaskSaturday">
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {SaturdayTaskAdd=event.target.value}} className="addTaskInputSaturday" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskSaturday(event.target.value)}}}></input>
                                <div className="addTaskButtonSaturday" onClick={() =>addTaskSaturday(SaturdayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className="expandweekdaySaturday" onClick={expandSaturday}>
                    <FaAngleRight className="expandweekdayarrowSaturday" onClick={expandSaturday}></FaAngleRight>
                    <FaAngleLeft className="minimizeweekdayarrowSaturday" onClick={expandSaturday}></FaAngleLeft>
                </div>
            </div>



            <div className="weekdaySunday">
                <div className="weekdaycontentSunday">
                <div className="weekdaytopSunday">
                <div className="weekdayname">
                    <p className="weekdayinitialSunday">S</p> 
                    <p className="weekdaycontinuationSunday"> unday</p> 
                </div>
                <div>
                    <div className="daynote">
                        <input maxLength="18" onChange={(event) => {SundayNoteVar=event.target.value}} className="DayNoteInputSunday" placeholder={SundayNote.daynote} type="text" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); setSundayNote({daynote: `${event.target.value}`}); localStorage.setItem('sundaydaynote', event.target.value)}}}></input>
                        <div className="addButtonSunday" onClick={() => {setSundayNote({daynote: `${SundayNoteVar}`}); localStorage.setItem('sundaydaynote', SundayNoteVar)}}>EDIT</div>
                    </div>
                </div>
                
                
            </div>
                {
                   TasksSunday.tasks.map(task => (
                    <div className="taskSunday"  key={"1" + i}>
                        {x === 0 ? <FaArrowUp className="ArrowbSunday" opacity="0"></FaArrowUp> : <FaArrowUp className="ArrowSunday" id={x} onClick={(event) => { upSunday(event.currentTarget.id)}}></FaArrowUp>}
                        
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
                          <h3 className="tasktitleSunday">
                              {TasksSunday.tasks[k]} 
                              <p hidden="hidden">
                              {
                                  k = k + 1
                              }
                              </p>
                          </h3>
                          <FaRegTrashAlt className="deleteTaskSunday" id={x} onClick={(event) => deleteSunday(event.currentTarget.id)}></FaRegTrashAlt>
                          
                        </div>
                        <p hidden="hidden">
                        {
                            setArrowWithLength = TasksSunday.tasks.length - 1
                        }
                        </p>
                        {x === setArrowWithLength ? <FaArrowDown className="ArrowbSunday" opacity="0"> </FaArrowDown> : <FaArrowDown className="ArrowSunday" id={x + 1} onClick={(event) => { downSunday(event.currentTarget.id) }}></FaArrowDown>}
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
                <div className="addingtaskSunday">
                    <div className="taskbody">
                        <div>
                            <Taskcheckbox status="A"></Taskcheckbox>
                        </div>
                        <h3 className="tasktitleSunday">Add task</h3>
                        
                        
                    </div>
                    <div className="addTaskSunday">
                            <div className="addTaskForm">
                                <input maxLength="28" placeholder="Your new task's name" onChange={(event) => {SundayTaskAdd=event.target.value}} className="addTaskInputSunday" onKeyUp={(event) => {if(event.keyCode === 13){ event.preventDefault(); addTaskSunday(event.target.value)}}}></input>
                                <div className="addTaskButtonSunday" onClick={() =>addTaskSunday(SundayTaskAdd)}>ADD</div>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className="expandweekdaySunday" onClick={expandSunday}>
                    <FaAngleRight className="expandweekdayarrowSunday" onClick={expandSunday}></FaAngleRight>
                    <FaAngleLeft className="minimizeweekdayarrowSunday" onClick={expandSunday}></FaAngleLeft>
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
