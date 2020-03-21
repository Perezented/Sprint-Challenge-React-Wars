import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "./Person";
import styled from "styled-components";

const SidingSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
`;

export default function Card() {
    // https://swapi.co/api/people/
    const [person, setPerson] = useState([]);
    const [planetUrl, setURL] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/", `${planetUrl}`)
            .then((res, res0) => {
                const peopleList = res.data.results;
                console.log(res, res0);
                setPerson(peopleList);
                console.log(res.data.results[0].homeworld);
                setURL(res.data.results[0].homeworld);

                // peopleList.map(val => console.log(val));
            })
            .catch(error =>
                console.log(
                    "Errrrrroorororororoorororoorororoorororororo10101001010101010100101000101001",
                    error
                )
            );
    }, []);
    return (
        <SidingSection>
            {person.map((p, i) => {
                return (
                    <Person
                        name={p.name}
                        key={i}
                        birthYear={p.birth_year}
                        wholePerson={p}
                    />
                );
            })}
        </SidingSection>
    );
}
