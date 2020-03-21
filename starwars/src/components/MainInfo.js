import React from "react";
import styled from "styled-components";

export default function MainInfo(props) {
    console.log(props.info.name);
    const Underline = styled.div`
        border-bottom: 1px solid white;
        margin-bottom: 20px;
    `;
    return (
        <Underline>
            <h3>
                Name: <span>{props.info.name}</span>
            </h3>
            <h6>Birth Year: {props.info.birth_year}</h6>
        </Underline>
    );
}
