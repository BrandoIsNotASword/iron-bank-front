import React from 'react';
import mui from 'material-ui';

const { PropTypes, Component } = React;
const { List, ListItem } = mui;
const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    money: PropTypes.number,
    type: PropTypes.string
  })),
  onClickCard: PropTypes.func
};
const defaultProps = {
  onClickCard: () => {}
};

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  handleClickCard(card) {
    this.props.onClickCard(card);
  }

  renderCards() {
    if (!this.props.cards.length) return <div className="Cards__message">No hay tarjetas</div>;

    return this.props.cards.map((card, key) => {
      return (
        <ListItem
          className="Cards__card"
          key={key + 1}
          onClick={this.handleClickCard.bind(this, card.card_number)}
        >
          <ul className="Cards__information">
            <li className="Cards__element">{card.card_number}</li>
            <li className="Cards__element">{`$${card.amount}`}</li>
            <li className="Cards__element">{card.name.toUpperCase()}</li>
            <li className="Cards__element">{card.type.toUpperCase()}</li>
          </ul>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <List className="Cards">
        <ListItem className="Cards__card" key={0}>
          <ul className="Cards__information">
            <li className="Cards__element">CÓDIGO</li>
            <li className="Cards__element">SALDO</li>
            <li className="Cards__element">NOMBRE</li>
            <li className="Cards__element">TIPO</li>
          </ul>
        </ListItem>
        {this.renderCards()}
      </List>
    );
  }
}

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;

export default Cards;
