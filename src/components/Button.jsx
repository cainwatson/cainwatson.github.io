import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const buttonStyles = props => css`
  border: unset;
  padding: 8px 16px;
  color: ${props.theme.colors.lightPink};
  background-color: ${props.theme.colors[props.variant]};
  font-size: 20px;
  border-radius: 6px;

  :hover {
    cursor: pointer;
  }
`

export const Button = styled.button`
  ${buttonStyles}
`

export const LinkButton = styled.a`
  ${buttonStyles}
  font-family: 'Poppins', sans-serif;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

const defaultProps = {
  variant: 'primary',
}

Button.propTypes = propTypes
LinkButton.propTypes = propTypes

Button.defaultProps = defaultProps
LinkButton.defaultProps = defaultProps

export default Button
