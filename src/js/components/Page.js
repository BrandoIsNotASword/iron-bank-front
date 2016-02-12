import React from 'react';
import { Paper } from 'material-ui';

const { PropTypes, Component } = React;

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};
const defaultProps = {
  className: ''
};

class Page extends Component {
  render() {
    const { className } = this.props;

    return (
      <Paper
        className={`Page${className ? ' ' + className : ''}`}
        zDepth={1}
      >
        {this.props.children}
      </Paper>
    );
  }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
