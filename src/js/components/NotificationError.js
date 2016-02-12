import React from 'react';
import classNames from 'classnames';
import { Paper } from 'material-ui';

const { Component, PropTypes } = React;

const propTypes = {
  message: PropTypes.string,
  error: PropTypes.bool
};
const defaultProps = {
  message: '',
  error: false
};

class NotificationError extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper
        className={classNames('NotificationError', {
          'NotificationError--visible': this.props.error
        })}
        style={{ backgroundColor: 'red' }}>
        {this.props.message}
      </Paper>
    );
  }
}

NotificationError.propTypes = propTypes;
NotificationError.defaultProps = defaultProps;

export default NotificationError;
