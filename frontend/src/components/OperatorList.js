import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from "../context";
import AnimatedImage from "./AnimatedImage"; 
 
const OperatorList = () => {
    const value = useContext(AppContext);

    return (
        <OperatorListWrapper>
            {value.state.operatorsData.map(operator => {
                const operator_name = operator.operator.toLowerCase();
                const icon = require(`../images/operator/${operator_name}.svg`);
                return <AnimatedImage image={icon} name={operator_name}></AnimatedImage>
            })}
        </OperatorListWrapper>
    )
}

export default OperatorList

const OperatorListWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: auto;

    img {
        filter: drop-shadow(0px 0px 3px var(--mainBlack));
    }
`
