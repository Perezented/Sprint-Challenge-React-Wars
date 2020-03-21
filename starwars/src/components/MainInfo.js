import React from "react";
import styled from "styled-components";
const Underline = styled.div`
    border-bottom: 1px solid white;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    justify-items: center;
    align-items: center;
`;

export default function MainInfo(props) {
    // console.log(props.info.name);
    return (
        <Underline>
            <div>
                <h3>
                    Name: <span>{props.info.name}</span>
                </h3>
                <h6>Birth Year: {props.info.birth_year}</h6>
            </div>
            <button>See Planets, Vehicles, StarShips..</button>
        </Underline>
    );
}
