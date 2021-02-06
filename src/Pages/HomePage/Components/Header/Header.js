import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

function Header() {
    const Header = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.45);
    align-items: center;
    transition: 0.25s;
    @media screen and (max-width : 750px) {
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.45);
        align-items: center;
        transition: 0.25s;
    }
    `
    const Logo = styled.img`
    height: 90px;
    width: 90px;
    padding: 60px;
    opacity: 0.84;
    transition: 0.25s;
    :hover {
        opacity: 1;
        transition: 0.25s;
    }

    @media screen and (max-width : 750px) {
        padding: 0px;
        transition: 0.25s;
    }
    `
    const Navigator = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 32%;
    padding: 60px;
    height: 30px;
    align-items: center;
    transition: 0.25s;
    @media screen and (max-width : 750px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 30px;
        align-items: center;
        transition: 0.25s;
    }
    .link {
        text-decoration: none;
    }
    `
    const Bar = styled.p`
    color: rgba(255, 255, 255, 0.90);
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    font-size: 16px;
    transition: 0.25s;
    @media screen and (max-width : 750px) {
        padding: 12px;
        font-size: 21px;
        transition: 0.25s;
    }
    :hover {
        color: white;
        transition: 0.25s;
        cursor: pointer;
        border-bottom: 3px solid white;
    }
    `

    return (
        <Header>
            <Logo src="https://i.ibb.co/s9kptds/Mediamodifier-Design-Template-1.png" alt="logo"></Logo>
            <Navigator>
                <Bar><strong>Seven</strong></Bar>
                <Bar><strong>Features</strong></Bar>
                <Bar><strong>About</strong></Bar>
                <Link className="link" to="/"><Bar color="rgba(0, 0, 0, 0.6)"><strong>Launch</strong></Bar></Link>
            </Navigator>
        </Header>
    );
}

export default Header;