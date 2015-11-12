var ToysIndex = window.ToysIndex = React.createClass({

  _onChange: function (){
    this.forceUpdate();
  },

  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener( this._onChange);
  },


  render: function () {
    if (!this.props.toys) {return null;}
    return(
      <ul>
        {
          this.props.toys.map(function (toy, idx) {
            return <ToyIndexItem key={idx} toy={toy} />;
          })
        }
      </ul>
    );
  }
});
