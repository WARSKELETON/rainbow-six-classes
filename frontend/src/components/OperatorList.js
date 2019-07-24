import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context";
import AnimatedImage from "./AnimatedImage";

const OperatorList = () => {
    const value = useContext(AppContext);
    let type = value.state.type;
    /*     const [operators, setOperators] = useState(
        value.state.operatorsData.filter(operator => operator.type === type)
    );

    useEffect(() => {
        const operators = value.state.operatorsData.filter(
            operator => operator.type === type
        );
        setOperators(operators);
    }, [type]); */

    const operators = value.state.operatorsData.filter(
        operator => operator.type === type
    );

    return (
        <OperatorListWrapper type={type}>
            {operators.map(operator => {
                const operator_name = operator.operator.toLowerCase();
                const icon = require(`../images/operator/${operator_name}.svg`);
                return (
                    <Link
                        style={{ textDecoration: "none" }}
                        to={{
                            pathname: `/class/${operator_name}`,
                            state: {
                                id: operator.id
                            }
                        }}
                    >
                        <AnimatedImage
                            key={operator.id}
                            image={icon}
                            name={operator_name}
                        />
                    </Link>
                );
            })}
        </OperatorListWrapper>
    );
};

export default OperatorList;

const OperatorListWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    grid-template-rows: auto;
    background: ${props =>
        props.type === "attacker"
            ? "linear-gradient(214.1deg, #f58a07 0%, #df5104 100%)"
            : "linear-gradient(214.1deg, #0093e6 0%, #094f9b 100%)"};
    border-radius: 10px;

    img {
        filter: drop-shadow(0px 0px 10px var(--mainBlack));
    }
`;
