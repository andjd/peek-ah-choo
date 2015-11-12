(function () {

  var _pokemons = [];

  var _reset = function (data) {
    _pokemons = data;
  };


  var POKEMONS_INDEX_CHANGE_EVENT = "POKEMONS_INDEX_CHANGE_EVENT";

  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PokemonConstants.POKEMONS_RECEIVED:
          _reset(payload.pokemons);
          PokemonStore.changed();
          break;
      }
    }.bind(this)),

    addPokemonsIndexChangeListener: function (callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangeListener: function (callback) {
      this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    changed: function() {
      this.emit(POKEMONS_INDEX_CHANGE_EVENT);
    }

  });



}());
