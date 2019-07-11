import React from 'react';
import styled from "styled-components";
import holo from "../Holographic.png";

const Attachment = () => {
    return (
        <AttachmentWrapper>
            <Icon>
                <img src={holo} alt="Holographic Sight" style={{ zoom: "5%" }}></img>
            </Icon>
            <Name>
                <p>Holographic Sight</p>
            </Name>
        </AttachmentWrapper>
    )
}

export default Attachment

const AttachmentWrapper = styled.div`
    grid-area: attachment;
    display: grid;
    grid-template-columns: 10px 30px auto;
    grid-template-rows: auto;
    grid-template-areas:
        ". attachment-icon attachment-name";
`

const Icon = styled.div`
    grid-area: attachment-icon;
    filter: drop-shadow(0px 0px 3px var(--mainBlack));

    img {
        margin-top: 250px;
    }
`

const Name = styled.div`
    grid-area: attachment-name;
`
