import React from "react";
import PersonInfo from "./PersonInfo";
import MainInfo from "./MainInfo";
import styled from "styled-components";

export default function Person(props) {
    // console.log(props);
    const PersonBorder = styled.section`
        border: 3px solid black;
        border-radius: 7px;
        margin: 2%;
        padding: 2%;
        width: 90%;
        background: rgba(0, 0, 0, 0.65);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span {
            font-size: 2rem;
            width: 5%;
        }
    `;
    return (
        <PersonBorder>
            <MainInfo info={props.wholePerson} />
            <PersonInfo info={props.wholePerson} />
        </PersonBorder>
    );
}
