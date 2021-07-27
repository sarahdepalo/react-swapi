import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
    console.log('CharacterList:', characters);
    return (
        <>
            {!!characters.length ? (
                <>
                    <h2>Choose A Star Wars Character to Learn About</h2>
                    <ul>
                        {characters.map((character, index) => {
                          return  <li key={character.name}>
                                <Link to={`/character/${index}`}>
                                    {character.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                </>
            ) : (
                <p>Loading Data from API</p>
            )}
        </>
    )

}

export default CharacterList;