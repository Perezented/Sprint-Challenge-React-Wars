import React from "react";
import styled from "styled-components";

const PplInfo = styled.div`
    width: 55%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
`;
const InfoLi = styled.li`
    list-style-type: none;
    text-align: left;
`;

export default function PersonInfo(props) {
    const ColoredLi = styled.li`
        color: ${props.info.eye_color};
        width: 70%;
        list-style-type: none;
        text-align: left;
    `;
    console.log(props.info);
    return (
        <PplInfo>
            <InfoLi>Gender: {props.info.gender}</InfoLi>
            <InfoLi>Height: {props.info.height} cm</InfoLi>
            <InfoLi>Mass: {props.info.mass} kg</InfoLi>
            <ColoredLi>Eye Color: {props.info.eye_color}</ColoredLi>
            <InfoLi>Hair Color: {props.info.hair_color}</InfoLi>
            <InfoLi>
                Skin Color/ Most Outer Layer Color: {props.info.skin_color}
            </InfoLi>
        </PplInfo>
    );
}
