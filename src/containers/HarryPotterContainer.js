import { useState, useEffect} from "react"
import CharacterList from "../components/CharacterList";


const SERVER_URL = "https://hp-api.onrender.com/api/characters";

const HarryPotterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(SERVER_URL)
        .then((response) => response.json())
        .then((response) => setCharacters(response))
        .catch((err) => setError(err.message));
    }, []);

    const updateHarryPotterData = async () => {
        const response = await fetch("https://hp-api.onrender.com/api/characters")
        const data = await response.json();
        setCharacters(data);
    }

    return (
        <>
        {characters ? <CharacterList characters={characters}/> : <p>Loading</p>}
        </>
    )

}



export default HarryPotterContainer;