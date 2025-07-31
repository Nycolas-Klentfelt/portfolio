import styled from 'styled-components'

import { Theme } from './../../Themes/dark'

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).corDaBorda};
  padding: 16px;
`
export const LinkBtn = styled.a`
  display: inline-block;
  color: ${(props) => (props.theme as Theme).corDeFundo};
  background-color: ${(props) => (props.theme as Theme).corDeFundoBotao};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
`
