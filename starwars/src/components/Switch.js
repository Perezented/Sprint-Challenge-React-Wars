import React from "react";
import styled from "styled-components";
const NicerButton = styled.button`
    width: 10%;
    padding: 1% 0;
    font-size: 1rem;
    font-weight: 600;
`;

export default function Switch() {
    return <NicerButton>Switch 'Merican</NicerButton>;
}
