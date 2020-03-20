import React from "react";
import axios from "axios";

export default function Card() {
    // https://swapi.co/api/people/
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(res => {
                const peopleList = res.data.results;
                console.log(peopleList);
                updatePersons(peopleList);
            })
            .catch(error =>
                console.log(
                    "Errrrrroorororororoorororoorororoorororororo10101001010101010100101000101001",
                    error
                )
            );
    }, []);
    const [person, updatePersons] = useState({});
    return <section></section>;
}
