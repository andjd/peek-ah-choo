var ToyIndexItem = window.ToyIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showToyDetail: function (e) {
    e.preventDefault();

    this.history.pushState(null, "/pokemon/" + this.props.toy.pokemon_id + "/toys/" + this.props.toy.id);

  },

  render: function () {
    return(
      <li className="toy-list-item" onClick={this.showToyDetail}>
        <span>{this.props.toy.name}</span>
        <span>{this.props.toy.price}</span>
        <span>{this.props.toy.happiness}</span>
      </li>
    );
  }
});
