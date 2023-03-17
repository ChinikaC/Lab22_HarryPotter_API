const Character = ({ character }) => {
    const { name, house, image } = character;

    return (
        <div className="information">
            
                <h2><u>{name}</u></h2>
                <p>House: {house}</p>
                <p>Species: {character.species}</p>
                <br/><>Wand: {character.wand.wood}</>,
                <p> {character.wand.core},</p>
                <p> {character.wand.length}</p>
                <img src={image} alt={`${name} from ${house}`} />

            
        </div>
    );

}

export default Character;