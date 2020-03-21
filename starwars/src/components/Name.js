import React from "react";
import PersonInfo from "./PersonInfo";
import styled from "styled-components";

export default function Person(props) {
    // console.log(props);
    const PersonBorder = styled.section`
        border: 3px solid black;
        border-radius: 7px;
        margin: 2%;
        padding: 2%;
        background: rgba(0, 0, 0, 0.65);
        color: #fff;
        display: flex;
        justify-content: space-around;
    `;

    return (
        <PersonBorder>
            <div>
                {" "}
                <h3>Name: {props.name}</h3>
                <h6>Birth Year: {props.birthYear}</h6>
            </div>
            <PersonInfo info={props.wholePerson} />
        </PersonBorder>
    );
}
