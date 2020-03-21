import React from "react";
import Switch from "./Switch";
import styled from "styled-components";

export default function SwitchHeader() {
    const HeaderDiv = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    `;
    return (
        <HeaderDiv>
            <h2>To Display Everyone from the known reaches of the Galaxies!</h2>
            <Switch />
        </HeaderDiv>
    );
}
