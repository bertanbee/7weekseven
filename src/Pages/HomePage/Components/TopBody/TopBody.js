import React from 'react';

import Header from '../Header/Header';
import Show from '../Show/Show';
import GoBelow from '../GoBelow/GoBelow';

import styled from 'styled-components';

import './styles.css';

function TopBody() {
    const TopBody = styled.div`
    
    background-repeat: no-repeat;
    background-size: cover;
    `

    return (
        <TopBody className="TopBody">
            <Header></Header>
            <Show></Show>
            <GoBelow></GoBelow>
        </TopBody>
    );
}

export default TopBody;