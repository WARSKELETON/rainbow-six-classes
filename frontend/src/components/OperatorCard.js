import React, { useState } from 'react';
import * as Vibrant from 'node-vibrant';
import styled from "styled-components";
import { lighten } from 'polished';
import weapon from "../416-C_Carbine.png";

const OperatorCard = () => {
    const jager = require("../images/operator/jager.svg");
    const jager_pallete = require("../images/operator/jager.png");
    const [vibrantHex, setVibrantHex] = useState("")
    Vibrant.from(jager_pallete).getPalette((err, palette) => setVibrantHex(palette.Vibrant.hex))

    return (
        <OperatorCardWrapper color={vibrantHex}>
            <Icon>
                <img src={jager} alt="jager" style={{ zoom: "10%" }}></img>
            </Icon>
            <Name>
                <h2>Jager</h2>
            </Name>
            <WeaponIcon>
                <img src={weapon} alt="jager" style={{ zoom: "50%" }}></img>
            </WeaponIcon>
            <WeaponName>
                <p>416-C_Carbine</p>
            </WeaponName>
        </OperatorCardWrapper>
    )
}

export default OperatorCard

const OperatorCardWrapper = styled.div`
    background: linear-gradient(214.1deg, ${props => props.color && lighten(0.5, props.color)} 0%, ${props => props.color} 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
    border-radius: 10px;
    display: grid;
    grid-template-columns: 80px auto 80px;
    grid-template-rows: auto 100px auto auto 100px;
    grid-template-areas:
        ". icon ."
        ". name ."
        ". weapon-icon ."
        ". weapon-name ."
        ". . .";
`

const Icon = styled.div`
    grid-area: icon;
    filter: drop-shadow(0px 0px 5px var(--mainBlack));
`

const Name = styled.div`
    grid-area: name;

    h2 {
        text-align: center;
        font-weight: 900;
        font-style: italic;
    }
`

const WeaponIcon = styled(Icon)`
    grid-area: weapon-icon;
`

const WeaponName = styled.div`
    grid-area: weapon-name;

    p {
        text-align: center;
        font-weight: 700;
    }
`
