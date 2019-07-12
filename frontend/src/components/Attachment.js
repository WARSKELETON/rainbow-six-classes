import React from 'react';
import styled from "styled-components";

const Attachment = (props) => {
    const attachment = props.attachment.toLowerCase();
    const attachment_underscore = attachment.replace(/ /g, "_");
    const icon = require(`../images/attachment/${attachment_underscore}.png`);

    return (
        <AttachmentWrapper>
            <Icon>
                <img src={icon} alt="Holographic Sight" style={{ zoom: "5%" }}></img>
            </Icon>
            <Name>
                <p>{attachment}</p>
            </Name>
        </AttachmentWrapper>
    )
}

export default Attachment

const AttachmentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 30px) auto;
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

    p {
        text-transform: capitalize;
        font-weight: 500;
    }
`
