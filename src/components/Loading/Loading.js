import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

function Loading() {
    const [ renderState, setRenderState ] = useState();
    useEffect(() => {
        setRenderState(0);
    }, [])
    function setRenderStateFunction() {
        setRenderState(1);
    }
    useEffect(() => {
        setTimeout(setRenderStateFunction, 2000);
    }, [])
    const LoadingBox = styled.div`
    ${renderState === 0 ? `@keyframes disappear {
        0% {
            opacity: 1;
            transition: 0.1s;
        }

        90% {
            transition: 0.1s;
            opacity: 0;
        }
        100% {
            opacity: 0;
            display: none;
        }
    }
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    animation: disappear 0.5s forwards;
    animation-delay: 1.05s;
    animation-iteration-count: none;` : `display: flex;
    position: fixed;
    top: -100000;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;`}
    
    `
    const Loader = styled.div`
    @keyframes animation {
        0% {
            border-left: 6px solid rgba(255, 255, 255, 0.30);
            border-bottom: 6px solid rgba(255, 255, 255, 0.30);
            border-right: 6px solid rgba(255, 255, 255, 0.30);
            border-top: 6px solid rgba(255, 255, 255, 0.30);
            transition: 0.1s;
        }
        0.5% {
            border-left: 6px solid rgba(255, 255, 255, 0.30);
            border-bottom: 6px solid rgba(255, 255, 255, 0.30);
            border-right: 6px solid rgba(255, 255, 255, 0.30);
            border-top: 6px solid rgba(255, 255, 255, 0.30);
            transition: 0.1s;
        }
        12.5% {
            border-left: 6px solid rgba(255, 255, 255, 0.50);
            border-bottom: 6px solid rgba(255, 255, 255, 0.30);
            border-right: 6px solid rgba(255, 255, 255, 0.30);
            border-top: 6px solid rgba(255, 255, 255, 0.30);
            transition: 0.1s;
        }
        25% {
            border-left: 6px solid rgba(255, 255, 255, 0.50);
            border-bottom: 6px solid rgba(255, 255, 255, 0.30);
            border-right: 6px solid rgba(255, 255, 255, 0.50);
            border-top: 6px solid rgba(255, 255, 255, 0.30);
            transition: 0.1s;
        }
        37.5% {
            border-left: 6px solid rgba(255, 255, 255, 0.50);
            border-bottom: 6px solid rgba(255, 255, 255, 0.84);
            border-right: 6px solid rgba(255, 255, 255, 0.50);
            border-top: 6px solid rgba(255, 255, 255, 0.30);
            transition: 0.1s;
        }
        50% {
            border-left: 6px solid rgba(255, 255, 255, 0.50);
            border-bottom: 6px solid rgba(255, 255, 255, 0.75);
            border-right: 6px solid rgba(255, 255, 255, 0.50);
            border-top: 6px solid rgba(255, 255, 255, 0.84);
            transition: 0.1s;
        }
        90% {
            border-left: 6px solid rgba(255, 255, 255, 0.50);
            border-bottom: 6px solid rgba(255, 255, 255, 0.75);
            border-right: 6px solid rgba(255, 255, 255, 0.50);
            border-top: 6px solid rgba(255, 255, 255, 0.84);
            opacity: 1;
            transition: 0.1s;
        }

        100% {
            display: none;
            opacity: 0;
            img {
                display: none;
            }
        }
    }
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 170px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    animation: animation forwards 2s;
    animation-iteration-count: 1;
    border-left: 6px solid rgba(255, 255, 255, 0.50);
    border-bottom: 6px solid rgba(255, 255, 255, 0.75);
    border-right: 6px solid rgba(255, 255, 255, 0.50);
    border-top: 6px solid rgba(255, 255, 255, 0.84);
    `
    const Img = styled.img`
    @keyframes imgdisappear {
        0% {
            display: flex;
        }
        99% {
            display: none;
        }
        100% {
            display: none;
        }
    }
    animation: imgdisappear 1s forwards;
    height: 120px;
    width: 120px;
    `

    return(
    <LoadingBox>
        <Loader>
            <Img height="120px" width="120px" src="https://i.ibb.co/s9kptds/Mediamodifier-Design-Template-1.png" alt="logo"></Img>
        </Loader>
    </LoadingBox>
    );
}

export default Loading;