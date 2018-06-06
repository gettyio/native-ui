import styled, { css } from 'styled-components/native'

const margin = css`
  ${props => props.m && css`margin: ${props.theme.spacing[props.m]}px;`}
  ${props => props.mh && css`margin-horizontal: ${props.theme.spacing[props.mh]}px;`}
  ${props => props.mv && css` margin-vertical: ${props.theme.spacing[props.mv]}px;`}
  ${props => props.mt && css` margin-top: ${props.theme.spacing[props.mt]}px;`}
  ${props => props.mb && css` margin-bottom: ${props.theme.spacing[props.mb]}px;`}
  ${props => props.ml && css` margin-left: ${props.theme.spacing[props.ml]}px;`}
  ${props => props.mr && css` margin-right: ${props.theme.spacing[props.mr]}px;`};
`
const padding = css`
  ${props => props.p && css`padding: ${props.theme.spacing[props.p]}px;`}
  ${props => props.ph && css`padding-horizontal: ${props.theme.spacing[props.ph]}px;`}
  ${props => props.pv && css` padding-vertical: ${props.theme.spacing[props.pv]}px;`}
  ${props => props.pt && css` padding-top: ${props.theme.spacing[props.pt]}px;`}
  ${props => props.pb && css` padding-bottom: ${props.theme.spacing[props.pb]}px;`}
  ${props => props.pl && css` padding-left: ${props.theme.spacing[props.pl]}px;`}
  ${props => props.pr && css` padding-right: ${props.theme.spacing[props.pr]}px;`};
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

View.defaultProps = {
  theme: {
    spacing: [2, 4, 8, 16, 32, 64]
  }
}

export default View
