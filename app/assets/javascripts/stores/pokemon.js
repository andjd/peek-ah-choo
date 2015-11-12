(function () {

  var _pokemons = [];

  var _reset = function (data) {
    _pokemons = data;
  };


  var POKEMONS_INDEX_CHANGE_EVENT = "POKEMONS_INDEX_CHANGE_EVENT";
  var POKEMON_DETAIL_CHANGE_EVENT = "POKEMON_DETAIL_CHANGE_EVENT";

  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PokemonConstants.POKEMONS_RECEIVED:
          _reset(payload.pokemons);
          PokemonStore.indexChanged();
          break;
        case PokemonConstants.SINGLE_POKEMON_RECEIVED:
          var pokeIdx = payload.pokemon.id;
          for (var i = 0; i< _pokemons.length; i++) {
            if (_pokemons[i].id === pokeIdx) {
              _pokemons[i] = payload.pokemon;
              break;
            }
          }

          PokemonStore.detailChanged();
          break;
      }
    }.bind(this)),

    addPokemonsIndexChangeListener: function (callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangeListener: function (callback) {
      this.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    addPokemonDetailChangeListener: function (callback) {
      this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    removePokemonDetailChangeListener: function (callback) {
      this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    indexChanged: function() {
      this.emit(POKEMONS_INDEX_CHANGE_EVENT);
    },

    detailChanged: function () {
      this.emit(POKEMON_DETAIL_CHANGE_EVENT);
    },

    find: function (idx) {
      var me = _pokemons.filter(function (pokemon) {
        return (pokemon.id === idx);
      });
      return me[0];
    }

  });



}());
