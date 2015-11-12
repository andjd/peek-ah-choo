var PokemonsIndex = window.PokemonsIndex = React.createClass({
  getInitialState: function () {
    return {pokemons: []};
  },

  _setStore: function () {
    return { pokemons: PokemonStore.all() };
  },

  _onChange: function () {
    this.setState (this._setStore());
  },

  componentDidMount: function () {
    PokemonStore.addPokemonsIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonsIndexChangeListener(this._onChange);
  },

  render: function () {
    return(
      <ul>
        {
          this.state.pokemons.map(function (el, idx) {
            return <PokemonIndexItem key={idx} pokemon={el} />;
          })
        }
      </ul>
    );
  }
});
