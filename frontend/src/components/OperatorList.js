import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from "../context";
import AnimatedImage from "./AnimatedImage";
import { Link } from "react-router-dom"; 
 
const OperatorList = () => {
    const value = useContext(AppContext);

    return (
        <OperatorListWrapper>
            {value.state.operatorsData.map((operator, index) => {
                const operator_name = operator.operator.toLowerCase();
                const icon = require(`../images/operator/${operator_name}.svg`);
                return (
                    <Link style={{ textDecoration: 'none' }} to={{
                        pathname: operator_name,
                        state: {
                            operatorIndex: index
                        }
                    }}>
                        <AnimatedImage image={icon} name={operator_name}></AnimatedImage>
                    </Link>
                )
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
