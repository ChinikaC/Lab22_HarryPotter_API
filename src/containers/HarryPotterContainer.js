import { useState, useEffect } from "react"
import CharacterList from "../components/CharacterList";


const SERVER_URL = "https://hp-api.onrender.com/api/characters";

const HarryPotterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState("");
    const [house, setHouse] = useState(null);
    const [filterCharacters, setFilterCharacters] = useState([]);
    

    useEffect(() => {
        fetch(SERVER_URL)
            .then((response) => response.json())
            .then((response) => setCharacters(response))
            .catch((err) => setError(err.message));
    }, []);

    useEffect(() => {
        if(house !== null){
            const filterCharacters = characters.filter((character) => character.house === house);
            setFilterCharacters(filterCharacters);
        } 
        else {
            setFilterCharacters(characters);
        }
    
    },[house,characters]);

    const updateCharacterData = async () => {
        const response = await fetch("https://hp-api.onrender.com/api/characters")
        const data = await response.json();
        setCharacters(data);
    }

    const handleHouseChange = (event) => {
        setHouse(event.target.value);
    }

    return (
        <>
            <select onChange={handleHouseChange}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="">No House</option>
                <option value="Select_A_House" selected="selected">Select a House</option>
            </select>
            {filterCharacters ? <CharacterList characters={filterCharacters} /> : <p>Loading</p>}
        </>
    )

}



export default HarryPotterContainer;