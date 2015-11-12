(function () {

  var _pokemons = [];

  var reset = function (data) {
    _pokemons = data;
  };

  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PokemonConstants.POKEMONS_RECEIVED:
          reset(payload.pokemons);
          break;
      }
    })
  });



}());
