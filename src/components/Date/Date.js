import React from 'react';
var dateTime = require('get-date');


function Date() {
    var time = dateTime();
    var timearray = time.split('/');
    console.log("timearray" + timearray)
    var month = ""
    var monthkey = 0;

    var day = Number(timearray[0])
    var year = Number(timearray[2]) 
    var yearkey = Math.floor((year-2000)/4)+(year-2000)%7;

    function setMonth(monthinput) {
        switch (monthinput) {
            case "01" :
                month = "JANUARY";
                monthkey = 1
                break
            case "02" :
                month = "FEBRUARY"
                monthkey = 4
                break
            case "03" :
                month = "MARCH"
                monthkey = 4
                break
            case "04" :
                month = "APRIL"
                monthkey = 0
                break
            case "05" :
                month = "MAY"
                monthkey = 2
                break 
            case "06" :
                month = "JUNE"
                monthkey = 5
                break
            case "07" :
                month = "JULY"
                monthkey = 0
                break
            case "08" :
                month = "AUGUST"
                monthkey = 3
                break
            case "09" :
                month = "SEPTEMBER"
                monthkey = 6
                break
            case "10":
                month = "OCTOBER"
                monthkey = 1
                break
            case "11" :
                month = "NOVEMBER"
                monthkey = 4
                break
            case "12" :
                month = "DECEMBER"
                monthkey = 6
                break    
            default:
                break;         
        }
    }

    setMonth(timearray[1])

    var weekdaynumber = (day + monthkey + yearkey)%7 + 1

    var weekdaystring = "";

   function setweekday(number) {
       switch (number) {
            case 3:
               weekdaystring="SUNDAY"
               break;

            case 4: 
               weekdaystring="MONDAY"
               break
            case 5:
               weekdaystring="TUESDAY"
               break;
            case 6:
               weekdaystring="WEDNESDAY"
               break;
            case 7:
               weekdaystring="THURSDAY"
               break;
            case 1:
               weekdaystring="FRIDAY"
               break;
            case 2:
               weekdaystring="SATURDAY"
               break;
       
           default:
               break;
       }
   } 

   setweekday(weekdaynumber)

    return (
    <p>{weekdaystring}, {timearray[0]} {month} </p>
    );
}

export default Date;