import Character from "./Character"

const CharacterList = ({characters, house}) => {
    const characterComponents = characters.map((character, index)=> {
        return (
        <Character 
        character = {character} 
        key={index}
        house={house}/>
        );
    });
    
    
    return (
        <>
        <ul>
            {characterComponents}
        </ul>
        </>
        
    )
    
}

export default CharacterList;