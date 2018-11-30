import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';

const noop = () => {};

class Switch extends Component {
  static propTypes = {
    leftLabel: PropTypes.string,
    rightLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    on: PropTypes.bool.isRequired
  };

  render() {
    const className = 'c-Switch';
    const {
      on,
      'aria-label': ariaLabel,
      onClick,
      leftLabel,
      rightLabel
    } = this.props;
    const btnClassName = [
      `${className}__toggle-btn`,
      on ? `${className}--toggle-btn-on` : `${className}--toggle-btn-off`
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={className}>
        <label aria-label={ariaLabel || 'Toggle'}>
          <input
            className={`${className}__toggle-input`}
            type='checkbox'
            checked={on}
            onChange={noop}
            onClick={onClick}
            data-testid='toggle-input'
          />
          <span className={`${className}__label${!on ? '--active' : ''}`}>
            {leftLabel}
          </span>
          <span className={btnClassName} />
          <span className={`${className}__label${on ? '--active' : ''}`}>
            {rightLabel}
          </span>
        </label>
      </div>
    );
  }
}

export default Switch;
