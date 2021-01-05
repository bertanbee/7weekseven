import React from 'react';
import styled from 'styled-components';

import { FaCheck, FaTimes, FaRegCircle, FaPlus } from 'react-icons/fa';

function Taskcheckbox(props) {
    var fillcolorY = "";
    var fillcolorN = "";
    var fillcolorX = "";
    var fillcolorA = "";
    const Y = styled.div`
        ${
            props.status === "Y" ?
               `height: 54px;
               width: 54px;
               background-color: chartreuse;
               opacity: 30%;
               transition: 0.17s;
               margin: 3px;
               border-radius: 100%;
               display: flex;
               justify-content: center;
               align-items: center;`

               : `
               height: 0;
               width: 0;
               ${fillcolorY = "transparent"}
               `
               
         }
    `
    const N = styled.div`
        ${
            props.status === "N" ?
               `height: 54px;
               width: 54px;
               background-color: red;
               opacity: 30%;
               transition: 0.17s;
               margin: 3px;
               border-radius: 100%;
               display: flex;
               justify-content: center;
               align-items: center;`

               : `
               height: 0;
               width: 0
               ${fillcolorN = "transparent"}`
         }
    `

    const X = styled.div`
        ${
          props.status === "X" ?
             `height: 54px;
             width: 54px;
             background-color: white;
             opacity: 15%;
             transition: 0.17s;
             margin: 3px;
             border-radius: 100%;
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
             `

             : `
             height: 0;
             width: 0
             ${fillcolorX = "transparent"}`
             
        }
    `

    const A = styled.div`
        ${
            props.status === "A" ?
             `height: 54px;
             width: 54px;
             opacity: 30%;
             transition: 0.17s;
             margin: 3px;
             border-radius: 100%;
             display: flex;
             justify-content: center;
             align-items: center;
             background-color: white;`

             : `
             height: 0;
             width: 0;
             ${fillcolorA = "transparent"}`
        }
        
    `

    return (
        <>
        <Y className="Y">
            <FaCheck fill={fillcolorY}></FaCheck>
        </Y>
        <N className="N">
            <FaTimes fill={fillcolorN}></FaTimes>
        </N>
        <X className="X">
            <FaRegCircle fill={fillcolorX}></FaRegCircle>
        </X>
        <A className="A">
            <FaPlus fill={fillcolorA}></FaPlus>
        </A>
        
        </>
    );
}

export default Taskcheckbox;