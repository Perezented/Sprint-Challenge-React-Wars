import React, { useState, useEffect } from "react";
import axios from "axios";
import Name from "./Name";
export default function Card() {
    // https://swapi.co/api/people/
    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(res => {
                const peopleList = res.data.results;
                console.log(peopleList);
                setPerson(peopleList);
                peopleList.map(val => console.log(val));
            })
            .catch(error =>
                console.log(
                    "Errrrrroorororororoorororoorororoorororororo10101001010101010100101000101001",
                    error
                )
            );
    }, []);
    return (
        <section>
            {person.map(p => {
                return <Name name={p.name} />;
            })}
            <Name />
        </section>
    );
}
