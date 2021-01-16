import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { FaCookie, FaCookieBite } from 'react-icons/all';

function Cookies() {
    const [ ok, setOk ] = useState();
    useEffect(() => {
        setOk(localStorage.getItem('hide'))
    }, [])
    const Box = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: auto;
    bottom: 12px;
    right: 3%;
    background-color: rgba(0, 0, 0, 0.75);
    transition: 0.25s;
    border-top-bottom: 1px solid rgba(255, 255, 255, 0.60);
    padding-bottom: 6px;
    :hover {
        background-color: rgba(0, 0, 0, 0.45);
        transition: 0.25s;
    }
    .Cookie {
        width: 60px;
        height: 60px;
        margin-left: -84px;
        -webkit-transition-delay: 0.5s;
        transition-delay: 0.5s;
        fill: rgba(172, 81, 18, 1);
        padding: 12px;
        :hover {
            opacity: 0;
            -webkit-transition-delay: 0.75s;
            transition-delay: 0.75s;
        }
    }
    .Bite {
        fill: rgba(172, 81, 18, 1);
        width: 60px;
        height: 60px;
        padding: 12px;
    }
    `
    const Title = styled.h2`
    text-align: center;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.60);
    color: rgba(255, 255, 255, 0.60);
    `
    const Biting = styled.div`
    opacity: 0.75;
    `
    const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    `
    const Button = styled.div`
    width: 60%;
    background-color: rgba(255, 255, 255, 0.3);
    text-align: center;
    padding: 6px;
    :hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.45);
    }
    `

    if (ok === null || "" || undefined) {
        return (
            <Box>
                <Title>Do you want some cookies?</Title>
                    <Container>
                        <Biting><FaCookieBite className="Bite"></FaCookieBite><FaCookie className="Cookie"></FaCookie></Biting>
                        <p>This application uses Cookies for its functionalities.</p>
                    </Container>
                <Button onClick={() => {setOk("ok"); localStorage.setItem('hide', "hide")}}><strong>Ok! Do not show this again.</strong></Button>
            </Box>
        );
        
    } else {
        return (<p></p>);
    }
}

export default Cookies;