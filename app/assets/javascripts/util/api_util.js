(function () {
  var ApiUtil = window.ApiUtil = {};

  ApiUtil.fetchAllPokemons = function () {
    $.ajax({
      url: 'api/pokemon',
      type: "GET",
      dataType: "json",
      success: function (data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  };

  ApiUtil.fetchSinglePokemon = function (pokemonId) {
    $.ajax({
      url: "api/pokemon/" + pokemonId,
      type: "GET",
      dataType: "json",
      success: function (data) {
        ApiActions.receiveSinglePokemon(data);
      }
    });
  };
})();
