import React from "react";
import Switch from "./Switch";
import styled from "styled-components";
const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default function SwitchHeader() {
    return (
        <HeaderDiv>
            <h2>To Display Everyone from the known reaches of the Galaxies!</h2>
            <Switch />
        </HeaderDiv>
    );
}
