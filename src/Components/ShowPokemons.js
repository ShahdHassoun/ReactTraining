const ShowPokemons = ({pokemonData}) => {
    return ( <div className="pokemonContainer">
        {pokemonData && pokemonData.length > 0 ? (
          pokemonData.map((item, index) => (
            <div className="pokemon-sec" key={index}>
              <img
                src={item.imgUrl}
                alt={item.name}
              />
              <h3>
                {index + 1}-{item.name}
              </h3>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> );
}
 
export default ShowPokemons;