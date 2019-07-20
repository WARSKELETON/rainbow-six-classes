import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { AppContext } from "../context";
import AnimatedImage from "./AnimatedImage";
 
const OperatorList = () => {
    const value = useContext(AppContext);
    const type = value.state.type;
   /*  const operators = value.state.operatorsData.filter(operator => operator.type === type); */

    return (
        <OperatorListWrapper type={type}>
            {value.state.operatorsData.map((operator, index) => {
                if (operator.type === type) {
                    const operator_name = operator.operator.toLowerCase();
                    const icon = require(`../images/operator/${operator_name}.svg`);
                    return (
                        <Link style={{ textDecoration: 'none' }} to={{
                            pathname: `/class/${operator_name}`,
                            state: {
                                index: index
                            }
                        }}>
                            <AnimatedImage image={icon} name={operator_name}></AnimatedImage>
                        </Link>
                    )
                }
            })}
        </OperatorListWrapper>
    )
}

export default OperatorList

const OperatorListWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    grid-template-rows: auto;
    background: ${props => props.type === "attacker" ? "linear-gradient(214.1deg, #f58a07 0%, #df5104 100%)" : "linear-gradient(214.1deg, #0093e6 0%, #094f9b 100%)"} ;
    border-radius: 10px;

    img {
        filter: drop-shadow(0px 0px 10px var(--mainBlack));
    }
`
