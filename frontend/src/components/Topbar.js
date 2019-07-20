import React, { useContext } from 'react';
import { AppContext } from '../context';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Topbar = () => {
    const value = useContext(AppContext);
    const typeColor = value.getTypeColor();

    return (
        <TopbarWrapper>
            <Name>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1>R6 Classes <span role="img" aria-label="Folder">📁</span></h1>
                </Link>
            </Name>
            <Type typeColor={typeColor}>
                <button onClick={() => value.toggleType()}>
                    {value.state.type}
                </button>
            </Type>
        </TopbarWrapper>
    )
}

export default Topbar

const TopbarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    grid-template-areas:
        "name type";
`

const Name = styled.div`
    grid-area: name;
`

const Type = styled.div`
    grid-area: type;

    button {
        display: block;
        cursor: pointer;
        text-transform: uppercase;
        border: 1px solid ${props => props.typeColor};
        border-radius: 10px;
        background-color: transparent;
        color: ${props => props.typeColor};
        font-size: 14px;
        font-family: 'Roboto';
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 35px;
        padding-left: 35px;
        transition: background-color 0.5s;
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;

        &:hover {
            background-color: ${props => props.typeColor};
            color: #ffffff;
        }
    }
`
