import styled from 'styled-components'
import { Props } from '.'

import { Theme } from './../../Themes/dark'

export const Title = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 0;
`
