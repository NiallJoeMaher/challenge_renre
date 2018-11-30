import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool
  };

  static defaultProps = {
    active: false
  }

  render() {
    const { onClick, text, active } = this.props;
    const className = `c-Button${active ? '--active' : ''}`;
    return (
      <button 
        onClick={onClick} 
        key={text} 
        className={className}
      >
      {text}
      </button>
    )
  }
}

export default Button;
