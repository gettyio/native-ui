import styled from 'styled-components/native'

const Text = styled.Text`
  font-family: ${props =>
    props.font || props.theme.typography[props.type].font};
  font-size: ${props =>
    props.size || props.theme.typography[props.type].size}px;
  font-weight: ${props =>
    props.weight || props.theme.typography[props.type].weight};
  line-height: ${props =>
    props.leading || props.theme.typography[props.type].leading}px;
  letter-spacing: ${props =>
    props.tracking || props.theme.typography[props.type].tracking}px;
  color: ${props => props.color || props.theme.typography[props.type].color};
`

Text.defaultProps = {
  type: 'body',
  theme: {
    typography: {
      body: {
        font: 'sans-serif',
        weight: 500,
        size: 22,
        leading: 28,
        tracking: -0.384,
        color: 'black'
      }
    }
  }
}

export default Text
