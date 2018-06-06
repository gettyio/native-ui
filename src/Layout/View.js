import styled, { css } from 'styled-components/native'
import PropTypes from 'prop-types'

const margin = css`
  ${props => props.m && css`margin: ${props.m}px;`}
  ${props => props.mh && css`margin-horizontal: ${props.mh}px;`}
  ${props => props.mv && css` margin-vertical: ${props.mv}px;`}
  ${props => props.mt && css` margin-top: ${props.mt}px;`}
  ${props => props.mb && css` margin-bottom: ${props.mb}px;`}
  ${props => props.ml && css` margin-left: ${props.ml}px;`}
  ${props => props.mr && css` margin-right: ${props.mr}px;`};
`
const padding = css`
  ${props => props.p && css`padding: ${props.p}px;`}
  ${props => props.ph && css`padding-horizontal: ${props.ph}px;`}
  ${props => props.pv && css` padding-vertical: ${props.pv}px;`}
  ${props => props.pt && css` padding-top: ${props.pt}px;`}
  ${props => props.pb && css` padding-bottom: ${props.pb}px;`}
  ${props => props.pl && css` padding-left: ${props.pl}px;`}
  ${props => props.pr && css` padding-right: ${props.pr}px;`};
`

const View = styled.View`
  ${props => props.flex && css`flex: ${props.flex};`}
  ${props => props.align && css`align-items: ${props.align};`}
  ${props => props.justify && css`justify-content: ${props.justify};`}
  ${props => props.background && css`background: ${props.background};`}
  ${props => props.height && css`height: ${props.height}px;`}
  ${props => props.width && css`width: ${props.width}px;`}
  ${margin}
  ${padding}
`

View.propTypes = {
  flex: PropTypes.string,
  align: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  background: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  m: PropTypes.number,
  mv: PropTypes.number,
  mh: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  p: PropTypes.number,
  pv: PropTypes.number,
  ph: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number
}

export default View
