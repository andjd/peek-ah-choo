var ToyDetail = window.ToyDetail = React.createClass ({
  getStateFromStore: function () {
    var me;
    var myOwner = PokemonStore.find(parseInt(this.props.params.pokemonId));
    myOwner.toys.forEach(function (toy) {
      if (toy.id === parseInt(this.props.params.toyId)) { me = toy;}
    }.bind(this));

    return {toy: me};
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener(
      this._onChange
    );
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonDetailChangeListener(
      this._onChange
    );
  },

  componentWillReceiveProps: function (newProps) {
    this._onChange();
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },



  render: function () {
    return (
      <div className="detail">
        <img src={this.state.toy.image_url} />
      </div>

    );
  }




});
