var PokemonIndexItem = window.PokemonIndexItem = React.createClass({
  render: function () {
    return (
      <li className="poke-list-item">
        <h3>{this.props.pokemon.name}</h3>
        <p>{this.props.pokemon.poke_type}</p>
      </li>
    );
  }
});
