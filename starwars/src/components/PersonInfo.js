import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const PplInfo = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1.5fr;
`;
const InfoLi = styled.li`
    list-style-type: none;
    text-align: left;
`;

export default function PersonInfo(props) {
    // console.log(props.info);
    const ColoredLi = styled.li`
        color: ${props.info.eye_color};
        width: 70%;
        list-style-type: none;
        text-align: left;
    `;

    const [planet, setPlanet] = useState([]);
    return (
        <div>
            {useEffect(() => {
                axios
                    .get(props.info.homeworld.toString())
                    .then(res => {
                        // console.log(res);
                        setPlanet(res.data);
                    })
                    .catch(error =>
                        console.log(
                            "eeeeeerrrrrrrrrrrrroooooooooooooooooorrrrorororoororroorror1010101001100101010101",
                            error
                        )
                    );
            }, [])}
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
        </div>
    );
}
