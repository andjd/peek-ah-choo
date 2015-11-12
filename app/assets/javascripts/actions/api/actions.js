(function () {
  var ApiActions = window.ApiActions = {};

  ApiActions.receiveAllPokemons = function (data) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data
    });
  };

  ApiActions.receiveSinglePokemon = function (data) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.SINGLE_POKEMON_RECEIVED,
      pokemon: data
    });
  };
}());
