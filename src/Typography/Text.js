import styled, { css } from 'styled-components/native'
import PropTypes from 'prop-types'

const Text = styled.Text`
  ${props => props.font && css`font-family: ${props.font};`};
  ${props => props.size && css`font-size: ${props.size};`};
  ${props => props.weight && css`font-weight: ${props.weight};`};
  ${props => props.leading && css`line-height: ${props.leading};`};
  ${props => props.tracking && css`letter-spacing: ${props.tracking};`};
  ${props => props.color && css`color: ${props.color};`};
`

Text.propTypes = {
  font: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.oneOf(['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']),
  leading: PropTypes.number,
  tracking: PropTypes.number,
  color: PropTypes.string
}

export default Text
