import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Button = styled.button`
  border: unset;
  padding: 8px 16px;
  color: ${props => props.theme.colors.lightPink};
  background-color: ${props => props.theme.colors[props.variant]};
  font-size: 20px;
  border-radius: 6px;

  :hover {
    cursor: pointer;
  }
`

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button
