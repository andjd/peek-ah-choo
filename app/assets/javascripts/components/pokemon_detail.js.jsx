var PokemonDetail = window.PokemonDetail = React.createClass({

  _onDetailChange: function () {

    this.setState( this.getStateFromStore());
  },

  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener(
      this._onDetailChange
    );
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonDetailChangeListener(
      this._onDetailChange
    );
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSinglePokemon(newProps.params.pokemonId);
  },

  getStateFromStore: function () {
    return { pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId)) };
  },

  render: function () {
    if (!this.state.pokemon) { return <div></div>;}
    return(
      <div>
        <div className="detail group">
          <img src={this.state.pokemon.image_url} />
          <span>{this.state.pokemon.attack}</span>
          <span>{this.state.pokemon.defense}</span>
        </div>
          <ToysIndex toys={this.state.pokemon.toys}/>
      </div>
    );
  }
});
