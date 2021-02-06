import React from 'react';

import styled from 'styled-components';

function GoBelow() {
    const Message = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.96));
    `
    const BallContainer = styled.div`
    height: 54px;
    width: 16px;
    display: flex;
    justify-content: center;
    border: 1px solid white;
    border-radius: 50px;

    `
    const Ball = styled.div`
    @keyframes animation {
        0% {
            margin-top: 2px;

        }
        10% {
            margin-top: 4px;
            height: 10px;
            width: 10px;
        }
        20% {
            margin-top: 6px;
            height: 10.5px;
            width: 10.5px;

        }
        30% {
            margin-top: 10px;
            height: 11px;
            width: 11px;
        }
        40% {
            margin-top: 18px;
            height: 12px;
            width: 12px;
       }
        50% {
            margin-top: 34px;
            height: 14px;
            width: 14px;      
        }
        60% {
            margin-top: 2px;
            height: 12px;
            width: 12px;      
        }
        70% {
            margin-top: 2px;
            height: 10.5px;
            width: 10.5px;
        }
        80% {
            margin-top: 2px;
            height: 10px;
            width: 10px;
        }
        90% {
            margin-top: 2px;
            height: 10px;
            width: 10px;
        } 
        }

        100% {
            margin-top: 2px;
            height: 10px;
            width: 10px;
        }
    };
    height: 10px;
    width: 10px;
    border-radius: 100%;
    margin-top: 2px;
    background-color: rgba(255, 255, 255, 0.75);
    animation-name: animation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite; 
    `
    return (
        <>
        <Message>
            <BallContainer>
                <Ball></Ball>
            </BallContainer>
            
        </Message>
        </>
    );
}

export default GoBelow;