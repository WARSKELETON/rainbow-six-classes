import React from 'react';
import Attachment from "./Attachment";
import styled from "styled-components";

const AttachmentList = (props) => {
    const operator = props.operator;

    return (
        <AttachmentListWrapper>
            {operator.attachments.map(attachment => {
                return <Attachment key={attachment} attachment={attachment}></Attachment>
            })}
        </AttachmentListWrapper>
    )
}

export default AttachmentList

const AttachmentListWrapper = styled.div`
    grid-area: attachment;
`
