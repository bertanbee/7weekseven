import React from 'react';

import Animation from '../Animation/Animation';

import styled from 'styled-components';

function Show() {
    const Show = styled.div`
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.96), rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    transition: 0.25s;
    @media screen and (max-width : 750px) {
        height: auto;
        transition: 0.25s;
    }
    `
    const Box = styled.div`
    display: flex;
    flex-direction: row;
    transition: 0.25s;
    @media screen and (max-width : 750px) {
        display: flex;
        flex-direction: column;
        transition: 0.25s;
    }
    `
    const StringBox = styled.div`
    border-right: 1px solid rgba(255, 255, 255, 0.84);
    justify-content: center;
    align-items: center;
    vertical-align: center;
    transition: 0.25s;
    @media screen and (max-width : 750px) {
        margin-top: 60px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.84);
        border-top: 1px solid rgba(255, 255, 255, 0.84);
        border-right: 1px solid transparent;
        transition: 0.25s;
    }
    :hover .organizestring {
        color: white;
        transition: 0.25s; 
    }
    `
    const OrganizeString = styled.p`
    font-size: 93px;
    color: rgba(255, 255, 255, 0.84);
    text-align: right;
    padding: 10px;
    transition: 0.25s; 
    @media screen and (max-width : 750px) {
        text-align: center;
        font-size: 60px;
        transition: 0.25s;
    }
    `
    const AddingTask = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    width: 750px;
    margin-left: 12px;
    transition: 0.25s;
    @media screen and (max-width : 750px) {
        display: none;
        transition: 0.25s;
    }
    `
    return (
        <Show>
            <Box>
                <StringBox>
                    <OrganizeString className="organizestring">TIDY</OrganizeString>
                    <OrganizeString className="organizestring">YOUR</OrganizeString>
                    <OrganizeString className="organizestring">WEEK</OrganizeString>
                </StringBox>
                <AddingTask>
                    <Animation></Animation>
                </AddingTask>
            </Box>
            
        </Show>
    );
}

export default Show;