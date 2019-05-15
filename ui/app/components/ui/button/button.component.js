import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const CLASSNAME_DEFAULT = 'btn-default'
const CLASSNAME_PRIMARY = 'btn-primary'
const CLASSNAME_SECONDARY = 'btn-secondary'
const CLASSNAME_CONFIRM = 'btn-primary'
const CLASSNAME_RAISED = 'btn-raised'
const CLASSNAME_LARGE = 'btn--large'
const CLASSNAME_FIRST_TIME = 'btn--first-time'

const typeHash = {
  default: CLASSNAME_DEFAULT,
  primary: CLASSNAME_PRIMARY,
  secondary: CLASSNAME_SECONDARY,
  warning: 'btn-warning',
  danger: 'btn-danger',
  'danger-primary': 'btn-danger-primary',
  link: 'btn-link',
  // TODO: Legacy button type to be deprecated
  confirm: CLASSNAME_CONFIRM,
  raised: CLASSNAME_RAISED,
  'first-time': CLASSNAME_FIRST_TIME,
}

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    large: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.element,
    ]),
  }

  render () {
    const { type, large, className, ...buttonProps } = this.props

    return (
      <button
        className={classnames(
          'button',
          typeHash[type] || CLASSNAME_DEFAULT,
          large && CLASSNAME_LARGE,
          className
        )}
        { ...buttonProps }
      >
        { this.props.children }
      </button>
    )
  }
}