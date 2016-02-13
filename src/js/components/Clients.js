import React from 'react';
import mui from 'material-ui';

const { PropTypes, Component } = React;
const { List, ListItem } = mui;
const propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
  })),
  onClickClient: PropTypes.func
};
const defaultProps = {
  onClickClient: () => {}
};

class Clients extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(clientCode) {
    this.props.onClickClient(clientCode);
  }

  renderClients() {
    return this.props.clients.map((client, key) => {
      return (
        <ListItem
          className="Clients__client"
          key={key + 1}
          onClick={this.handleClick.bind(this, client.code)}
        >
          <ul className="Clients__information">
            <li className="Clients__element">{client.code}</li>
            <li className="Clients__element">{client.name}</li>
            <li className="Clients__element">{client.type.toUpperCase()}</li>
          </ul>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <List className="Clients">
        <ListItem className="Clients__client" key={0}>
          <ul className="Clients__information">
            <li className="Clients__element">CÓDIGO</li>
            <li className="Clients__element">NOMBRE</li>
            <li className="Clients__element">TIPO</li>
          </ul>
        </ListItem>
        {this.renderClients()}
      </List>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;
