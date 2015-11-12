var PokemonIndexItem = window.PokemonIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  showDetail: function (e) {
    e.preventDefault();

    this.history.pushState(null, "/pokemon/" + this.props.pokemon.id)

  },

  render: function () {
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        <h3>{this.props.pokemon.name}</h3>
        <p>{this.props.pokemon.poke_type}</p>
      </li>
    );
  }
});
