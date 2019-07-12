import React, { useState, useContext } from 'react';
import { AppContext } from '../context';
import * as Vibrant from 'node-vibrant';
import styled from "styled-components";
import { lighten } from 'polished';
import AttachmentList from './AttachmentList';

const OperatorCard = () => {
    const value = useContext(AppContext);
    const [vibrantHex, setVibrantHex] = useState("");
    const operator = value.state.operatorsData[3];

    const operator_name = operator.operator.toLowerCase();
    const weapon_name = operator.primary_weapon;
    const weapon_name_underscore = weapon_name.replace(/ /g, "_");
    const icon = require(`../images/operator/${operator_name}.svg`);
    const icon_pallete = require(`../images/operator/${operator_name}.png`);
    const weapon_icon = require(`../images/weapon/R6S_wpn_${weapon_name_underscore}.png`);
    Vibrant.from(icon_pallete).getPalette((err, palette) => setVibrantHex(palette.Vibrant.hex));

    return (
        <OperatorCardWrapper color={vibrantHex}>
            <Icon>
                <img src={icon} alt={operator_name} style={{ width: "50%" }}></img>
            </Icon>
            <Name>
                <h2>{operator_name}</h2>
            </Name>
            <WeaponIcon>
                <img src={weapon_icon} alt={weapon_name} style={{ zoom: "100%" }}></img>
            </WeaponIcon>
            <WeaponName>
                <p>{weapon_name}</p>
            </WeaponName>
            <AttachmentList operator={operator}></AttachmentList>
        </OperatorCardWrapper>
    )
}

export default OperatorCard

const OperatorCardWrapper = styled.div`
    background: linear-gradient(214.1deg, ${props => props.color && lighten(0.5, props.color)} 0%, ${props => props.color} 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
    border-radius: 10px;
    display: grid;
    grid-template-columns: 50px auto 50px;
    grid-template-rows: auto 100px repeat(3, auto) 100px;
    grid-template-areas:
        ". icon ."
        ". name ."
        ". weapon-icon ."
        ". weapon-name ."
        "attachment attachment attachment"
        ". . .";
`

const Icon = styled.div`
    grid-area: icon;
    filter: drop-shadow(0px 0px 5px var(--mainBlack));

    img {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
`

const Name = styled.div`
    grid-area: name;

    h2 {
        text-transform: capitalize;
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
