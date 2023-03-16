import Character from "./Character"

const CharacterList = ({characters}) => {
    const characterComponents = characters.map((character, index)=> {
        return <Character character = {character} key={index}/>
    })
    
    
    return (
        <>
        <ul>
            {characterComponents}
        </ul>
        </>
        
    )
    
}

export default CharacterList;