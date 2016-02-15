import React from 'react';
import mui from 'material-ui';

const { PropTypes, Component } = React;
const { Paper } = mui;
const propTypes = {
  user: PropTypes.object.isRequired
};

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      last_name,
      email,
      phone,
      address,
      type,
      code
    } = this.props.user;

    return (
      <Paper className="ProfileHeader__section" zDepth={1}>
        <p className="ProfileHeader__title">INFORMACIÓN</p>
        <div className="ProfileHeader__content">
          <p className="ProfileHeader__information">Nombre: { `${name} ${last_name}` }</p>
          <p className="ProfileHeader__information">Email: { email }</p>
          <p className="ProfileHeader__information">Teléfono: { phone }</p>
          <p className="ProfileHeader__information">Dirección: { address }</p>
          <p className="ProfileHeader__information">Tipo de usuario: { type }</p>
          <p className="ProfileHeader__information">Código de usuario: { code }</p>
        </div>
      </Paper>
    );
  }
}

ProfileHeader.propTypes = propTypes;

export default ProfileHeader;
