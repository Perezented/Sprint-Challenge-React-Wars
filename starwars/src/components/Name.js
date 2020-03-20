import React from "react";

export default function Person(props) {
    console.log(props.name);
    return (
        <>
            <h3>{props.name}</h3>
            <h6>{props.birthYear}</h6>
        </>
    );
}
