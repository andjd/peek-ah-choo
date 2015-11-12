(function () {
  var ApiActions = window.ApiActions = {};

  ApiActions.receiveAllPokemons = function (data) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data
    });
  };





}());
