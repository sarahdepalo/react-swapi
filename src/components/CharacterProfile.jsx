import {useParams } from 'react-router-dom'
import CharacterContainer from './CharacterContainer';

const CharacterList = (props) => {
    const {id} = useParams();
    const character = props.characters[id]
    return (
        <>
        <CharacterContainer>
        <h2>{character.name}</h2>
        <p>{character.birth_year}</p>
        <p>{character.hair_color}</p>
        <p>{character.eye_color}</p>
        </CharacterContainer>
        </>
    )
}

export default CharacterList;